'use client';

import React, { useState, useEffect } from 'react';

const users = {
  'Bavankumar.unocodedeveloper': 'Bavankumar@1208',
  'Indhumathi.unocodedeveloper': 'Indhumathi@3802',
  'mahaganesh.unocodedeveloper': 'Mahaganesh@16303',
  'admin.unocode': 'admin123'
};

export default function AdminAuthWrapper({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (users[username as keyof typeof users] === password) {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  if (!isClient) return null;

  if (isAuthenticated) {
    // We can inject a logout function into children if we wanted, 
    // but here we just render children directly. 
    // We'll add a small logout button as a floating button or something, or it can be added to the layout separately.
    return (
      <div className="relative h-full w-full">
        {children}
        <button 
          onClick={handleLogout}
          className="btn btn-sm btn-outline btn-error absolute top-4 right-4 z-50 md:top-4 md:right-4 hidden md:flex"
        >
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="flex h-screen w-full items-center justify-center bg-base-200">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl font-bold mb-4 justify-center">Admin Login</h2>
          <form onSubmit={handleLogin}>
            <div className="form-control w-full max-w-xs mb-4">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <input 
                type="text" 
                placeholder="Username" 
                className="input input-bordered w-full max-w-xs" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="form-control w-full max-w-xs mb-6">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="Password" 
                className="input input-bordered w-full max-w-xs" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-error text-sm mb-4 text-center">{error}</p>}
            <div className="card-actions justify-center">
              <button type="submit" className="btn btn-primary w-full text-white">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
