const fs = require('fs');
const page = fs.readFileSync('src/app/page.tsx', 'utf8').split('\n');

const navbar = page.slice(97, 356).join('\n');
const footer = page.slice(1084, 1167).join('\n');

const aboutContent = `
  <div className="flex flex-col items-center pt-32 px-5 lg:px-10 gap-16 md:gap-32 w-full max-w-[1200px] mx-auto min-h-screen">
    
    {/* Hero Section */}
    <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-20 w-full mt-10 md:mt-20">
      <div className="w-full max-w-[300px] md:max-w-[400px] flex-shrink-0">
        <img src="/Portrait Leon Obermann 1.webp" alt="Leon Obermann" className="w-full h-auto rounded-2xl object-cover shadow-2xl" />
      </div>
      <div className="flex flex-col gap-6 w-full mt-4 md:mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide font-inria-sans leading-tight">
          High-end design meets<br/>technical precision.
        </h1>
        <p className="text-xl md:text-2xl text-gray-100">
          For brands that expect quality<br/>down to the finest detail.
        </p>
      </div>
    </div>

    {/* Intro Text */}
    <div className="flex flex-col gap-6 text-gray-300 text-lg md:text-xl leading-relaxed w-full max-w-4xl self-start">
      <p>I'm Leon Obermann, web designer and developer from Cologne, Germany. I design and develop high-end websites for visual brands that value individuality, aesthetics, and quality.</p>
      <p>With more than six years of experience in development and design, I combine technical expertise with a strong design sensibility to create digital experiences that truly convince.</p>
      <p>Websites are my passion. I care deeply about the details and consistently refine every project to bring out the final percent of quality.</p>
    </div>

    {/* What Drives Me */}
    <div className="flex flex-col gap-6 w-full max-w-4xl self-start mt-10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wide font-inria-sans mb-2">What Drives Me</h2>
      <div className="flex flex-col gap-6 text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>I have a passion for beauty, both in architecture, product design and typography, as well as in a perfectly captured sunset. I always wanted to invent things as a child. Today, I do exactly that.</p>
        <p>What really drives me is the last step. 80% of a project comes together quickly, but I love exactly the moment where others stop and I keep going.</p>
        <p>That extra effort that turns something good into something truly special. I don't stop until it feels right.</p>
        <p>In the end, I want to create things that make others say "Wow."</p>
      </div>
    </div>

    {/* My Philosophy */}
    <div className="flex flex-col gap-6 w-full max-w-4xl self-start mt-10">
      <h2 className="text-3xl md:text-4xl font-semibold tracking-wide font-inria-sans mb-2">My Philosophy</h2>
      <div className="flex flex-col gap-6 text-gray-300 text-lg md:text-xl leading-relaxed">
        <p>I intentionally work without website builders. Every website I design and develop is unique, tailored to the individual brand and its message.</p>
        <p>To me, a website is more than just a digital presence. It is part of the overall brand experience. That is why, from the very beginning, I make sure that your website is technically flawless, fast, and can be enjoyed optimally on any device.</p>
        <p>The result is a digital experience that sets brands apart and makes their individuality visible.</p>
      </div>
    </div>

    {/* CTA Section */}
    <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full mt-20 mb-20 md:mb-32">
      <div className="flex flex-col gap-8 w-full max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold font-inria-sans leading-tight">
          Ready for<br/>the next step?
        </h2>
        <p className="text-2xl text-gray-200">
          Tell me about your brand<br/>and project goals.
        </p>
        <a href="/contact" className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-50 hover:bg-gray-100 uppercase shadow-button-glow transition-all text-black font-semibold text-sm mt-4">
          START PROJECT
        </a>
      </div>
      <div className="w-full max-w-[300px] md:max-w-[400px]">
        <img src="/Portrait Leon Obermann 1.webp" alt="Leon Obermann" className="w-full h-auto rounded-2xl object-cover" />
      </div>
    </div>
  </div>
`;

const fullPage = `
/* eslint-disable */
'use client';

export default function AboutPage() {
  return (
    <>
      <div id="layout-gradient" className="fixed left-0 top-0 -z-50 h-[85vh] w-full bg-gradient-to-br opacity-25 from-[#c6147f] to-[#33044A]"></div>
      ${navbar}
      ${aboutContent}
      ${footer}
    </>
  );
}
`;

fs.writeFileSync('src/app/about/page.tsx', fullPage);
console.log('Successfully created src/app/about/page.tsx');
