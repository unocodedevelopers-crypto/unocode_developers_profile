
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { getAboutSections } from '@/actions/about';

/* eslint-disable */

export default async function AboutPage() {
  const sections = await getAboutSections();
  return (
    <>

              <div className="relative flex min-h-screen w-full flex-col gap-48 overflow-clip"><Header />
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

    {/* Dynamic Sections */}
    {sections.map((section, idx) => (
      <div key={section.id} className={`flex flex-col gap-6 w-full max-w-4xl self-start ${idx > 0 || section.title ? 'mt-10' : ''}`}>
        {section.title && (
          <h2 className="text-3xl md:text-4xl font-semibold tracking-wide font-inria-sans mb-2">{section.title}</h2>
        )}
        <div 
          className="flex flex-col gap-6 text-gray-300 text-lg md:text-xl leading-relaxed" 
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </div>
    ))}

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

            <Footer />
            <div
                className="absolute -bottom-44 -left-1/4 -z-50 h-[675px] w-[150%] -rotate-12 rounded-3xl bg-gradient-to-tr from-[#2B2EE9] to-[#04344b] opacity-15">
            </div>
        </div> 

    </>
  );
}
