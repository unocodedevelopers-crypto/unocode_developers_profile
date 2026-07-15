"use client";

import { useState } from "react";
import { BioEntry, addBio, deleteBio, updateBio } from "@/actions/bio";
import { Plus, X, Pencil, Trash2, User, Image as ImageIcon } from "lucide-react";

export default function BioClient({ initialEntries }: { initialEntries: BioEntry[] }) {
  const [entries, setEntries] = useState<BioEntry[]>(initialEntries);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this bio section?")) {
      await deleteBio(id);
      setEntries(entries.filter(e => e.id !== id));
    }
  };

  const handleUploadAndSubmit = async (e: React.FormEvent<HTMLFormElement>, action: 'add' | 'update', id?: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    if (file) {
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
      const res = await addBio(formData);
      if (res.success) {
        setIsAdding(false);
        window.location.reload();
      }
    } else if (action === 'update' && id) {
      await updateBio(id, formData);
      setEditingId(null);
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">About / Bio Management</h1>
          <p className="text-base-content/60 mt-1">Customize the introduction sections on your homepage.</p>
        </div>
        <button
          className={`btn ${isAdding ? 'btn-ghost text-base-content/70' : 'btn-primary shadow-lg shadow-primary/20'} gap-2`}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? <><X size={18} /> Cancel</> : <><Plus size={18} /> Add New Bio Section</>}
        </button>
      </div>

      {isAdding && (
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Add New Bio Section</h2>
            <form onSubmit={(e) => handleUploadAndSubmit(e, 'add')} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Greeting (e.g. "Hey,")</span></label>
                <input type="text" name="greeting" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Main Text (HTML supported)</span></label>
                <textarea name="text" className="textarea textarea-bordered h-32" required></textarea>
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Closing Text</span></label>
                <input type="text" name="closing" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Image Upload (Optional)</span></label>
                <input type="file" name="file" accept="image/*" className="file-input file-input-bordered w-full" />
              </div>
              <button type="submit" className="btn btn-success">Save Bio Section</button>
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
                    <label className="label"><span className="label-text">Greeting</span></label>
                    <input type="text" name="greeting" defaultValue={entry.greeting} className="input input-bordered w-full" required />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Main Text (HTML supported)</span></label>
                    <textarea name="text" defaultValue={entry.text} className="textarea textarea-bordered w-full h-32" required></textarea>
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Closing Text</span></label>
                    <input type="text" name="closing" defaultValue={entry.closing} className="input input-bordered w-full" required />
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
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col gap-4">
                    <h3 className="font-bold text-3xl font-serif">{entry.greeting}</h3>
                    <div className="p-5 bg-base-200/50 rounded-xl text-base-content/80 leading-relaxed border border-base-200">
                      <p dangerouslySetInnerHTML={{ __html: entry.text }}></p>
                    </div>
                    <p className="text-lg font-medium text-base-content/90">{entry.closing}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-xs font-mono text-base-content/50 bg-base-200 p-3 rounded-lg w-fit">
                      <ImageIcon size={14} />
                      {entry.imageUrl ? <span>{entry.imageUrl}</span> : <span className="italic">No image specified (uses default)</span>}
                    </div>

                    <div className="card-actions justify-start mt-6 pt-4 border-t border-base-200/50 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button onClick={() => setEditingId(entry.id)} className="btn btn-sm btn-ghost hover:bg-base-200 gap-1">
                        <Pencil size={14} /> Edit
                      </button>
                      <button onClick={() => handleDelete(entry.id)} className="btn btn-sm btn-ghost text-error hover:bg-error/10 gap-1">
                        <Trash2 size={14} /> Delete
                      </button>
                    </div>
                  </div>
                  
                  {/* Image Preview */}
                  <div className="md:w-1/3 flex-shrink-0 flex items-center justify-center">
                    <div className="aspect-[3/4] w-full max-w-[240px] bg-base-200 rounded-xl overflow-hidden border border-base-300 relative shadow-inner">
                      {entry.imageUrl ? (
                        <img src={entry.imageUrl.startsWith('.') ? entry.imageUrl : `/${entry.imageUrl}`} alt="Bio Preview" className="object-cover w-full h-full" onError={(e) => (e.currentTarget.style.display = 'none')} />
                      ) : (
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-base-content/30 p-6 text-center">
                          <User size={48} className="mb-4 opacity-50" />
                          <span className="text-sm">Default Portrait will be used</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
        {entries.length === 0 && !isAdding && (
          <div className="text-center p-12 bg-base-200/50 rounded-xl border border-base-200">
            <User size={48} className="mx-auto mb-4 opacity-20" />
            <h3 className="text-xl font-medium">No bio sections found</h3>
            <p className="text-base-content/60 mt-2">Click "Add New Bio Section" to create your introduction.</p>
          </div>
        )}
      </div>
    </div>
  );
}
