const fs = require('fs');
const path = require('path');

const pagePath = 'c:/Users/bavan/Documents/Company profile/profile_next_code/src/app/page.tsx';
const compDir = 'c:/Users/bavan/Documents/Company profile/profile_next_code/src/components';
if (!fs.existsSync(compDir)) fs.mkdirSync(compDir, { recursive: true });

let content = fs.readFileSync(pagePath, 'utf8');

// The Header starts with <a className="group fixed top-2 left-4 z-50... and ends before <div className="w-full flex-1 px-5 pt-32...
const headerStartIdx = content.indexOf('<a\n                className="group fixed top-2 left-4 z-50 flex h-14') !== -1 ? content.indexOf('<a\n                className="group fixed top-2 left-4 z-50 flex h-14') : content.indexOf('<a\r\n                className="group fixed top-2 left-4 z-50 flex h-14');
if (headerStartIdx === -1) throw new Error('Header start not found');

const headerEndMarker = '<div className="w-full flex-1 px-5 pt-32 md:pt-36 lg:px-10 lg:pt-40 xl:pt-44">';
const headerEndIdx = content.indexOf(headerEndMarker);
if (headerEndIdx === -1) throw new Error('Header end not found');

const headerContent = content.substring(headerStartIdx, headerEndIdx);

// The Footer starts with <div\n                    className="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9 sm:gap-16 sm:pt-12">
const footerStartIdx = content.indexOf('<div\n                    className="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9') !== -1 ? content.indexOf('<div\n                    className="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9') : content.indexOf('<div\r\n                    className="relative flex w-full flex-col items-center gap-12 overflow-clip bg-black/20 pb-6 pt-9');
if (footerStartIdx === -1) throw new Error('Footer start not found');

const footerEndMarker = '<div className="absolute left-0 top-0 -z-20 h-full w-full backdrop-blur-[50px]"></div>';
const footerEndIdx = content.indexOf(footerEndMarker);
if (footerEndIdx === -1) throw new Error('Footer end not found');

const footerContent = content.substring(footerStartIdx, footerEndIdx);

// Write components
const headerFile = path.join(compDir, 'Header.tsx');
fs.writeFileSync(headerFile, 'export default function Header() {\n  return (\n    <>\n' + headerContent + '    </>\n  );\n}\n');

const footerFile = path.join(compDir, 'Footer.tsx');
fs.writeFileSync(footerFile, 'export default function Footer() {\n  return (\n    <>\n' + footerContent + '    </>\n  );\n}\n');

// Replace in page.tsx
content = content.replace(headerContent, '<Header />\n                ');
content = content.replace(footerContent, '<Footer />\n                    ');

// Add imports
content = 'import Header from \'@/components/Header\';\nimport Footer from \'@/components/Footer\';\n' + content;

fs.writeFileSync(pagePath, content);
console.log('Successfully extracted Header and Footer!');
