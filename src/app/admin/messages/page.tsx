import React from "react";
import { getMessages } from "@/actions/contact";

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">All Messages</h1>
      </div>

      <div className="card bg-base-100 shadow-sm border border-base-200">
        <div className="card-body">
          <div className="overflow-x-auto">
            {messages.length === 0 ? (
              <p className="text-base-content/70">No messages yet.</p>
            ) : (
              <table className="table table-zebra w-full">
                {/* head */}
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Message</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {messages.map((msg: any) => (
                    <tr key={msg.id}>
                      <td className="whitespace-nowrap">{new Date(msg.date).toLocaleString()}</td>
                      <td className="font-semibold">{msg.name}</td>
                      <td><a href={`mailto:${msg.email}`} className="text-primary hover:underline">{msg.email}</a></td>
                      <td>{msg.phone || 'N/A'}</td>
                      <td className="max-w-md whitespace-normal break-words">{msg.message}</td>
                      <td>
                        <span className={`badge ${msg.status === 'Unread' ? 'badge-primary' : 'badge-ghost'}`}>
                          {msg.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
