import React from "react";
import fs from "fs";
import path from "path";

async function getMessages() {
  const filePath = path.join(process.cwd(), "data", "messages.json");
  if (!fs.existsSync(filePath)) {
    return [];
  }
  const fileData = fs.readFileSync(filePath, "utf-8");
  try {
    return JSON.parse(fileData);
  } catch (e) {
    return [];
  }
}

export default async function AdminPage() {
  const messages = await getMessages();

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Dashboard Overview</h1>
        <button className="btn btn-primary">Refresh Data</button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-sm uppercase tracking-wider">Total Visits</h2>
            <p className="text-4xl font-bold text-primary mt-2">1,245</p>
            <div className="text-sm text-success mt-2">+14% from last month</div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-sm uppercase tracking-wider">Messages</h2>
            <p className="text-4xl font-bold text-secondary mt-2">{messages.length}</p>
            <div className="text-sm text-base-content/60 mt-2">All time</div>
          </div>
        </div>

        <div className="card bg-base-100 shadow-sm border border-base-200">
          <div className="card-body">
            <h2 className="card-title text-base-content/70 text-sm uppercase tracking-wider">Active Projects</h2>
            <p className="text-4xl font-bold text-accent mt-2">8</p>
            <div className="text-sm text-base-content/60 mt-2">2 need updating</div>
          </div>
        </div>
      </div>

      {/* Recent Messages Section */}
      <div className="card bg-base-100 shadow-sm border border-base-200 mt-8">
        <div className="card-body">
          <h2 className="card-title border-b border-base-200 pb-4">Recent Messages</h2>
          <div className="overflow-x-auto mt-4">
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
                      <td className="max-w-xs truncate" title={msg.message}>{msg.message}</td>
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
