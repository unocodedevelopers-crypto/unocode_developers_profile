'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const processSteps = [
    {
        num: "01",
        title: "Requirement Analysis",
        desc: "We understand your business goals and project requirements.",
        img: "/uploads/img_1.jpeg"
    },
    {
        num: "02",
        title: "UI/UX Design",
        desc: "Creating intuitive and visually engaging user experiences.",
        img: "/uploads/img_2.jpeg"
    },
    {
        num: "03",
        title: "Development",
        desc: "Building fast, scalable, and secure web applications.",
        img: "/uploads/img_3.jpeg"
    },
    {
        num: "04",
        title: "Testing",
        desc: "Ensuring quality, responsiveness, and cross-browser compatibility.",
        img: "/uploads/img_4.jpeg"
    },
    {
        num: "05",
        title: "Deployment",
        desc: "Launching your website with optimal performance.",
        img: "/uploads/img_5.jpeg"
    },
    {
        num: "06",
        title: "Support",
        desc: "Continuous maintenance and future improvements.",
        img: "/uploads/img_6.jpeg"
    }
];

export default function ProcessSection() {
    return (
        <section className="relative w-full bg-transparent pt-20 pb-0 px-5 lg:px-10">
            <div className="max-w-5xl mx-auto w-full mb-10 md:mb-20 flex flex-col items-center text-center">
                <div className="relative inline-block w-fit px-4 py-3 mb-6 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-inria-sans tracking-wide relative z-10">Process</h2>
                    <svg className="absolute -bottom-4 left-0 w-full h-6 text-yellow-500 z-0" viewBox="0 0 200 20" preserveAspectRatio="none">
                        <path d="M 0 15 Q 100 0 200 15" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        <path d="M 20 18 Q 110 5 180 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                </div>
                <p className="text-gray-400 max-w-2xl text-lg lg:text-xl font-inria-sans">How we bring your ideas to life from concept to launch.</p>
            </div>

            <div className="relative w-full max-w-5xl mx-auto flex flex-col gap-[30vh] md:gap-[50vh] pb-[5vh]">
                {processSteps.map((step, index) => (
                    <Card key={step.num} step={step} index={index} total={processSteps.length} />
                ))}
            </div>
        </section>
    );
}

function Card({ step, index, total }: { step: any, index: number, total: number }) {
    // Pure CSS sticky creates the perfect "slide up and stack" effect without needing complex framer-motion scroll mapping
    return (
        <div 
            className="sticky top-24 lg:top-32 w-full min-h-[50vh] lg:min-h-[60vh] flex flex-col md:flex-row items-center gap-10 bg-[#1e1a3e] border border-white/5 rounded-3xl p-8 lg:p-16 shadow-2xl overflow-hidden origin-top"
            style={{
                zIndex: index + 10,
                // Fallback to match the body gradient as closely as possible so it looks seamless
                background: "linear-gradient(to right, #24243e, #302b63, #0f0c29)"
            }}
        >
            {/* Left Content */}
            <div className="w-full md:w-1/2 flex flex-col justify-center gap-4 lg:gap-8 relative z-10">
                <h3 className="text-7xl lg:text-9xl font-bold font-serif text-white/30 select-none">
                    {step.num}
                </h3>
                <h4 className="text-4xl lg:text-6xl font-bold uppercase tracking-wider text-white mt-[-1rem] lg:mt-[-2rem]">
                    {step.title}
                </h4>
                <p className="text-lg lg:text-xl text-gray-400 max-w-md leading-relaxed mt-4">
                    {step.desc}
                </p>
            </div>

            {/* Right Image */}
            <div className="w-full md:w-1/2 h-64 md:h-full min-h-[300px] lg:min-h-[400px] relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 group bg-black/50">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={step.img} 
                    alt={step.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0c29]/80 via-transparent to-transparent pointer-events-none" />
            </div>
        </div>
    );
}
