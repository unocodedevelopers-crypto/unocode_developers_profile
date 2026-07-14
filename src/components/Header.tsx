export default function Header() {
  return (
    <>
<a
                className="group fixed top-2 left-4 z-50 flex h-14 items-center gap-2 rounded-sm px-5 !opacity-100 lg:gap-3 text-white"
                href="/">
                <svg className="w-8 h-8 text-white" viewBox="-2 -6 38 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
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
                <h2 className="w-fit translate-y-[1px] uppercase tracking-wider">Unocode developers</h2> <span
                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-3.5 group-hover:left-1.5 motion-reduce:left-1.5"><svg
                        xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff"
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="lucide-icon lucide lucide-triangle">
                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />

                    </svg></span> <span
                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-3.5 group-hover:right-1.5 motion-reduce:right-1.5"><svg
                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff"
                            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                            className="lucide-icon lucide lucide-triangle">
                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />

                    </svg></span>
            </a>
                <nav className="fixed right-[5px] top-0.5 z-50 flex lg:hidden false"><button
                    className="group touch-manipulation p-4" aria-label="Menu" aria-expanded="false">
                    <div
                        className="flex h-[21px] w-8 flex-col justify-between gap-2 [&amp;_*]:w-full [&amp;_span]:rounded-full [&amp;_span]:bg-white [&amp;_span]:transition-all [&amp;_span]:duration-200 group-hover:[&amp;_span]:bg-gray-200 motion-reduce:[&amp;_span]:transition-none [&amp;_*]:h-px">
                        <span></span>
                        <div className="relative"><span className="absolute left-0 top-0 false"></span> <span
                            className="absolute left-0 top-0 false"></span></div> <span></span>
                    </div>
                </button></nav>
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
                                        fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                </svg></span> <span
                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                        fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                </svg></span></a><a
                                    className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/projects"><span
                                        className="relative">Projects <div
                                            className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                                    </div></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span></a><a
                                        className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/services"><span
                                            className="relative">Pricing <div
                                                className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                                    </div></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span></a><a
                                        className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/about"><span
                                            className="relative">About <div
                                                className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                                    </div></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span></a><a
                                        className="group relative rounded-sm px-4 py-2 text-sm tracking-wide" href="/contact"><span
                                            className="relative">Contact <div
                                                className="absolute -bottom-px left-1/2 h-px -translate-x-1/2 bg-white/40 transition-all duration-300 motion-reduce:transition-none w-0">
                                    </div></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span></a></div> <span
                                        className="h-7 w-0.5 rounded-full bg-white/40"></span>
                        <div className="flex items-center xl:gap-2"><a className="group relative rounded-sm px-4 py-2"
                            href="/cdn-cgi/l/email-protection#87ebe2e8e9c7e8e5e2f5eae6e9e9aaf0e2e5e3e2f4eee0e9a9e3e2"
                            aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"
                                strokeLinecap="round" strokeLinejoin="round"
                                className="lucide-icon lucide lucide-mail">
                                <rect width="20" height="16" x="2" y="4" rx="2" />
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />

                            </svg> <span
                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                    fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                </svg></span> <span
                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                        fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                </svg></span></a><a className="group relative rounded-sm px-4 py-2"
                                    href="tel:49-156-7954-3182" aria-label="Phone"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide-icon lucide lucide-phone">
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />


                                </svg> <span
                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                        fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span></a>

                        </div>
                    </div>
                </div>
                    </>
  );
}
