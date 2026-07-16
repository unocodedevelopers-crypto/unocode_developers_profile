"use client";

import { useState } from "react";
import { AboutSection, addAboutSection, deleteAboutSection, updateAboutSection } from "@/actions/about";
import { Plus, X, Pencil, Trash2, AlignLeft } from "lucide-react";

export default function AboutClient({ initialEntries }: { initialEntries: AboutSection[] }) {
  const [entries, setEntries] = useState<AboutSection[]>(initialEntries);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this section?")) {
      await deleteAboutSection(id);
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  const handleUploadAndSubmit = async (e: React.FormEvent<HTMLFormElement>, action: 'add' | 'update', id?: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const file = formData.get('file') as File;

    if (file && file.size > 0) {
      const uploadData = new FormData();
      uploadData.append('file', file);
      
      try {
        const res = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });
        const result = await res.json();
        
        if (result.success && result.url) {
          formData.set('imageUrl', result.url);
        }
      } catch (err) {
        console.error("Upload failed", err);
        alert("Failed to upload image.");
        return;
      }
    } else {
      if (!formData.get('existingImageUrl')) {
        formData.delete('imageUrl');
      } else {
        formData.set('imageUrl', formData.get('existingImageUrl') as string);
      }
    }

    formData.delete('existingImageUrl');
    if (action === 'add') {
      const res = await addAboutSection(formData);
      if (res.success) {
        setIsAdding(false);
        window.location.href = window.location.href;
      }
    } else if (action === 'update' && id) {
      await updateAboutSection(id, formData);
      setEditingId(null);
      window.location.href = window.location.href;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About Page Management</h1>
          <p className="text-base-content/60 mt-1">Manage the text sections on your about page.</p>
        </div>
        <button
          className={`btn ${isAdding ? 'btn-ghost text-base-content/70' : 'btn-primary shadow-lg shadow-primary/20'} gap-2`}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? <><X size={18} /> Cancel</> : <><Plus size={18} /> Add New Section</>}
        </button>
      </div>

      {isAdding && (
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Add New Section</h2>
            <form onSubmit={(e) => handleUploadAndSubmit(e, 'add')} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Title (Optional, e.g. "What Drives Me")</span></label>
                <input type="text" name="title" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Main Text (HTML supported)</span></label>
                <textarea name="content" className="textarea textarea-bordered h-32" required></textarea>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Image Upload (Optional - Used for Layout)</span></label>
                <input type="file" name="file" accept="image/*" className="file-input file-input-bordered w-full" />
              </div>
              <button type="submit" className="btn btn-success">Save Section</button>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-8">
        {entries.map(entry => (
          <div key={entry.id} className="card bg-base-100 shadow-sm border border-base-200/50 hover:shadow-md transition-shadow group overflow-hidden">
            <div className="card-body">
              {editingId === entry.id ? (
                <form onSubmit={(e) => handleUploadAndSubmit(e, 'update', entry.id)} className="space-y-4 w-full">
                  <div className="form-control">
                    <label className="label"><span className="label-text">Title</span></label>
                    <input type="text" name="title" defaultValue={entry.title} className="input input-bordered w-full" />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Main Text (HTML supported)</span></label>
                    <textarea name="content" defaultValue={entry.content} className="textarea textarea-bordered w-full h-32" required></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Order (lowest shows first)</span></label>
                    <input type="number" name="order" defaultValue={entry.order} className="input input-bordered w-32" required />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">New Image (Optional)</span></label>
                    <input type="file" name="file" accept="image/*" className="file-input file-input-bordered file-input-sm w-full" />
                    <input type="hidden" name="existingImageUrl" value={entry.imageUrl || ''} />
                  </div>
                  <div className="flex gap-2 mt-4 pt-4 border-t border-base-200/50">
                    <button type="submit" className="btn btn-sm btn-success">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} className="btn btn-sm">Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-2xl font-serif">{entry.title || "No Title (Intro block)"}</h3>
                    <div className="badge badge-neutral">Order: {entry.order}</div>
                  </div>
                  <div className="p-5 bg-base-200/50 rounded-xl text-base-content/80 leading-relaxed border border-base-200">
                    <div dangerouslySetInnerHTML={{ __html: entry.content }}></div>
                  </div>
                  
                  {entry.imageUrl && (
                    <div className="mt-2 text-sm text-base-content/70">
                      <strong>Attached Image:</strong> {entry.imageUrl}
                    </div>
                  )}

                  <div className="card-actions justify-start mt-4 pt-4 border-t border-base-200/50 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setEditingId(entry.id)} className="btn btn-sm btn-ghost hover:bg-base-200 gap-1">
                      <Pencil size={14} /> Edit
                    </button>
                    <button onClick={() => handleDelete(entry.id)} className="btn btn-sm btn-ghost text-error hover:bg-error/10 gap-1">
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {entries.length === 0 && !isAdding && (
          <div className="text-center p-12 bg-base-200/50 rounded-xl border border-base-200">
            <AlignLeft size={48} className="mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-medium">No sections found</h3>
            <p className="text-base-content/60 mt-2">Click "Add New Section" to create your about content.</p>
          </div>
        )}
      </div>
    </div>
  );
}
