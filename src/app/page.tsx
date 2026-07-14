/* eslint-disable */
'use client';

export default function Page() {


    return (
        <>

            <div className="transition-opacity opacity-0"><button id="scroll-up-button"
                className="justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center p-3 bg-gray-600/20 backdrop-blur-sm hover:bg-gray-700/20 shadow transition-colors text-sm fixed bottom-4 right-4 z-40 rounded-full origin-bottom lg:bottom-6 lg:right-6"
                aria-label="Scroll to top" disabled><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36"
                    viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-chevron-up">
                    <path d="m18 15-6-6-6 6" />
                </svg> </button></div>
            <div className="fixed -z-40 h-screen w-screen backdrop-blur-[75px]"></div>
            <div
                className="glass-border pointer-events-none fixed left-0 top-0 z-20 flex size-16 items-center justify-center rounded-full bg-black/25 opacity-0 backdrop-blur-[5px] transition-opacity before:rounded-full">
                <span><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none"
                    stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    className="lucide-icon lucide lucide-maximize-2">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" x2="14" y1="3" y2="10" />
                    <line x1="3" x2="10" y1="21" y2="14" />
                </svg></span> <span><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" className="lucide-icon lucide lucide-arrow-up-right">
                    <path d="M7 7h10v10" />
                    <path d="M7 17 17 7" />
                </svg></span>
            </div>
            <dialog className="modal w-full text-white transition-none before:rounded-lg">
                <form method="dialog" className="modal-backdrop h-screen"><button aria-label="close" tabIndex={-1}></button>
                </form>
                <div
                    className="glass-border modal-box fixed top-[15%] mx-2 w-[calc(100%-16px)] max-w-md overflow-hidden rounded-lg bg-gray-900/40 backdrop-blur-xl before:rounded-lg">
                    <form method="dialog"><button
                        className="absolute right-4 top-4 text-white transition-colors hover:text-gray-200"
                        aria-label="close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                            strokeLinecap="round" strokeLinejoin="round"
                            className="lucide-icon lucide lucide-x">
                            <path d="M18 6 6 18" />
                            <path d="m6 6 12 12" />
                        </svg></button></form>
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-lg font-medium">Cookie Preferences</h3>
                            <p className="text-sm">I use cookies to improve the website and analyze visitor numbers.</p>
                        </div>
                        <div>
                            <div className="flex flex-col gap-3">
                                <h4 className="font-medium">Analytics Cookies</h4>
                                <p className="text-sm">These cookies help me improve my website by collecting and analyzing
                                    information about how the website is used.</p> <label
                                        className="label flex w-fit cursor-pointer gap-3 text-sm text-white"><input type="checkbox"
                                            defaultChecked
                                            className="checkbox checkbox-sm rounded-md border-gray-800 bg-gray-800 transition-colors [--chkbg:theme(colors.gray.700)] [--chkfg:theme(colors.gray.50)] hover:bg-gray-700" />
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full justify-end gap-2 text-xs normal-case"><button id=""
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center py-3 bg-gray-600/20 backdrop-blur-sm hover:bg-gray-700/20 shadow transition-colors text-xs px-5">Cancel
                        </button> <button id=""
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center py-3 bg-gray-50 hover:bg-gray-100 hover:shadow-none shadow-button-glow transition-[box-shadow,background-color] text-black font-semibold normal-case px-5 text-xs">Save
                            </button></div>
                    </div>
                </div>
            </dialog>

            <div className="relative flex min-h-screen w-full flex-col gap-48 overflow-clip"><a
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
                <div className="w-full flex-1 px-5 pt-32 md:pt-36 lg:px-10 lg:pt-40 xl:pt-44">
                    <div id="home-gradient"
                        className="fixed left-0 top-0 -z-50 h-[95vh] w-full bg-gradient-to-tl from-[#c6147f] to-[#33044A] opacity-0">
                    </div>


                    <div className="relative z-10 flex w-full flex-col items-center justify-center gap-8 text-center xl:gap-12 2xl:gap-16 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-9rem)] lg:min-h-[calc(100vh-10rem)] xl:min-h-[calc(100vh-11rem)] pb-20"
                        id="hero-wrapper">
                        <h2 className="font-inria-sans text-lg font-thin uppercase tracking-wider md:text-xl xl:text-2xl 2xl:text-3xl"
                            id="hero-supporting-title">Unocode Developers</h2>
                        <div
                            className="font-inria-sans text-4xl font-bold capitalize leading-[44px] tracking-[.15em] xl:text-5xl 2xl:text-6xl">
                            <h1>Simple. <br className="sm:hidden" /> Elegant. Animated.</h1>
                        </div>
                        <p
                            className="flex flex-wrap justify-center gap-x-1 tracking-wide xs:px-16 lg:gap-x-1.5 xl:text-lg 2xl:text-xl">
                            <span>Elevate your brand with digital experiences</span><span>built to leave a lasting impression.</span>
                        </p> <a id=""
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-50 hover:bg-gray-100 hover:shadow-none uppercase shadow-button-glow transition-[box-shadow,background-color] text-black font-semibold text-sm mt-6"
                            href="/contact" target="_self" rel="">Start project
                        </a>
                    </div>
                    <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-black opacity-20"
                        id="hero-backdrop"></div> <button id="scrollToExplore"
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center hover:decoration-white/75 decoration-white/40 underline-offset-4 group group text-sm transition-none no-underline fixed bottom-8 left-1/2 z-10 -translate-x-1/2 px-4 py-2 text-transparent sm:left-8 sm:translate-x-0">scroll
                        to explore <span
                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide-icon lucide lucide-triangle">
                                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />

                            </svg></span> <span
                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide-icon lucide lucide-triangle">
                                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />

                            </svg></span></button>
                    <div>
                        <div className="relative">
                            <div id="social-proof-heading-wrapper"
                                className="relative flex pt-16 pb-12 flex-col items-center justify-center">
                                <div className="flex w-full flex-col items-start gap-2 text-left lg:items-center lg:gap-4 lg:text-center max-w-96 lg:max-w-lg 2xl:max-w-xl"
                                    id="heading-container-undefined">
                                    <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                        id="heading-title-testimonials">
                                        See For Yourself
                                    </h2>
                                    <p className="text-sm lg:text-base 2xl:text-lg">Real experiences say more than any promise.
                                        Discover what my clients think about working with me and how their projects came to
                                        life.</p>
                                </div>
                            </div>
                            <div id="social-proof-scroller"></div>
                        </div>
                        <div className="relative flex w-full flex-col items-center gap-5 pb-24"><span className="absolute -top-[400px] lg:-top-[600px]" id="reviews"></span>
                            <div className="flex w-full flex-wrap justify-center gap-6 pb-24 lg:pb-52"
                                id="desktop-reviews">
                                <div className="flex w-full max-w-sm flex-col gap-6 rounded-xl border border-white/5 bg-gray-900/40 p-8 shadow-lg backdrop-blur-md">
                                    <span className="text-4xl font-serif text-white/80">“</span>
                                    <p className="flex-1 text-sm leading-relaxed text-gray-300">From the very beginning, I had the feeling that he not only understood my ideas, but also took them further and improved them in a targeted manner.</p>
                                    <div>
                                        <p className="text-sm font-semibold text-white">Ronny Herold</p>
                                        <p className="text-xs text-gray-400">Ronny Herold Consulting</p>
                                    </div>
                                </div>
                                <div className="flex w-full max-w-sm flex-col gap-6 rounded-xl border border-white/5 bg-gray-900/40 p-8 shadow-lg backdrop-blur-md">
                                    <span className="text-4xl font-serif text-white/80">“</span>
                                    <p className="flex-1 text-sm leading-relaxed text-gray-300">The result exceeded my expectations, and I am really thrilled with both the process and the final product.</p>
                                    <div>
                                        <p className="text-sm font-semibold text-white">Ronny Herold</p>
                                        <p className="text-xs text-gray-400">Ronny Herold Consulting</p>
                                    </div>
                                </div>
                                <div className="flex w-full max-w-sm flex-col gap-6 rounded-xl border border-white/5 bg-gray-900/40 p-8 shadow-lg backdrop-blur-md">
                                    <span className="text-4xl font-serif text-white/80">“</span>
                                    <p className="flex-1 text-sm leading-relaxed text-gray-300">Super cool, I'm very happy! Thank you very much for everything.</p>
                                    <div>
                                        <p className="text-sm font-semibold text-white">Jeff Roth</p>
                                        <p className="text-xs text-gray-400">Kreativ-Bauten</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-32 pt-12 sm:gap-44 lg:gap-64">
                        <div className="relative flex flex-col items-center gap-12 lg:gap-20"><span className="absolute -top-20"
                            id="projects"></span>
                            <div className="flex w-full flex-col gap-2 text-left lg:items-center lg:gap-4 lg:text-center max-w-lg lg:max-w-6xl items-center"
                                id="heading-container-projects">
                                <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                    id="heading-title-projects"></h2>

                            </div>
                            <div className="flex flex-col items-center gap-28 lg:px-10 xl:gap-44">
                                <div
                                    className="relative flex max-w-lg flex-col gap-7 lg:max-w-6xl lg:items-center lg:gap-12 lg:flex-row ">
                                    <button
                                        className="mouse-follow group relative cursor-none transition-shadow duration-1000 lg:w-2/3 shadow-image-glow"
                                        data-type="popup" id="thumbnail-button-ronny-herold-consulting">
                                        <div className="group relative aspect-[1.872074883]"><img
                                            className="absolute -z-10 rounded opacity-0 blur-2xl brightness-[3] saturate-150 transition-opacity duration-700 group-hover:opacity-50"
                                            src="projects/ronny-herold-consulting/thumbnail.webp"
                                            alt="Screenshot of project Ronny Herold Consulting" loading="lazy"
                                            width="1200" height="641" /> <img className="thumbnail-image rounded"
                                                src="projects/ronny-herold-consulting/thumbnail.webp"
                                                alt="Screenshot of website for Ronny Herold Consulting" loading="lazy"
                                                width="1200" height="641" data-flip-id="thumbnail-image"
                                                id="thumbnail-image-ronny-herold-consulting" /></div>
                                    </button>
                                    <div className="relative flex flex-col gap-2 lg:w-1/3">
                                        <div id="project-gradient-0"
                                            className="absolute -left-1/4 -top-[12.5%] -z-50 h-[125%] w-[150%] rounded-full bg-gradient-to-tr opacity-15 lg:w-[200%] from-[#061f46] to-[#00244d] lg:-left-2/3">
                                        </div>
                                        <h2 className="font-inria-sans text-2xl font-medium tracking-wide xl:text-3xl">Ronny
                                            Herold Consulting</h2>
                                        <div className="flex flex-col gap-4 text-sm xl:text-base">
                                            <p className="text-gray-200">Ronny already had a website, but wanted a more modern
                                                and professional presence that clearly communicates his expertise in
                                                business intelligence and builds trust online.</p>
                                            <p className="text-gray-200">The result is a refined design in deep blue that
                                                radiates professionalism and aligns seamlessly with his existing branding
                                                and portraits.</p> <button id=""
                                                    className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 underline decoration-white/40 underline-offset-4 group relative px-4 py-2 -ml-4">Learn
                                                more <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                        viewBox="0 0 24 24" fill="#fff" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                    </svg></span> <span
                                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                            viewBox="0 0 24 24" fill="#fff" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                    </svg></span></button>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="relative flex max-w-lg flex-col gap-7 lg:max-w-6xl lg:items-center lg:gap-12 lg:flex-row-reverse">
                                    <button
                                        className="mouse-follow group relative cursor-none transition-shadow duration-1000 lg:w-2/3 shadow-image-glow"
                                        data-type="popup" id="thumbnail-button-kreativ-bauten">
                                        <div className="group relative aspect-[1.872074883]"><img
                                            className="absolute -z-10 rounded opacity-0 blur-2xl brightness-[3] saturate-150 transition-opacity duration-700 group-hover:opacity-50"
                                            src="projects/kreativ-bauten/thumbnail.webp"
                                            alt="Screenshot of project Kreativ-Bauten" loading="lazy" width="1200"
                                            height="641" /> <img className="thumbnail-image rounded"
                                                src="projects/kreativ-bauten/thumbnail.webp"
                                                alt="Screenshot of website for Kreativ-Bauten" loading="lazy" width="1200"
                                                height="641" data-flip-id="thumbnail-image"
                                                id="thumbnail-image-kreativ-bauten" /></div>
                                    </button>
                                    <div className="relative flex flex-col gap-2 lg:w-1/3">
                                        <div id="project-gradient-1"
                                            className="absolute -left-1/4 -top-[12.5%] -z-50 h-[125%] w-[150%] rounded-full bg-gradient-to-tr opacity-15 lg:w-[200%] from-[#4a4a4a] to-[#757575] lg:-left-1/3">
                                        </div>
                                        <h2 className="font-inria-sans text-2xl font-medium tracking-wide xl:text-3xl">
                                            Kreativ-Bauten</h2>
                                        <div className="flex flex-col gap-4 text-sm xl:text-base">
                                            <p className="text-gray-200">Jeff reached out after struggling to achieve what he
                                                envisioned with website builders.</p>
                                            <p className="text-gray-200">For his craft business Kreativ-Bauten, we built a
                                                website that clearly presents his three specialties: exhibition
                                                construction, room acoustics and general craftsmanship. Rounded off by a
                                                custom animation that turns scrolling itself into part of the experience.
                                            </p> <button id=""
                                                className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 underline decoration-white/40 underline-offset-4 group relative px-4 py-2 -ml-4">Learn
                                                more <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                        viewBox="0 0 24 24" fill="#fff" stroke="currentColor"
                                                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                    </svg></span> <span
                                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                            viewBox="0 0 24 24" fill="#fff" stroke="currentColor"
                                                            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                                            className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                    </svg></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center gap-6"><span className="absolute -top-20"
                            id="concepts"></span>
                            <div className="flex w-full flex-col gap-2 text-left lg:items-center lg:gap-4 lg:text-center items-center"
                                id="heading-container-undefined">
                                <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                    id="heading-title-undefined"></h2>

                            </div>
                            <div className="flex w-full flex-col items-center gap-10">
                                <div className="mouse-follow mt-6 grid w-full cursor-none grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3"
                                    data-type="popup"><button
                                        className="group relative aspect-[1.40625] w-full cursor-none transition-[transform,box-shadow] duration-500 motion-safe:hover:scale-[.97] shadow-image-glow"
                                        id="thumbnail-button-vaeron"><img
                                            className="absolute -z-10 rounded opacity-0 blur-2xl brightness-150 transition-opacity duration-700 group-hover:opacity-50"
                                            src="./concepts/Vaeron.webp"
                                            alt="Background blur for concept design for fictional company Vaeron"
                                            width="1440" height="1024" loading="lazy" /> <img
                                            className="thumbnail-image rounded" src="./concepts/Vaeron.webp"
                                            alt="Concept design for fictional company Vaeron" width="1440" height="1024"
                                            loading="lazy" data-flip-id="thumbnail-image"
                                            id="thumbnail-image-vaeron" /></button><button
                                                className="group relative aspect-[1.40625] w-full cursor-none transition-[transform,box-shadow] duration-500 motion-safe:hover:scale-[.97] shadow-image-glow"
                                                id="thumbnail-button-crimson-dusk-studio"><img
                                            className="absolute -z-10 rounded opacity-0 blur-2xl brightness-150 transition-opacity duration-700 group-hover:opacity-50"
                                            src="./concepts/Crimson Dusk Studio.webp"
                                            alt="Background blur for concept design for fictional company Crimson Dusk Studio"
                                            width="1440" height="1024" loading="lazy" /> <img
                                            className="thumbnail-image rounded" src="./concepts/Crimson Dusk Studio.webp"
                                            alt="Concept design for fictional company Crimson Dusk Studio" width="1440"
                                            height="1024" loading="lazy" data-flip-id="thumbnail-image"
                                            id="thumbnail-image-crimson-dusk-studio" /></button><button
                                                className="group relative aspect-[1.40625] w-full cursor-none transition-[transform,box-shadow] duration-500 motion-safe:hover:scale-[.97] shadow-image-glow"
                                                id="thumbnail-button-harlow-architecture"><img
                                            className="absolute -z-10 rounded opacity-0 blur-2xl brightness-150 transition-opacity duration-700 group-hover:opacity-50"
                                            src="./concepts/Harlow Architecture.webp"
                                            alt="Background blur for concept design for fictional company Harlow Architecture"
                                            width="1440" height="1024" loading="lazy" /> <img
                                            className="thumbnail-image rounded" src="./concepts/Harlow Architecture.webp"
                                            alt="Concept design for fictional company Harlow Architecture" width="1440"
                                            height="1024" loading="lazy" data-flip-id="thumbnail-image"
                                            id="thumbnail-image-harlow-architecture" /></button></div>
                                <button id=""
                                    className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-600/20 backdrop-blur-sm hover:bg-gray-700/20 shadow transition-colors text-sm">Show
                                    more </button>
                            </div>
                        </div>
                        <div className="fixed left-0 top-0 z-40 h-screen w-full pointer-events-none">

                            <div className="fixed left-0 top-[64px] z-50 flex h-[calc(100dvh-64px)] w-full flex-col items-center justify-start gap-5 overflow-x-clip p-5 pt-0 overflow-hidden"
                                data-lenis-prevent="">
                                <div className="flex w-full flex-col items-center gap-4">
                                    <div className="flex w-full flex-col items-center gap-6 lg:gap-12">
                                        <div className="flex w-full justify-center gap-6">
                                            <div className="max-h-[80vh] max-w-5xl aspect-[1.872074883]"><img
                                                className="rounded opacity-0" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="Screenshot of project "
                                                width="1200" height="641" data-flip-id="thumbnail-image"
                                                id="case-study-image" /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex w-full justify-center">
                            <div id="about-intro-container"
                                className="flex w-full max-w-sm flex-col items-center justify-center gap-8 font-inria-sans text-2xl font-thin tracking-wider xs:max-w-md xs:gap-9 xs:text-3xl sm:max-w-lg sm:gap-11 sm:text-4xl md:max-w-2xl md:gap-12 md:text-5xl 2xl:max-w-4xl 2xl:gap-16 2xl:text-6xl">
                                <h2 id="about-intro-upper-text" className="w-full">Meet the <b className="font-medium">person</b>
                                </h2>
                                <h2 id="about-intro-lower-text" className="w-full text-right"><b className="font-medium">behind</b>
                                    the design</h2>
                            </div>
                        </div>
                        <div className="relative flex justify-center">
                            <div className="flex max-w-lg flex-col items-center gap-10 lg:max-w-[830px] lg:flex-row lg:gap-12">
                                <div id="about-image" className="aspect-[0.75] w-[65%] max-w-72 sm:w-full"><img
                                    className="rounded-xl shadow-image-glow transition-shadow duration-1000 hover:shadow-none"
                                    src="Portrait%20Leon%20Obermann%201.webp" alt="Portrait of Leon Obermann"
                                    loading="lazy" width="444" height="592" /></div>
                                <div className="relative flex w-full flex-col gap-4 text-sm tracking-wide lg:text-base">
                                    <div id="about-gradient"
                                        className="absolute -left-1/4 -top-2/3 -z-50 h-[175%] w-[150%] rounded-full bg-gradient-to-tr from-[#440303] to-[#c63d14] opacity-[0.1] lg:-left-80 lg:-top-[12.5%] lg:h-[125%] lg:w-[200%]">
                                    </div>
                                    <h3 className="font-inria-sans text-3xl font-bold tracking-wide">Hey,</h3>
                                    <p>my name is Leon Obermann, web designer and developer from Cologne, Germany. I create
                                        <b className="font-semibold">high&#8209end websites for visual brands</b>.
                                    </p>
                                    <p>With several years of experience in both development and design, I combine technical
                                        expertise with a strong design sensibility to create digital experiences that truly
                                        stand out.</p>
                                    <p>Let's make your website something extraordinary!</p> <a id=""
                                        className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 underline decoration-white/40 underline-offset-4 group relative px-4 py-2 -ml-4"
                                        href="/about" target="_self" rel="">Learn more <span
                                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                                fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="lucide-icon lucide lucide-triangle">
                                                <path
                                                    d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                            </svg></span> <span
                                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                                    fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    className="lucide-icon lucide lucide-triangle">
                                                <path
                                                    d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                            </svg></span></a>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-16">
                            <div className="flex w-full flex-col gap-2 lg:items-center lg:gap-4 lg:text-center items-center text-center"
                                id="heading-container-undefined">
                                <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                    id="heading-title-undefined"><span
                                        className="flex flex-wrap justify-center gap-x-2 lg:gap-x-2.5 2xl:gap-x-3"><span>What
                                            your</span><span>website costs</span></span></h2>

                                <p className="text-sm lg:text-base 2xl:text-lg">Every project is different. The calculator gives
                                    you a first estimate, the exact price is worked out in a conversation.</p>
                            </div>
                            <div className="flex flex-col items-center gap-12">
                                <div className="flex w-full flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center"
                                    id="packages">
                                    <div className="glass-border relative flex w-full max-w-sm flex-col gap-5 rounded-lg bg-gray-800/20 px-7 py-5 backdrop-blur-xl before:rounded-lg"
                                        role="article">
                                        <div className="flex flex-col gap-2">
                                            <h2 className="text-center font-inria-sans text-2xl">Base</h2>
                                            <p className="text-center text-sm text-gray-200 lg:text-base">The foundation of
                                                every website</p>
                                        </div>
                                        <div className="h-0.5 w-full rounded-full bg-white/5 lg:self-center"></div>
                                        <div className="flex flex-col gap-3 text-sm lg:text-base">
                                            <div>
                                                <p className="font-semibold">Custom Design</p>
                                                <p className="text-gray-200">Tailored to your brand and audience</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Optimized for Every Device</p>
                                                <p className="text-gray-200">Smartphone, tablet, and desktop</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Animations &amp; Interactions</p>
                                                <p className="text-gray-200">Bringing your website to life</p>
                                            </div>
                                        </div>
                                        <div className="h-0.5 w-full rounded-full bg-white/5 lg:self-center"></div>
                                        <div className="flex flex-col gap-3 text-sm lg:text-base">
                                            <div>
                                                <p className="font-semibold">Home Page</p>
                                                <p className="text-gray-200">Your brand at first glance</p>
                                            </div>
                                            <div>
                                                <p className="font-semibold">Legal Pages</p>
                                                <p className="text-gray-200">Legal notice and privacy policy</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex w-full max-w-lg flex-col justify-between gap-2.5">
                                        <div className="flex flex-col gap-1 px-5 pb-3 pt-4 text-sm">
                                            <p className="font-semibold">Number of Pages</p>
                                            <div className="flex w-full items-end justify-between gap-4">
                                                <p className="text-left text-gray-200">How many pages should your website have?
                                                </p>
                                                <p>1</p>
                                            </div> <input
                                                className="-mx-2 cursor-pointer appearance-none bg-transparent px-2 py-4 svelte-p6mzya"
                                                defaultValue="1" type="range" min="1" max="10" aria-label="Number of Pages" />
                                        </div> <button
                                            className="flex flex-col gap-1 rounded-lg border px-5 py-4 text-sm backdrop-blur-xl transition-all duration-300 hover:shadow-addon-glow border-dashed border-gray-700 bg-gray-800/20 hover:bg-gray-600/20">
                                            <div className="flex w-full items-center justify-between">
                                                <p className="font-semibold capitalize">contact form</p>
                                                <p className="text-xs">from €150</p>
                                            </div>
                                            <div className="flex w-full items-end justify-between gap-20">
                                                <p className="text-left text-gray-200">So potential clients can reach you
                                                    directly</p>
                                                <div
                                                    className="relative transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200 size-3 min-w-3">
                                                    <span
                                                        className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                                    <span className="w-full"></span>
                                                </div>
                                            </div>
                                        </button><button
                                            className="flex flex-col gap-1 rounded-lg border px-5 py-4 text-sm backdrop-blur-xl transition-all duration-300 hover:shadow-addon-glow border-dashed border-gray-700 bg-gray-800/20 hover:bg-gray-600/20">
                                            <div className="flex w-full items-center justify-between">
                                                <p className="font-semibold capitalize">content management</p>
                                                <p className="text-xs">from €500</p>
                                            </div>
                                            <div className="flex w-full items-end justify-between gap-20">
                                                <p className="text-left text-gray-200">Update content yourself, no technical
                                                    knowledge needed</p>
                                                <div
                                                    className="relative transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200 size-3 min-w-3">
                                                    <span
                                                        className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                                    <span className="w-full"></span>
                                                </div>
                                            </div>
                                        </button><button
                                            className="flex flex-col gap-1 rounded-lg border px-5 py-4 text-sm backdrop-blur-xl transition-all duration-300 hover:shadow-addon-glow border-dashed border-gray-700 bg-gray-800/20 hover:bg-gray-600/20">
                                            <div className="flex w-full items-center justify-between">
                                                <p className="font-semibold capitalize">multiple languages</p>
                                                <p className="text-xs">from €300</p>
                                            </div>
                                            <div className="flex w-full items-end justify-between gap-20">
                                                <p className="text-left text-gray-200">So every visitor can understand your
                                                    website</p>
                                                <div
                                                    className="relative transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200 size-3 min-w-3">
                                                    <span
                                                        className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                                    <span className="w-full"></span>
                                                </div>
                                            </div>
                                        </button><button
                                            className="flex flex-col gap-1 rounded-lg border px-5 py-4 text-sm backdrop-blur-xl transition-all duration-300 hover:shadow-addon-glow border-dashed border-gray-700 bg-gray-800/20 hover:bg-gray-600/20">
                                            <div className="flex w-full items-center justify-between">
                                                <p className="font-semibold capitalize">logo &amp; branding</p>
                                                <p className="text-xs">from €800</p>
                                            </div>
                                            <div className="flex w-full items-end justify-between gap-20">
                                                <p className="text-left text-gray-200">No logo yet? I'll create one that fits
                                                    your brand.</p>
                                                <div
                                                    className="relative transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200 size-3 min-w-3">
                                                    <span
                                                        className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                                    <span className="w-full"></span>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                </div>
                                <div className="flex w-full max-w-lg flex-col items-center gap-4 lg:max-w-2xl">
                                    <p className="text-center text-2xl"><span>from</span> <span>€1,290</span></p>
                                    <a id=""
                                        className="rounded-xl justify-center duration-500 h-fit flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-50 hover:bg-gray-100 hover:shadow-none uppercase shadow-button-glow transition-[box-shadow,background-color] text-black font-semibold text-sm w-full"
                                        href="/contact" target="_self" rel="">Get in touch
                                    </a>
                                    <p className="max-w-[333px] text-center text-sm text-gray-400 lg:max-w-none">All figures are
                                        non-binding. I'll put together a tailored quote after an initial call.</p>
                                </div>
                            </div>
                        </div>
                        <div id="cta-intro-container" className="relative flex w-full justify-center py-10">
                            <div id="cta-intro-background"
                                className="pointer-events-none absolute -left-1/4 -top-[75%] flex h-[250%] w-[150%] items-center justify-center">
                                <div className="dots h-full w-full max-w-screen-2xl svelte-1befunw"></div>
                            </div>
                            <div className="flex flex-col items-center gap-6 2xl:gap-10">
                                <div className="z-10 flex flex-col items-center gap-3 text-center sm:gap-5 2xl:gap-8">
                                    <p
                                        className="font-inria-sans text-xl font-medium tracking-wide xs:text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 2xl:tracking-wide">
                                        Ready for the next step?</p>
                                    <div
                                        className="flex flex-col items-center gap-0.5 tracking-wide sm:gap-1.5 sm:text-lg md:text-xl 2xl:gap-3 2xl:text-2xl 2xl:tracking-wide">
                                        <p id="cta-intro-subtitle-0">Tell me about your brand and project goals.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="relative flex w-full justify-center"><span className="absolute -top-20" id="contact"></span>
                            <form className="flex w-full max-w-xl flex-col gap-6 2xl:max-w-2xl 2xl:gap-7" method="POST">
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <div className="flex w-full flex-col items-start gap-2 text-left lg:gap-4 lg:text-center lg:items-start"
                                            id="heading-container-undefined">
                                            <h2 className="font-inria-sans tracking-wide text-2xl font-bold lg:font-medium lg:text-3xl 2xl:text-4xl"
                                                id="heading-title-undefined">Tell me about your
                                                brand</h2>
                                        </div>
                                    </div>
                                    <div className="flex flex-col text-sm 2xl:text-base"><a id=""
                                        className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 decoration-white/40 underline-offset-4 group relative px-4 no-underline -ml-4 py-1"
                                        href="/cdn-cgi/l/email-protection#ed81888283ad828f889f808c8383c09a888f89889e848a83c38988"
                                        target="_self" rel=""><span className="2xl:hidden"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide-icon lucide lucide-mail">
                                            <rect width="20" height="16" x="2" y="4" rx="2" />

                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />

                                        </svg></span> <span className="hidden 2xl:inline"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="22" height="22"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                            strokeLinecap="round" strokeLinejoin="round"
                                            className="lucide-icon lucide lucide-mail">
                                            <rect width="20" height="16" x="2" y="4" rx="2" />

                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />

                                        </svg></span> <span><span className="__cf_email__"
                                            data-cfemail="731f161c1d331c1116011e121d1d5e0416111716001a141d5d1716">[email&#160;protected]</span></span>
                                        <span
                                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2"
                                                strokeLinecap="round" strokeLinejoin="round"
                                                className="lucide-icon lucide lucide-triangle">
                                                <path
                                                    d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                            </svg></span> <span
                                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                    viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide-icon lucide lucide-triangle">
                                                <path
                                                    d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                            </svg></span></a> <a id=""
                                                className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 decoration-white/40 underline-offset-4 group relative px-4 no-underline -ml-4 py-1"
                                                href="tel:49-156-7954-3182" target="_self" rel=""><span className="2xl:hidden"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20px"
                                                    height="20px">
                                                    <path
                                                        d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"
                                                        fill="currentColor" />
                                                </svg></span> <span className="hidden 2xl:inline"><svg
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px"
                                                    height="24px">
                                                    <path
                                                        d="M 12.011719 2 C 6.5057187 2 2.0234844 6.478375 2.0214844 11.984375 C 2.0204844 13.744375 2.4814687 15.462563 3.3554688 16.976562 L 2 22 L 7.2324219 20.763672 C 8.6914219 21.559672 10.333859 21.977516 12.005859 21.978516 L 12.009766 21.978516 C 17.514766 21.978516 21.995047 17.499141 21.998047 11.994141 C 22.000047 9.3251406 20.962172 6.8157344 19.076172 4.9277344 C 17.190172 3.0407344 14.683719 2.001 12.011719 2 z M 12.009766 4 C 14.145766 4.001 16.153109 4.8337969 17.662109 6.3417969 C 19.171109 7.8517969 20.000047 9.8581875 19.998047 11.992188 C 19.996047 16.396187 16.413812 19.978516 12.007812 19.978516 C 10.674812 19.977516 9.3544062 19.642812 8.1914062 19.007812 L 7.5175781 18.640625 L 6.7734375 18.816406 L 4.8046875 19.28125 L 5.2851562 17.496094 L 5.5019531 16.695312 L 5.0878906 15.976562 C 4.3898906 14.768562 4.0204844 13.387375 4.0214844 11.984375 C 4.0234844 7.582375 7.6067656 4 12.009766 4 z M 8.4765625 7.375 C 8.3095625 7.375 8.0395469 7.4375 7.8105469 7.6875 C 7.5815469 7.9365 6.9355469 8.5395781 6.9355469 9.7675781 C 6.9355469 10.995578 7.8300781 12.182609 7.9550781 12.349609 C 8.0790781 12.515609 9.68175 15.115234 12.21875 16.115234 C 14.32675 16.946234 14.754891 16.782234 15.212891 16.740234 C 15.670891 16.699234 16.690438 16.137687 16.898438 15.554688 C 17.106437 14.971687 17.106922 14.470187 17.044922 14.367188 C 16.982922 14.263188 16.816406 14.201172 16.566406 14.076172 C 16.317406 13.951172 15.090328 13.348625 14.861328 13.265625 C 14.632328 13.182625 14.464828 13.140625 14.298828 13.390625 C 14.132828 13.640625 13.655766 14.201187 13.509766 14.367188 C 13.363766 14.534188 13.21875 14.556641 12.96875 14.431641 C 12.71875 14.305641 11.914938 14.041406 10.960938 13.191406 C 10.218937 12.530406 9.7182656 11.714844 9.5722656 11.464844 C 9.4272656 11.215844 9.5585938 11.079078 9.6835938 10.955078 C 9.7955938 10.843078 9.9316406 10.663578 10.056641 10.517578 C 10.180641 10.371578 10.223641 10.267562 10.306641 10.101562 C 10.389641 9.9355625 10.347156 9.7890625 10.285156 9.6640625 C 10.223156 9.5390625 9.737625 8.3065 9.515625 7.8125 C 9.328625 7.3975 9.131125 7.3878594 8.953125 7.3808594 C 8.808125 7.3748594 8.6425625 7.375 8.4765625 7.375 z"
                                                        fill="currentColor" />
                                                </svg></span> <span>+49 156 7954 3182</span> <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                        viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                    <path
                                                        d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                </svg></span> <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                        viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                    <path
                                                        d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                </svg></span></a> <a id=""
                                                    className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 decoration-white/40 underline-offset-4 group relative px-4 no-underline -ml-4 py-1"
                                                    href="https://www.linkedin.com/in/leon-obermann-171465208" target="_blank"
                                                    rel="noopener noreferrer"><span className="2xl:hidden"><svg viewBox="0 0 72 72"
                                                        width="20px" height="20px" xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path
                                                                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                                                fill="currentColor" />
                                                        </g>
                                                    </svg></span> <span className="hidden 2xl:inline"><svg
                                                        viewBox="0 0 72 72" width="24px" height="24px"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <g>
                                                            <path
                                                                d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,38.9261103 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029283 C38.9300781,32.0029283 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M11.0325521,62 L21.769401,62 L21.769401,27.3333333 L11.0325521,27.3333333 L11.0325521,62 Z"
                                                                fill="currentColor" />
                                                        </g>
                                                    </svg></span> <span className="translate-y-0.5">LinkedIn</span>
                                            <span
                                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                    viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2"
                                                    strokeLinecap="round" strokeLinejoin="round"
                                                    className="lucide-icon lucide lucide-triangle">
                                                    <path
                                                        d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                </svg></span> <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                        viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                    <path
                                                        d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                </svg></span></a></div>
                                </div>
                                <div className="flex flex-col gap-2 2xl:gap-3 false"><label
                                    className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="name">Name
                                </label> <input
                                        className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base  "
                                        type="text" name="name" id="name" placeholder="Your name" maxLength={100}
                                        tabIndex={0} /></div>
                                <div className="flex flex-col gap-2 2xl:gap-3 false"><label
                                    className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="email">Email
                                </label> <input
                                        className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base  "
                                        type="email" name="email" id="email" placeholder="Your email address" required
                                        maxLength={100} tabIndex={0} /></div>
                                <div className="flex flex-col gap-2 2xl:gap-3 false"><label
                                    className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="phone">Phone
                                </label> <input
                                        className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base  "
                                        type="tel" name="phone" id="phone" placeholder="Your phone" maxLength={100}
                                        tabIndex={0} /></div>
                                <div className="flex flex-col gap-2 2xl:gap-3 absolute left-0 top-0 -z-10 h-0 w-0 opacity-0">
                                    <label className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="website">Your
                                        website </label> <input
                                        className="rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:text-base  "
                                        type="text" name="website" id="website" placeholder="Your website" maxLength={100}
                                        tabIndex={-1} />
                                </div>
                                <div className="flex flex-col gap-2 2xl:gap-3 false"><label
                                    className="text-sm font-semibold tracking-wide 2xl:text-base" htmlFor="message">Message
                                </label> <textarea
                                    className="h-36 resize-none rounded-xl border border-gray-300 bg-transparent p-2 pl-5 text-sm tracking-wide transition-colors placeholder:tracking-wide placeholder:text-gray-600 2xl:h-44 2xl:text-base  "
                                    name="message" id="message"
                                    placeholder="What would you like to achieve and what are your goals?"
                                    maxLength={10000}></textarea></div>
                                <div></div>
                                <p className="text-xs">I use your details to answer your request. Further information can be
                                    found in the <a
                                        className="underline underline-offset-2 transition-colors hover:text-gray-200"
                                        href="/privacy-policy" target="_blank" rel="noopener noreferrer">privacy policy</a>.
                                </p>
                                <div className="flex w-full flex-col items-center gap-4 lg:gap-5"><button
                                    id="submit-button"
                                    className="rounded-xl justify-center duration-500 flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-50 hover:shadow-none uppercase shadow-button-glow transition-[box-shadow,background-color] text-black font-semibold text-sm w-full max-w-full z-10 h-11 shadow-none hover:bg-gray-50"
                                    type="submit" disabled><span id="submit-button-text">Send message</span>
                                </button>
                                    <div className="flex min-h-16 items-start justify-center  opacity-0" id="submission-result">

                                        <p className="text-center text-sm tracking-wide">Thank you for reaching out!
                                            I appreciate your message and will get back to you shortly.</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="flex w-full flex-col items-center">
                            <div className="flex w-full max-w-lg flex-col">
                                <div className="flex w-full flex-col items-start gap-2 text-left lg:gap-4 lg:text-center lg:items-start"
                                    id="heading-container-undefined">
                                    <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                        id="heading-title-undefined"></h2>

                                </div>
                                <div className="flex w-full flex-col border-gray-700 border-b-2"><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">How Much Does a Website Cost?</h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                                <div className="flex w-full flex-col border-gray-700 border-b-2"><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">What Do I Need to Get Started?</h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                                <div className="flex w-full flex-col border-gray-700 border-b-2"><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">How Long Does a Project Take?</h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                                <div className="flex w-full flex-col border-gray-700 border-b-2"><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">What If I Don't Like the Design?</h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                                <div className="flex w-full flex-col border-gray-700 border-b-2"><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">Can I Update My Content Later?</h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                                <div className="flex w-full flex-col border-gray-700 border-b-2"><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">Why Are There No Monthly Costs?</h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                                <div className="flex w-full flex-col border-gray-700 "><button
                                    className="flex w-full cursor-pointer items-center justify-between gap-4 px-1 py-5 transition-colors hover:text-gray-200 lg:py-6">
                                    <h2 className="text-left font-medium">Do You Offer Maintenance or Support After Launch?
                                    </h2>
                                    <div
                                        className="relative size-4 min-w-4 transition-transform duration-300 motion-reduce:transition-none -rotate-90 [&amp;_span]:absolute [&amp;_span]:left-1/2 [&amp;_span]:top-1/2 [&amp;_span]:h-0.5 [&amp;_span]:-translate-x-1/2 [&amp;_span]:-translate-y-1/2 [&amp;_span]:bg-gray-200">
                                        <span
                                            className="rotate-90 transition-[width] duration-200 motion-reduce:transition-none w-full"></span>
                                        <span className="w-full"></span>
                                    </div>
                                </button> </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9 sm:gap-16 sm:pt-12">
                    <div className="flex w-full max-w-3xl justify-evenly text-xs xs:text-sm"></div>
                    <div
                        className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 text-xs tracking-wider text-gray-200 sm:gap-x-7">
                        <p className="px-2 py-1 text-center">Copyright © 2026 Obermann Web Design</p> <svg
                            className="w-6 h-6 -mx-1 text-white" width="255.99998" height="255.99998"
                            viewBox="0 0 67.733328 67.733329" version="1.1" id="svg1"
                            xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                            <defs id="defs1"></defs>
                            <g id="layer1">
                                <rect style={{ display: "none", fill: "#6ddfff", fillOpacity: "0.429348", strokeWidth: "0.327751" }}
                                    id="rect1" width="41.862373" height="41.862373" x="26.963076" y="-20.930979"
                                    transform="rotate(45)" />
                                <use x="0" y="0" xlinkHref="#path3" id="use3" transform="rotate(180,33.866587,33.866119)"
                                    style={{ display: "inline" }} />
                                <path fill="currentColor" style={{ display: "inline", fillOpacity: 1, strokeWidth: 0.264583 }}
                                    d="M 31.878364,6.2538018 5.1312698,33.000896 a 1.2243857,1.2243857 90 0 0 0,1.731542 L 27.697773,57.298941 a 0.86788281,0.86788281 170.3302 0 0 1.395975,-0.237861 l 4.793567,-9.977938 A 1.194587,1.194587 69.954633 0 0 33.301161,45.476654 L 18.839909,38.962682 A 1.2027154,1.2027154 69.760409 0 1 18.24626,37.352624 L 32.66623,6.808263 A 0.48893324,0.48893324 35.13598 0 0 31.878364,6.2538018 Z"
                                    id="path3" transform="translate(-4.5683752e-4,-1.6282714e-4)" />
                                <rect style={{ display: "none", fill: "#ff3535", fillOpacity: "0.429348", strokeWidth: "0.163648" }}
                                    id="rect2" width="20.902082" height="20.902082" x="37.443657" y="-10.451042"
                                    transform="rotate(45)" />
                                <rect style={{ display: "none", fill: "#ff3535", fillOpacity: "0.429348", strokeWidth: "0.163648" }}
                                    id="rect3" width="20.902082" height="20.902082" x="37.443657" y="-5.2125607"
                                    transform="rotate(45)" />
                                <rect style={{ display: "none", fill: "#9bff35", fillOpacity: "0.429348", strokeWidth: "0.312776" }}
                                    id="rect4" width="23.530884" height="23.530884" x="34.387344" y="1.0338591"
                                    transform="rotate(29.5)" />
                                <path style={{ display: "none", fill: "#4ace53", fillOpacity: "0.47482", strokeWidth: "0.264583" }}
                                    d="m 39.837701,50.82377 -4.071734,8.620666 -6.077463,-3.620005 3.95226,-8.218931 6.020238,3.592375 z"
                                    id="path8" />
                                <rect style={{ display: "none", fill: "#4ace53", fillOpacity: "0.47482", strokeWidth: "0.244205" }}
                                    id="rect7" width="25.254484" height="21.639776" x="32.483017" y="6.1527333"
                                    transform="matrix(0.91177023,0.41070067,-0.42795537,0.90379987,0,0)" />
                            </g>
                        </svg>
                        <p className="px-2 py-1 text-center">Web design from Cologne, NRW</p>
                        <div className="flex gap-5 sm:gap-7"><a className="group relative rounded-sm px-2 py-1"
                            href="/legal-notice">Legal notice <span
                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-0.5 group-hover:-left-1.5 motion-reduce:-left-1.5"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                    fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                </svg></span> <span
                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-0.5 group-hover:-right-1.5 motion-reduce:-right-1.5"><svg
                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                        fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                        strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                    <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                </svg></span></a> <a className="group relative rounded-sm px-2 py-1"
                                    href="/privacy-policy">Privacy policy <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-0.5 group-hover:-left-1.5 motion-reduce:-left-1.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span> <span
                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-0.5 group-hover:-right-1.5 motion-reduce:-right-1.5"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                            fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                            strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                                        <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                    </svg></span></a></div>
                    </div>
                    <div className="absolute left-0 top-0 -z-20 h-full w-full backdrop-blur-[50px]"></div>
                    <div
                        className="absolute -left-1/4 top-[75%] -z-30 h-full w-[150%] rounded-full bg-gradient-to-tr from-[#2D2D2D] to-[#BDBDBD] opacity-15">
                    </div>
                </div>
                <div
                    className="absolute -bottom-44 -left-1/4 -z-50 h-[675px] w-[150%] -rotate-12 rounded-3xl bg-gradient-to-tr from-[#2B2EE9] to-[#04344b] opacity-15">
                </div>
            </div>



        </>
    );
}
