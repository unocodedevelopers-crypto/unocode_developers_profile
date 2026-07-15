'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <a
        className="group fixed top-2 left-4 z-50 flex h-14 items-center gap-2 rounded-sm px-5 !opacity-100 lg:gap-3 text-gray-900"
        href="/"
      >
        <svg className="w-8 h-8 text-gray-900" viewBox="-2 -6 38 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          {/* Flying Pixels for U */}
          <rect x="2" y="5" width="3" height="3" />
          <rect x="5.5" y="2.5" width="2.5" height="2.5" />
          <rect x="1" y="1" width="2.5" height="2.5" />
          <rect x="4" y="-1.5" width="2" height="2" />
          <rect x="-1" y="-2.5" width="2" height="2" />
          <rect x="1" y="-5" width="1.5" height="1.5" />
          {/* U Shape */}
          <path d="M 2 9 L 2 16 A 8 8 0 0 0 18 16 L 18 4 L 14 4 L 14 16 A 4 4 0 0 1 6 16 L 6 9 Z" />
          {/* D Shape */}
          <path fillRule="evenodd" clipRule="evenodd" d="M 20 4 L 20 24 L 24 24 A 10 10 0 0 0 34 14 A 10 10 0 0 0 24 4 Z M 24 8 L 24 20 A 6 6 0 0 0 30 14 A 6 6 0 0 0 24 8 Z" />
        </svg>
        <h2 className="w-fit translate-y-[1px] uppercase tracking-wider">Unocode developers</h2>
        <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-3.5 group-hover:left-1.5 motion-reduce:left-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-triangle rotate-90">
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        </span>
        <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-3.5 group-hover:right-1.5 motion-reduce:right-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-triangle -rotate-90">
            <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
          </svg>
        </span>
      </a>

      <nav className="fixed right-[5px] top-0.5 z-[60] flex lg:hidden">
        <button
          className="group touch-manipulation p-4"
          aria-label="Menu"
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex h-[21px] w-8 flex-col justify-between gap-2 [&_*]:w-full [&_span]:rounded-full [&_span]:bg-white [&_span]:transition-all [&_span]:duration-200 group-hover:[&_span]:bg-gray-200 motion-reduce:[&_span]:transition-none [&_*]:h-px">
            <span className={isMenuOpen ? "rotate-45 translate-y-[9px]" : ""}></span>
            <div className="relative">
              <span className={`absolute left-0 top-0 ${isMenuOpen ? "opacity-0" : ""}`}></span>
            </div>
            <span className={isMenuOpen ? "-rotate-45 -translate-y-[9px]" : ""}></span>
          </div>
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div className={`fixed right-4 top-16 z-[55] flex w-48 flex-col gap-4 rounded-2xl border border-black/10 bg-[#0d0710]/95 p-6 shadow-2xl backdrop-blur-md lg:hidden transition-all duration-300 origin-top-right ${isMenuOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}`}>
        <a className="text-lg text-gray-900 tracking-wide hover:text-gray-700 transition-colors" href="/" onClick={() => setIsMenuOpen(false)}>Home</a>
        <a className="text-lg text-gray-900 tracking-wide hover:text-gray-700 transition-colors" href="/projects" onClick={() => setIsMenuOpen(false)}>Projects</a>
        <a className="text-lg text-gray-900 tracking-wide hover:text-gray-700 transition-colors" href="/about" onClick={() => setIsMenuOpen(false)}>About</a>
        <a className="text-lg text-gray-900 tracking-wide hover:text-gray-700 transition-colors" href="/contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
      </div>
      <div className="fixed left-0 top-0 z-30 flex h-14 w-full items-center justify-end pr-5 backdrop-blur-lg">
        <div
          className="pointer-events-none absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-black/30 via-black/5 via-60% to-black/0">
        </div>
        <div className="z-50 hidden items-center gap-7 lg:flex xl:gap-10">
          <div className="flex items-center gap-1 xl:gap-7"><a
            className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/"><span
              className="relative">Home</span> <span
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                  xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                  fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


              </svg></span> <span
                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                  xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                  fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


              </svg></span></a><a
                className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/projects"><span
                  className="relative">Projects <div
                    className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                </div></span> <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                    fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                </svg></span> <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                    fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                </svg></span></a><a
                  className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/about"><span
                    className="relative">About <div
                      className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                </div></span> <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                    fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                </svg></span> <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                    fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                </svg></span></a><a
                  className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/contact"><span
                    className="relative">Contact <div
                      className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                </div></span> <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                    fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                </svg></span> <span
                  className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                    fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                </svg></span></a></div>
        </div>
      </div>
    </>
  );
}
