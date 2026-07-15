"use client";

import { useState } from "react";
import { BioEntry, addBio, deleteBio, updateBio } from "@/actions/bio";

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

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">About / Bio Management</h1>
        <button
          className="btn btn-primary"
          onClick={() => setIsAdding(!isAdding)}
        >
          {isAdding ? "Cancel" : "Add New Bio Section"}
        </button>
      </div>

      {isAdding && (
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Add New Bio Section</h2>
            <form action={async (formData) => {
              const res = await addBio(formData);
              if (res.success) {
                setIsAdding(false);
                window.location.reload();
              }
            }} className="space-y-4">
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
                <label className="label"><span className="label-text">Image URL (Optional)</span></label>
                <input type="text" name="imageUrl" className="input input-bordered" placeholder="e.g. Portrait Leon Obermann 1.webp" />
              </div>
              <button type="submit" className="btn btn-success">Save Bio Section</button>
            </form>
          </div>
        </div>
      )}

      <div className="grid gap-6">
        {entries.map(entry => (
          <div key={entry.id} className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
              {editingId === entry.id ? (
                <form action={async (formData) => {
                  await updateBio(entry.id, formData);
                  setEditingId(null);
                  window.location.reload();
                }} className="space-y-4">
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
                    <label className="label"><span className="label-text">Image URL</span></label>
                    <input type="text" name="imageUrl" defaultValue={entry.imageUrl} className="input input-bordered w-full" />
                  </div>
                  <div className="flex gap-2 mt-4">
                    <button type="submit" className="btn btn-sm btn-success">Save</button>
                    <button type="button" onClick={() => setEditingId(null)} className="btn btn-sm">Cancel</button>
                  </div>
                </form>
              ) : (
                <>
                  <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-2xl">{entry.greeting}</h3>
                    <div className="p-4 bg-base-200 rounded-lg">
                      <p dangerouslySetInnerHTML={{ __html: entry.text }}></p>
                    </div>
                    <p className="italic text-base-content/80">{entry.closing}</p>
                    {entry.imageUrl && (
                      <p className="text-sm text-base-content/60">Image: {entry.imageUrl}</p>
                    )}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <button onClick={() => setEditingId(entry.id)} className="btn btn-sm btn-outline">Edit</button>
                    <button onClick={() => handleDelete(entry.id)} className="btn btn-sm btn-error">Delete</button>
                  </div>
                </>
              )}
            </div>
          </div>
        ))}
        {entries.length === 0 && !isAdding && (
          <div className="text-center p-8 bg-base-200 rounded-lg">
            <p>No bio sections found. Click "Add New Bio Section" to create one.</p>
          </div>
        )}
      </div>
    </div>
  );
}
