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

          {/* Page Heading */}
          <div className="w-full mt-10 md:mt-16 mb-8 text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-wide font-inria-sans text-white">
              About our Services
            </h1>
          </div>

          {/* Dynamic Sections */}
          {sections.map((section, idx) => {
            if (section.imageUrl) {
              const imageLeft = idx % 2 === 0;
              return (
                <div key={section.id} className={`flex flex-col ${imageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} w-full max-w-6xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-[#081021] ${idx > 0 ? 'mt-16' : 'mt-10'}`}>
                  {/* Image Side */}
                  <div className="w-full lg:w-[55%] relative min-h-[300px] lg:min-h-[450px]">
                    <img 
                      src={section.imageUrl.startsWith('/') || section.imageUrl.startsWith('http') ? section.imageUrl : `/${section.imageUrl}`} 
                      alt={section.title || "Section image"} 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                  
                  {/* Content Side */}
                  <div className="w-full lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center">
                    {section.title && (
                      <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-6 text-white">{section.title}</h2>
                    )}
                    <div
                      className="text-[#a0abc0] text-base md:text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: section.content }}
                    />
                  </div>
                </div>
              );
            }

            // Fallback for sections without an image
            return (
              <div key={section.id} className={`flex flex-col gap-6 w-full max-w-4xl self-start ${idx > 0 || section.title ? 'mt-16' : 'mt-10'}`}>
                {section.title && (
                  <h2 className="text-3xl md:text-4xl font-semibold tracking-wide font-inria-sans mb-2 text-white">{section.title}</h2>
                )}
                <div
                  className="flex flex-col gap-6 text-[#a0abc0] text-lg md:text-xl leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: section.content }}
                />
              </div>
            );
          })}

          {/* CTA Section */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10 w-full mt-20 mb-20 md:mb-32">
            <div className="flex flex-col gap-8 w-full max-w-xl">
              <h2 className="text-4xl md:text-5xl font-bold font-inria-sans leading-tight">
                Ready for<br />the next step?
              </h2>
              <p className="text-2xl text-gray-200">
                Tell me about your brand<br />and project goals.
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
