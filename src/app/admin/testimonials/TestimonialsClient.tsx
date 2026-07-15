"use client";

import { useState } from "react";
import { Testimonial } from "@/components/HomePageClient";
import { addTestimonial, deleteTestimonial, updateTestimonial } from "@/actions/testimonials";

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Bio Data Management</h1>
        <button
          className="btn btn-primary"
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? "Cancel" : "Add New Bio Data"}
        </button>
      </div>

      {isAdding && (
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Add New Testimonial</h2>
            <form action={async (formData) => {
              const res = await addTestimonial(formData);
              if (res.success) {
                setIsAdding(false);
                // Simple reload to get fresh data instead of complex optimistic UI
                window.location.reload();
              }
            }} className="space-y-4">
              <div className="form-control">
                <label className="label"><span className="label-text">Name</span></label>
                <input type="text" name="name" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Company (Optional)</span></label>
                <input type="text" name="company" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label"><span className="label-text">Image URL (Optional)</span></label>
                <input type="text" name="imageUrl" className="input input-bordered" placeholder="/path/to/image.jpg or https://..." />
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

      <div className="grid gap-6">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
              {editingId === testimonial.id ? (
                <form action={async (formData) => {
                  await updateTestimonial(testimonial.id, formData);
                  setEditingId(null);
                  window.location.reload();
                }} className="space-y-4">
                  <input type="text" name="name" defaultValue={testimonial.name} className="input input-bordered w-full" required />
                  <input type="text" name="company" defaultValue={testimonial.company} className="input input-bordered w-full" placeholder="Company" />
                  <input type="text" name="imageUrl" defaultValue={testimonial.imageUrl} className="input input-bordered w-full" placeholder="Image URL (/path/to/img or https://...)" />
                  <textarea name="text" defaultValue={testimonial.text} className="textarea textarea-bordered w-full h-24" required></textarea>
                  <div className="flex gap-2">
                    <button type="submit" className="btn btn-sm btn-success">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} className="btn btn-sm">Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex gap-4 mb-4">
                    {testimonial.imageUrl ? (
                      <img src={testimonial.imageUrl.startsWith('http') ? testimonial.imageUrl : (testimonial.imageUrl.startsWith('.') ? testimonial.imageUrl.substring(1) : (testimonial.imageUrl.startsWith('/') ? testimonial.imageUrl : `/${testimonial.imageUrl}`))} alt={testimonial.name} className="w-16 h-16 rounded-full object-cover border border-base-300" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-base-300 flex items-center justify-center text-2xl font-bold">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <p className="font-bold text-lg">{testimonial.name}</p>
                      <p className="text-sm text-base-content/70">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="italic text-lg">"{testimonial.text}"</p>
                  <div className="card-actions justify-end mt-4">
                    <button onClick={() => setEditingId(testimonial.id)} className="btn btn-sm btn-outline">Edit</button>
                    <button onClick={() => handleDelete(testimonial.id)} className="btn btn-sm btn-error">Delete</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
