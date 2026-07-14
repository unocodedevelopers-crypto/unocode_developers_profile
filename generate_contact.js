const fs = require('fs');
const page = fs.readFileSync('src/app/page.tsx', 'utf8').split('\n');

const navbar = page.slice(97, 356).join('\n');
let footer = page.slice(1084, 1167).join('\n');

const footerColumns = `
                <div className="flex w-full max-w-[1200px] justify-between text-sm xs:text-base gap-8 px-5 lg:px-20 flex-wrap pb-10">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white mb-2">Website</h3>
                        <a href="/" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        <a href="/#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</a>
                        <a href="/about" className="text-gray-300 hover:text-white transition-colors">About</a>
                        <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                        <a href="/sitemap" className="text-gray-300 hover:text-white transition-colors">Sitemap</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white mb-2">Projects</h3>
                        <a href="/projects/ronny-herold-consulting" className="text-gray-300 hover:text-white transition-colors flex items-center gap-1"><span className="text-gray-500 text-xs">▶</span> Ronny Herold Consulting <span className="text-gray-500 text-xs">◀</span></a>
                        <a href="/projects/kreativ-bauten" className="text-gray-300 hover:text-white transition-colors">Kreativ-Bauten</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold text-white mb-2">Social</h3>
                        <a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Form</a>
                        <a href="mailto:hello@example.com" className="text-gray-300 hover:text-white transition-colors">Email</a>
                        <a href="tel:+49123456789" className="text-gray-300 hover:text-white transition-colors">Phone</a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
`;
footer = footer.replace(
  '<div className="flex w-full max-w-3xl justify-evenly text-xs xs:text-sm"></div>',
  footerColumns
);

// We need the contact form from page.tsx (around lines 822 to 1002)
const contactForm = page.slice(821, 1001).join('\n');

const contactPageContent = `
/* eslint-disable */
'use client';

export default function ContactPage() {
  return (
    <>
      <div id="layout-gradient" className="fixed left-0 top-0 -z-50 h-[85vh] w-full bg-gradient-to-br opacity-25 from-[#2B2EE9] to-[#04344b]"></div>
      ${navbar}
      
      <div className="flex flex-col items-center pt-32 px-5 lg:px-10 gap-16 md:gap-32 w-full max-w-[1200px] mx-auto min-h-screen">
          <div className="w-full max-w-xl 2xl:max-w-2xl mt-10 md:mt-20">
            <div className="mb-10">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inria-sans mb-4">Tell me about your brand</h1>
                <p className="text-gray-200 text-lg mb-6">You value close collaboration, clear communication and full transparency? Then you've come to the right place.</p>
                <div className="flex flex-col gap-3 text-gray-200">
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <a href="mailto:leon@obermann-webdesign.de" className="hover:text-white transition-colors">leon@obermann-webdesign.de</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                        <a href="tel:+4915679543182" className="hover:text-white transition-colors">+49 156 7954 3182</a>
                    </div>
                    <div className="flex items-center gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                    </div>
                </div>
            </div>

            ${contactForm
                .replace(/<div className="flex w-full flex-col items-start gap-2 text-left lg:gap-4 lg:text-center lg:items-start"[\s\S]*?brand<\/h2>[\s\S]*?<\/div>/, '')
                .replace(/<div className="flex flex-col text-sm 2xl:text-base">[\s\S]*?<\/div>/, '')
                .replace('<div className="flex flex-col gap-4">', '')
                .replace('<div className="flex flex-col gap-2">', '')
                .replace('</div>', '')
                .replace('</div>', '')
            }

          </div>
      </div>
      ${footer}
    </>
  );
}
`;

fs.mkdirSync('src/app/contact', { recursive: true });
fs.writeFileSync('src/app/contact/page.tsx', contactPageContent);
console.log('Created src/app/contact/page.tsx');
