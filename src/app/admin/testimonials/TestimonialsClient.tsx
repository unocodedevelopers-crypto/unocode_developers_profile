"use client";

import { useState } from "react";
import { Testimonial } from "@/components/HomePageClient";
import { addTestimonial, deleteTestimonial, updateTestimonial } from "@/actions/testimonials";
import { Plus, X, Pencil, Trash2, MessageSquareQuote, Upload } from "lucide-react";

export default function TestimonialsClient({ initialTestimonials }: { initialTestimonials: Testimonial[] }) {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(initialTestimonials);
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this testimonial?")) {
      await deleteTestimonial(id);
      setTestimonials(testimonials.filter(t => t.id !== id));
    }
  };

  const handleUploadAndSubmit = async (e: React.FormEvent<HTMLFormElement>, action: 'add' | 'update', id?: string) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const fileInput = form.querySelector('input[type="file"]') as HTMLInputElement;
    const file = fileInput?.files?.[0];

    // If there is a file, upload it first
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
          // Replace the file data with the url string for our server action
          formData.set('imageUrl', result.url);
        }
      } catch (err) {
        console.error("Upload failed", err);
        alert("Failed to upload image.");
        return;
      }
    } else {
      // If no file but there's a previous URL (edit mode), keep it. 
      // If adding new without image, just clear the imageUrl
      if (!formData.get('existingImageUrl')) {
        formData.delete('imageUrl');
      } else {
        formData.set('imageUrl', formData.get('existingImageUrl') as string);
      }
    }

    formData.delete('existingImageUrl');

    if (action === 'add') {
      const res = await addTestimonial(formData);
      if (res.success) {
        setIsAdding(false);
        window.location.reload();
      }
    } else if (action === 'update' && id) {
      await updateTestimonial(id, formData);
      setEditingId(null);
      window.location.reload();
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Testimonials Management</h2>
          <p className="text-base-content/60 mt-1">Manage client reviews and feedback.</p>
        </div>
        <button
          className={`btn ${isAdding ? 'btn-ghost text-base-content/70' : 'btn-primary shadow-lg shadow-primary/20'} gap-2`}
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? <><X size={18} /> Cancel</> : <><Plus size={18} /> Add New Testimonial</>}
        </button>
      </div>

      {isAdding && (
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Add New Testimonial</h2>
            <form onSubmit={(e) => handleUploadAndSubmit(e, 'add')} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Company (Optional)</span></label>
                <input type="text" name="company" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Image Upload (Optional)</span></label>
                <input type="file" name="file" accept="image/*" className="file-input file-input-bordered w-full" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Review Text</span></label>
                <textarea name="text" className="textarea textarea-bordered h-24" required></textarea>
              </div>
              <button type="submit" className="btn btn-success">Save Testimonial</button>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="card bg-base-100 shadow-sm border border-base-200/50 hover:shadow-md transition-shadow group flex flex-col">
            <div className="card-body flex-1">
              {editingId === testimonial.id ? (
                <form onSubmit={(e) => handleUploadAndSubmit(e, 'update', testimonial.id)} className="space-y-4 w-full flex flex-col flex-1">
                  <input type="text" name="name" defaultValue={testimonial.name} className="input input-bordered w-full" required />
                  <input type="text" name="company" defaultValue={testimonial.company} className="input input-bordered w-full" placeholder="Company" />
                  
                  <div className="form-control w-full">
                    <label className="label"><span className="label-text text-xs">New Image (Optional)</span></label>
                    <input type="file" name="file" accept="image/*" className="file-input file-input-bordered file-input-sm w-full" />
                    <input type="hidden" name="existingImageUrl" value={testimonial.imageUrl || ''} />
                  </div>
                  
                  <textarea name="text" defaultValue={testimonial.text} className="textarea textarea-bordered w-full h-24 mt-2" required></textarea>
                  <div className="flex gap-2 mt-auto pt-2">
                    <button type="submit" className="btn btn-sm btn-success">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} className="btn btn-sm">Cancel</button>
                  </div>
                </form>
              ) : (
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <MessageSquareQuote size={32} className="text-primary/30" />
                  </div>
                  <p className="italic text-base-content/80 leading-relaxed flex-1 mb-6">"{testimonial.text}"</p>
                  
                  <div className="flex gap-4 items-center mt-auto border-t border-base-200/50 pt-4">
                    {testimonial.imageUrl ? (
                      <img src={testimonial.imageUrl.startsWith('http') ? testimonial.imageUrl : (testimonial.imageUrl.startsWith('.') ? testimonial.imageUrl.substring(1) : (testimonial.imageUrl.startsWith('/') ? testimonial.imageUrl : `/${testimonial.imageUrl}`))} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-base-300" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-xs text-base-content/60">{testimonial.company}</p>
                    </div>
                  </div>
                  <div className="card-actions justify-end mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button onClick={() => setEditingId(testimonial.id)} className="btn btn-xs btn-ghost hover:bg-base-200 gap-1">
                      <Pencil size={12} /> Edit
                    </button>
                    <button onClick={() => handleDelete(testimonial.id)} className="btn btn-xs btn-ghost text-error hover:bg-error/10 gap-1">
                      <Trash2 size={12} /> Delete
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
