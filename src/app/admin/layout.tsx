import Link from "next/link";
import React from "react";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-screen bg-base-200">
      {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md flex-col hidden md:flex z-20">
        <div className="p-4 border-b border-base-300">
          <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            href="/admin"
            className="block px-4 py-2 rounded-lg bg-primary text-primary-content font-medium"
          >
            Dashboard
          </Link>
          <Link
            href="/admin/messages"
            className="block px-4 py-2 rounded-lg hover:bg-base-200 transition-colors"
          >
            Messages
          </Link>
          <Link
            href="/admin/projects"
            className="block px-4 py-2 rounded-lg hover:bg-base-200 transition-colors"
          >
            Projects
          </Link>
          <Link
            href="/admin/testimonials"
            className="block px-4 py-2 rounded-lg hover:bg-base-200 transition-colors"
          >
            Bio Data
          </Link>
          <Link
            href="/"
            className="block px-4 py-2 rounded-lg hover:bg-base-200 transition-colors mt-8 text-sm"
          >
            &larr; Back to Portfolio
          </Link>
        </nav>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Navbar for mobile or additional actions */}
        <header className="bg-base-100 shadow-sm z-10 flex items-center justify-between p-4 border-b border-base-300 md:hidden">
          <h2 className="text-xl font-bold text-primary">Admin Panel</h2>
          <div className="dropdown dropdown-end">
             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
             </div>
             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link href="/admin">Dashboard</Link></li>
                <li><Link href="/admin/messages">Messages</Link></li>
                <li><Link href="/admin/projects">Projects</Link></li>
                <li><Link href="/admin/testimonials">Bio Data</Link></li>
                <li><Link href="/">&larr; Back to Portfolio</Link></li>
             </ul>
          </div>
        </header>

        {/* Scrollable Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-200 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
  );
}
