export default function Footer() {
  return (
    <>
      <div className="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9 sm:gap-16 sm:pt-12">
        <div className="flex w-full max-w-3xl justify-evenly text-xs xs:text-sm"></div>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-5 gap-y-2 px-6 text-xs tracking-wider text-gray-200 sm:gap-x-7">
          <p className="px-2 py-1 text-center">Copyright © 2026 UNOCODE DEVELOPERS</p> 
          <svg viewBox="-2 -6 38 32" fill="currentColor" className="w-8 h-8 mx-2 text-white" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="5" width="3" height="3" />
            <rect x="5.5" y="2.5" width="2.5" height="2.5" />
            <rect x="1" y="1" width="2.5" height="2.5" />
            <rect x="4" y="-1.5" width="2" height="2" />
            <rect x="-1" y="-2.5" width="2" height="2" />
            <rect x="1" y="-5" width="1.5" height="1.5" />
            <path d="M 2 9 L 2 16 A 8 8 0 0 0 18 16 L 18 4 L 14 4 L 14 16 A 4 4 0 0 1 6 16 L 6 9 Z" />
            <path fillRule="evenodd" clipRule="evenodd" d="M 20 4 L 20 24 L 24 24 A 10 10 0 0 0 34 14 A 10 10 0 0 0 24 4 Z M 24 8 L 24 20 A 6 6 0 0 0 30 14 A 6 6 0 0 0 24 8 Z" />
          </svg>
          <p className="px-2 py-1 text-center">Web design from Madurai, TN</p>
          <div className="flex gap-5 sm:gap-7">
            <a className="group relative rounded-sm px-2 py-1" href="/legal-notice">Legal notice 
              <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-0.5 group-hover:-left-1.5 motion-reduce:-left-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                </svg>
              </span> 
              <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-0.5 group-hover:-right-1.5 motion-reduce:-right-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                </svg>
              </span>
            </a> 
            <a className="group relative rounded-sm px-2 py-1" href="/privacy-policy">Privacy policy 
              <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-0.5 group-hover:-left-1.5 motion-reduce:-left-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                </svg>
              </span> 
              <span className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-0.5 group-hover:-right-1.5 motion-reduce:-right-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#fff" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-triangle">
                  <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="absolute left-0 top-0 -z-20 h-full w-full backdrop-blur-[50px]"></div>
        <div className="absolute -left-1/4 top-[75%] -z-30 h-full w-[150%] rounded-full bg-gradient-to-tr from-[#2D2D2D] to-[#BDBDBD] opacity-15"></div>
      </div>
    </>
  );
}
