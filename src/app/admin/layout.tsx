import Link from "next/link";
import React from "react";
import AdminAuthWrapper from "@/components/AdminAuthWrapper";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminAuthWrapper>
      <div className="flex h-screen bg-base-200">
        {/* Sidebar */}
      <aside className="w-64 bg-base-100 shadow-md flex flex-col z-20">
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

        {/* Scrollable Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-base-200 p-6 md:p-10">
          {children}
        </main>
      </div>
    </div>
    </AdminAuthWrapper>
  );
}
