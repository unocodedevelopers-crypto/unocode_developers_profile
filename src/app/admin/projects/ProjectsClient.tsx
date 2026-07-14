"use client";

import { useState } from "react";
import { Project, Concept } from "@/components/HomePageClient";
import { addProject, deleteProject, updateProject } from "@/actions/projects";
import { addConcept, deleteConcept, updateConcept } from "@/actions/concepts";

export default function ProjectsClient({ 
  initialProjects, 
  initialConcepts 
}: { 
  initialProjects: Project[], 
  initialConcepts: Concept[] 
}) {
  const [projects, setProjects] = useState<Project[]>(initialProjects);
  const [concepts, setConcepts] = useState<Concept[]>(initialConcepts);
  
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [editingProjectId, setEditingProjectId] = useState<string | null>(null);

  const [isAddingConcept, setIsAddingConcept] = useState(false);
  const [editingConceptId, setEditingConceptId] = useState<string | null>(null);

  const handleDeleteProject = async (id: string) => {
    if (confirm("Are you sure you want to delete this project?")) {
      await deleteProject(id);
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const handleDeleteConcept = async (id: string) => {
    if (confirm("Are you sure you want to delete this concept?")) {
      await deleteConcept(id);
      setConcepts(concepts.filter(c => c.id !== id));
    }
  };

  return (
    <div className="space-y-12">
      {/* Projects Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Featured Projects</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setIsAddingProject(!isAddingProject)}
          >
            {isAddingProject ? "Cancel" : "Add New Project"}
          </button>
        </div>

        {isAddingProject && (
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
              <h3 className="card-title mb-4">Add New Project</h3>
              <form action={async (formData) => {
                const res = await addProject(formData);
                if (res.success) {
                  setIsAddingProject(false);
                  window.location.reload(); 
                }
              }} className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Title</span></label>
                  <input type="text" name="title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Image URL</span></label>
                  <input type="text" name="imageUrl" className="input input-bordered" placeholder="projects/my-project/thumbnail.webp" required />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Description (Use new lines for paragraphs)</span></label>
                  <textarea name="description" className="textarea textarea-bordered h-32" required></textarea>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="form-control">
                    <label className="label"><span className="label-text">Gradient From Color</span></label>
                    <input type="text" name="gradientFrom" className="input input-bordered" placeholder="#061f46" defaultValue="#061f46" required />
                  </div>
                  <div className="form-control">
                    <label className="label"><span className="label-text">Gradient To Color</span></label>
                    <input type="text" name="gradientTo" className="input input-bordered" placeholder="#00244d" defaultValue="#00244d" required />
                  </div>
                </div>
                <button type="submit" className="btn btn-success">Save Project</button>
              </form>
            </div>
          </div>
        )}

        <div className="grid gap-6">
          {projects.map(project => (
            <div key={project.id} className="card lg:card-side bg-base-100 shadow-sm border border-base-200">
              <figure className="lg:w-1/3 bg-base-200 p-4">
                <img src={project.imageUrl.startsWith('.') ? project.imageUrl : `/${project.imageUrl}`} alt={project.title} className="rounded-xl object-cover h-full w-full" />
              </figure>
              <div className="card-body lg:w-2/3">
                {editingProjectId === project.id ? (
                  <form action={async (formData) => {
                    await updateProject(project.id, formData);
                    setEditingProjectId(null);
                    window.location.reload();
                  }} className="space-y-4 w-full">
                    <input type="text" name="title" defaultValue={project.title} className="input input-bordered w-full" required />
                    <input type="text" name="imageUrl" defaultValue={project.imageUrl} className="input input-bordered w-full" required />
                    <textarea name="description" defaultValue={project.description.join('\n')} className="textarea textarea-bordered w-full h-32" required></textarea>
                    <div className="grid grid-cols-2 gap-4">
                      <input type="text" name="gradientFrom" defaultValue={project.gradientFrom} className="input input-bordered w-full" required />
                      <input type="text" name="gradientTo" defaultValue={project.gradientTo} className="input input-bordered w-full" required />
                    </div>
                    <div className="flex gap-2">
                      <button type="submit" className="btn btn-sm btn-success">Save</button>
                      <button type="button" onClick={() => setEditingProjectId(null)} className="btn btn-sm">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h3 className="card-title text-2xl">{project.title}</h3>
                    <div className="space-y-2 mt-2">
                      {project.description.map((desc, i) => (
                        <p key={i} className="text-base-content/80">{desc}</p>
                      ))}
                    </div>
                    <div className="mt-4 flex gap-4 text-sm font-mono text-base-content/60">
                      <span>Image: {project.imageUrl}</span>
                      <span>Gradient: {project.gradientFrom} &rarr; {project.gradientTo}</span>
                    </div>
                    <div className="card-actions justify-end mt-4">
                      <button onClick={() => setEditingProjectId(project.id)} className="btn btn-sm btn-outline">Edit</button>
                      <button onClick={() => handleDeleteProject(project.id)} className="btn btn-sm btn-error">Delete</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider"></div>

      {/* Concepts Section */}
      <section className="space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl font-bold">Concepts</h2>
          <button 
            className="btn btn-primary"
            onClick={() => setIsAddingConcept(!isAddingConcept)}
          >
            {isAddingConcept ? "Cancel" : "Add New Concept"}
          </button>
        </div>

        {isAddingConcept && (
          <div className="card bg-base-100 shadow-sm border border-base-200">
            <div className="card-body">
              <h3 className="card-title mb-4">Add New Concept</h3>
              <form action={async (formData) => {
                const res = await addConcept(formData);
                if (res.success) {
                  setIsAddingConcept(false);
                  window.location.reload(); 
                }
              }} className="space-y-4">
                <div className="form-control">
                  <label className="label"><span className="label-text">Title</span></label>
                  <input type="text" name="title" className="input input-bordered" required />
                </div>
                <div className="form-control">
                  <label className="label"><span className="label-text">Image URL</span></label>
                  <input type="text" name="imageUrl" className="input input-bordered" placeholder="./concepts/MyConcept.webp" required />
                </div>
                <button type="submit" className="btn btn-success">Save Concept</button>
              </form>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {concepts.map(concept => (
            <div key={concept.id} className="card bg-base-100 shadow-sm border border-base-200">
              <figure className="bg-base-200 p-2">
                <img src={concept.imageUrl.startsWith('.') ? concept.imageUrl.substring(1) : (concept.imageUrl.startsWith('/') ? concept.imageUrl : `/${concept.imageUrl}`)} alt={concept.title} className="rounded-xl object-cover h-48 w-full" />
              </figure>
              <div className="card-body">
                {editingConceptId === concept.id ? (
                  <form action={async (formData) => {
                    await updateConcept(concept.id, formData);
                    setEditingConceptId(null);
                    window.location.reload();
                  }} className="space-y-4 w-full">
                    <input type="text" name="title" defaultValue={concept.title} className="input input-bordered w-full input-sm" required />
                    <input type="text" name="imageUrl" defaultValue={concept.imageUrl} className="input input-bordered w-full input-sm" required />
                    <div className="flex gap-2">
                      <button type="submit" className="btn btn-xs btn-success">Save</button>
                      <button type="button" onClick={() => setEditingConceptId(null)} className="btn btn-xs">Cancel</button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h3 className="card-title text-xl">{concept.title}</h3>
                    <p className="text-xs text-base-content/60 font-mono truncate">{concept.imageUrl}</p>
                    <div className="card-actions justify-end mt-4">
                      <button onClick={() => setEditingConceptId(concept.id)} className="btn btn-xs btn-outline">Edit</button>
                      <button onClick={() => handleDeleteConcept(concept.id)} className="btn btn-xs btn-error">Delete</button>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
