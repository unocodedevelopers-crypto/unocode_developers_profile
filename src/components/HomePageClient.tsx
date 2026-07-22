'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
/* eslint-disable */

import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import ClientContactForm from '@/components/ClientContactForm';
import GreenScreenVideo from '@/components/GreenScreenVideo';
export type Testimonial = {
    id: string;
    name: string;
    company: string;
    text: string;
    imageUrl?: string;
};

export type Project = {
    id: string;
    title: string;
    description: string[];
    imageUrl: string;
    gradientFrom: string;
    gradientTo: string;
};

export type Concept = {
    id: string;
    title: string;
    imageUrl: string;
};

export type BioEntry = {
    id: string;
    greeting: string;
    text: string;
    closing: string;
    imageUrl?: string;
};

function StackedCard({ concept, index, total, scrollYProgress }: { concept: Concept, index: number, total: number, scrollYProgress: any }) {
    const start = Math.max(0, (index - 1) / (total - 1 || 1));
    const end = index / (total - 1 || 1);

    // Card 0 stays at 0%. Subsequent cards slide in from right.
    const x = useTransform(scrollYProgress, [start, end], ["100%", "0%"]);

    // Slight push back for the card when the NEXT card is sliding over it
    const pushBackStart = index / (total - 1 || 1);
    const pushBackEnd = Math.min(1, (index + 1) / (total - 1 || 1));
    const scale = useTransform(scrollYProgress, [pushBackStart, pushBackEnd], [1, 0.95]);

    return (
        <motion.div
            style={{
                x: index === 0 ? "0%" : x,
                zIndex: index,
                scale: index === total - 1 ? 1 : scale
            }}
            className="absolute top-0 left-0 w-full h-full bg-[#0a0a0a] flex items-center justify-center p-8 lg:p-20 shadow-[-30px_0_50px_rgba(0,0,0,0.7)] border-l border-white/5 text-white"
        >
            <div className="flex w-full h-full max-w-7xl mx-auto items-center flex-col lg:flex-row gap-10 lg:gap-20">
                <div className="w-full lg:w-1/2 flex flex-col justify-center h-full gap-4 lg:gap-8">
                    <h3 className="text-7xl lg:text-9xl font-bold font-serif text-gray-700 opacity-50">0{index + 1}</h3>
                    <h4 className="text-4xl lg:text-6xl font-bold uppercase tracking-wider">{concept.title}</h4>
                    <p className="text-lg lg:text-xl text-gray-400 max-w-md leading-relaxed">
                        Elevate your brand with digital experiences built to leave a lasting impression. Check out this showcase for {concept.title}.
                    </p>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <img className="rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[70vh] border border-white/10" src={concept.imageUrl} alt={concept.title} loading="lazy" />
                </div>
            </div>
        </motion.div>
    );
}

function ConceptsStackedScroll({ concepts }: { concepts: Concept[] }) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="relative w-full" style={{ height: `${Math.max(1, concepts.length) * 100}vh` }}>
            <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
                {concepts.map((concept, index) => (
                    <StackedCard key={concept.id} concept={concept} index={index} total={concepts.length} scrollYProgress={scrollYProgress} />
                ))}
            </div>
        </div>
    );
}

export default function HomePageClient({
    testimonials,
    projects,
    concepts,
    bioEntries
}: {
    testimonials: Testimonial[],
    projects: Project[],
    concepts: Concept[],
    bioEntries?: BioEntry[]
}) {
    const [showPreloader, setShowPreloader] = useState(true);

    const aboutIntroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: aboutIntroRef,
        offset: ["start end", "end start"]
    });

    // Animate texts to start separated, join in the middle (0%), and continue moving
    const upperTextX = useTransform(scrollYProgress, [0, 0.5, 1], ["-25%", "0%", "25%"]);
    const lowerTextX = useTransform(scrollYProgress, [0, 0.5, 1], ["25%", "0%", "-25%"]);

    useEffect(() => {
        // Remove preloader from DOM after curtain animation finishes (1.5s delay + 0.9s animation = 2.4s)
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 2500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showPreloader && (
                <>
                    <style>{`
                        .preloader {
                            position: fixed;
                            inset: 0;
                            z-index: 9999;
                            background: #0f0c29;
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            animation: curtainUp 0.9s cubic-bezier(.76,0,.24,1) forwards;
                            animation-delay: 1.5s;
                        }
                        @keyframes curtainUp {
                            to { transform: translateY(-100%); }
                        }
                        .preloader-logo {
                            font-size: 15px;
                            letter-spacing: 6px;
                            font-weight: 700;
                            color: #f5f3f7;
                            opacity: 0;
                            animation: logoIn 0.7s ease forwards 0.15s;
                        }
                        @keyframes logoIn {
                            to { opacity: 1; letter-spacing: 3px; }
                        }
                        .preloader-bar {
                            margin-top: 22px;
                            width: 160px;
                            height: 2px;
                            background: rgba(255,255,255,0.1);
                            border-radius: 2px;
                            overflow: hidden;
                        }
                        .preloader-bar-fill {
                            height: 100%;
                            width: 0%;
                            background: linear-gradient(90deg, #a855f7, #6366f1, #e879f9);
                            animation: fillBar 1.3s cubic-bezier(.4,0,.2,1) forwards 0.2s;
                        }
                        @keyframes fillBar { 
                            to { width: 100%; } 
                        }
                    `}</style>
                    <div className="preloader">
                        <div className="preloader-logo">UNOCODE DEVELOPERS</div>
                        <div className="preloader-bar">
                            <div className="preloader-bar-fill"></div>
                        </div>
                    </div>
                </>
            )}

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
            <dialog className="modal w-full text-gray-900 transition-none before:rounded-lg">
                <form method="dialog" className="modal-backdrop h-screen"><button aria-label="close" tabIndex={-1}></button>
                </form>
                <div
                    className="glass-border modal-box fixed top-[15%] mx-2 w-[calc(100%-16px)] max-w-md overflow-hidden rounded-lg bg-white/70 backdrop-blur-xl before:rounded-lg">
                    <form method="dialog"><button
                        className="absolute right-4 top-4 text-gray-900 transition-colors hover:text-gray-800"
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
                                        className="label flex w-fit cursor-pointer gap-3 text-sm text-gray-900"><input type="checkbox"
                                            defaultChecked
                                            className="checkbox checkbox-sm rounded-md border-gray-800 bg-gray-100 transition-colors [--chkbg:theme(colors.gray.700)] [--chkfg:theme(colors.gray.50)] hover:bg-gray-700" />
                                </label>
                            </div>
                        </div>
                        <div className="flex w-full justify-end gap-2 text-xs normal-case"><button id=""
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center py-3 bg-gray-600/20 backdrop-blur-sm hover:bg-gray-700/20 shadow transition-colors text-xs px-5">Cancel
                        </button> <button id=""
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center py-3 bg-gray-50 hover:bg-gray-100 hover:shadow-none shadow-md transition-[box-shadow,background-color] text-black font-semibold normal-case px-5 text-xs">Save
                            </button></div>
                    </div>
                </div>
            </dialog>
            <div className="relative flex min-h-screen w-full flex-col gap-48 z-0 overflow-x-clip">
                <video
                    autoPlay loop muted playsInline
                    className="absolute top-0 left-0 w-full h-screen object-cover z-0"
                    src="/video.mp4"
                />
                <div className="absolute left-0 top-0 h-screen w-full bg-black/40 z-0 pointer-events-none"></div>
                <Header />
                <div className="w-full flex-1 px-5 pt-32 md:pt-36 lg:px-10 lg:pt-40 xl:pt-44">
                    <div id="home-gradient"
                        className="absolute left-0 top-0 -z-50 h-[95vh] w-full bg-gradient-to-tl from-gray-100 to-white opacity-0">
                    </div>


                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1.5 }}
                        className="relative z-10 flex w-full flex-col items-center justify-center gap-8 text-center xl:gap-12 2xl:gap-16 min-h-[calc(100vh-8rem)] md:min-h-[calc(100vh-9rem)] lg:min-h-[calc(100vh-10rem)] xl:min-h-[calc(100vh-11rem)] pb-20"
                        id="hero-wrapper">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.6 }}
                            className="font-inria-sans text-lg font-thin uppercase tracking-wider md:text-xl xl:text-2xl 2xl:text-3xl"
                            id="hero-supporting-title">Unocode Developers</motion.h2>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1.8, type: 'spring', stiffness: 100 }}
                            className="font-inria-sans text-4xl font-bold capitalize leading-[44px] tracking-[.15em] xl:text-5xl 2xl:text-6xl">
                            <h1>
                              Innovate. <br className="sm:hidden" /> Develop. Elevate.
                              <span className="sr-only"> - Unocode Developers | Web Design & Web Development Agency in Madurai, TN</span>
                            </h1>
                        </motion.div>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.0 }}
                            className="flex flex-wrap justify-center gap-x-1 tracking-wide xs:px-16 lg:gap-x-1.5 xl:text-lg 2xl:text-xl">
                            <span>Elevate your brand with digital experiences</span><span>built to leave a lasting impression.</span>
                        </motion.p> <motion.a id=""
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 2.2 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center px-8 py-3 bg-gray-50 hover:bg-gray-100 hover:shadow-none uppercase shadow-md transition-[box-shadow,background-color] text-black font-semibold text-sm mt-6"
                            href="/contact" target="_self" rel="">Start project
                        </motion.a>
                    </motion.div>
                    <div className="pointer-events-none fixed left-0 top-0 h-full w-full bg-black opacity-20"
                        id="hero-backdrop"></div> <button id="scrollToExplore"
                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center hover:decoration-white/75 decoration-white/40 underline-offset-4 group group text-sm transition-none no-underline fixed bottom-8 left-1/2 z-10 -translate-x-1/2 px-4 py-2 text-transparent sm:left-8 sm:translate-x-0">scroll
                        to explore <span
                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#111827"
                                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                className="lucide-icon lucide lucide-triangle">
                                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />

                            </svg></span> <span
                                className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                    xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24" fill="#111827"
                                    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                    className="lucide-icon lucide lucide-triangle">
                                <path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />

                            </svg></span></button>
                    <div>
                        <div className="relative">
                            <div id="social-proof-heading-wrapper"
                                className="relative flex pt-16 pb-12 flex-col items-center justify-center">
                                <motion.div
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="flex w-full flex-col items-start gap-2 text-left lg:items-center lg:gap-4 lg:text-center max-w-96 lg:max-w-lg 2xl:max-w-xl"
                                    id="heading-container-undefined">
                                    <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                        id="heading-title-testimonials">
                                        About Us
                                    </h2>
                                    <p className="text-sm lg:text-base 2xl:text-lg">
                                        We build modern, responsive, and high-performance websites that help businesses grow online. At Unocode Developers, we combine creativity, innovation, and technology to deliver digital solutions tailored to your goals.</p>
                                </motion.div>
                            </div>
                            <div id="social-proof-scroller"></div>
                        </div>
                        <div className="relative flex w-full flex-col items-center gap-5 pb-24"><span className="absolute -top-[400px] lg:-top-[600px]" id="reviews"></span>
                            <div className="flex w-full flex-wrap justify-center gap-6 pb-24 lg:pb-52"
                                id="desktop-reviews">
                                {testimonials.map((testimonial, index) => (
                                    <motion.div
                                        key={testimonial.id}
                                        initial={{ opacity: 0, y: 50 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 0.6, delay: index * 0.15 }}
                                        whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)" }}
                                        className="flex w-full max-w-sm flex-col gap-6 rounded-xl border border-black/5 bg-white/70 p-8 shadow-lg backdrop-blur-md">
                                        <span className="text-4xl font-serif text-gray-800">“</span>
                                        <p className="flex-1 text-sm leading-relaxed text-gray-700">{testimonial.text}</p>
                                        <div className="flex items-center gap-4">
                                            {testimonial.imageUrl ? (
                                                <img src={testimonial.imageUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover border border-black/10" />
                                            ) : (
                                                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold">
                                                    {testimonial.name.charAt(0)}
                                                </div>
                                            )}
                                            <div>
                                                <p className="text-sm font-semibold text-gray-900">{testimonial.name}</p>
                                                <p className="text-xs text-gray-600">{testimonial.company}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-20 pt-12 sm:gap-24 lg:gap-32">
                        <div className="relative flex flex-col items-center gap-10 lg:gap-16"><span className="absolute -top-20"
                            id="projects"></span>
                            <div className="flex w-full flex-col gap-2 text-left lg:items-center lg:gap-4 lg:text-center max-w-lg lg:max-w-6xl items-center"
                                id="heading-container-projects">
                                <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                    id="heading-title-projects">Projects</h2>

                            </div>
                            <div className="flex flex-col items-center gap-16 lg:px-10 xl:gap-24">
                                {projects.map((project, index) => {
                                    const isReversed = index % 2 !== 0;
                                    return (
                                        <motion.div
                                            key={project.id}
                                            initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true, margin: "-100px" }}
                                            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                                            className={`relative flex max-w-lg flex-col gap-7 lg:max-w-6xl lg:items-center lg:gap-12 ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
                                            <button
                                                className="mouse-follow group relative cursor-none transition-shadow duration-1000 lg:w-2/3 shadow-lg"
                                                data-type="popup" id={`thumbnail-button-${project.id}`}>
                                                <div className="group relative aspect-[1.872074883]">
                                                    {project.imageUrl.endsWith('.mp4') ? (
                                                        <>
                                                            <video
                                                                className="absolute -z-10 rounded opacity-0 blur-2xl brightness-[3] saturate-150 transition-opacity duration-700 group-hover:opacity-50"
                                                                src={project.imageUrl}
                                                                autoPlay loop muted playsInline
                                                                width="1200" height="641"
                                                            />
                                                            <video
                                                                className="thumbnail-image rounded"
                                                                src={project.imageUrl}
                                                                autoPlay loop muted playsInline
                                                                width="1200" height="641"
                                                                data-flip-id="thumbnail-image"
                                                                id={`thumbnail-image-${project.id}`}
                                                            />
                                                        </>
                                                    ) : (
                                                        <>
                                                            <img
                                                                className="absolute -z-10 rounded opacity-0 blur-2xl brightness-[3] saturate-150 transition-opacity duration-700 group-hover:opacity-50"
                                                                src={project.imageUrl}
                                                                alt={`Background blur for project ${project.title}`} loading="lazy" width="1200" height="641" />
                                                            <img className="thumbnail-image rounded"
                                                                src={project.imageUrl}
                                                                alt={`Screenshot of website for ${project.title}`} loading="lazy" width="1200" height="641" data-flip-id="thumbnail-image"
                                                                id={`thumbnail-image-${project.id}`} />
                                                        </>
                                                    )}
                                                </div>
                                            </button>
                                            <div className="relative flex flex-col gap-2 lg:w-1/3">
                                                <div id={`project-gradient-${project.id}`}
                                                    className={`absolute -left-1/4 -top-[12.5%] -z-50 h-[125%] w-[150%] rounded-full opacity-80 lg:w-[200%] ${isReversed ? 'lg:-left-1/3' : 'lg:-left-2/3'}`}
                                                    style={{ background: `linear-gradient(to top right, ${project.gradientFrom}, ${project.gradientTo})` }}
                                                >
                                                </div>
                                                <h2 className="font-inria-sans text-2xl font-medium tracking-wide xl:text-3xl">
                                                    {project.title}</h2>
                                                <div className="flex flex-col gap-4 text-sm xl:text-base">
                                                    {project.description.map((desc, i) => (
                                                        <p key={i} className="text-gray-300 leading-relaxed">{desc}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="relative flex flex-col items-center gap-6"><span className="absolute -top-20"
                            id="concepts"></span>
                            <div className="flex w-full flex-col gap-2 text-left lg:items-center lg:gap-4 lg:text-center items-center"
                                id="heading-container-undefined">
                                <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl"
                                    id="heading-title-undefined">We Offers</h2>

                            </div>
                            <div className="flex w-full flex-col items-center">
                                <ConceptsStackedScroll concepts={concepts} />
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
                        <div className="flex w-full justify-center overflow-hidden">
                            <div id="about-intro-container"
                                ref={aboutIntroRef}
                                className="flex w-full max-w-sm flex-col items-center justify-center gap-8 font-inria-sans text-2xl font-thin tracking-wider xs:max-w-md xs:gap-9 xs:text-3xl sm:max-w-lg sm:gap-11 sm:text-4xl md:max-w-2xl md:gap-12 md:text-5xl 2xl:max-w-4xl 2xl:gap-16 2xl:text-6xl">
                                <motion.h2 id="about-intro-upper-text" className="w-full whitespace-nowrap" style={{ x: upperTextX }}>Meet the <b className="font-medium">person</b>
                                </motion.h2>
                                <motion.h2 id="about-intro-lower-text" className="w-full text-right whitespace-nowrap" style={{ x: lowerTextX }}><b className="font-medium">behind</b> the design
                                </motion.h2>
                            </div>
                        </div>
                        {bioEntries && bioEntries.length > 0 ? (
                            bioEntries.map((bio) => (
                                <motion.div
                                    key={bio.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8 }}
                                    className="relative flex justify-center mb-20">
                                    <div className="flex max-w-lg flex-col items-center gap-10 lg:max-w-[830px] lg:flex-row lg:gap-12">
                                        <div id="about-image" className=" w-[65%] max-w-72 sm:w-full"><img
                                            className="rounded-xl shadow-lg transition-shadow duration-1000 hover:shadow-none"
                                            src={bio.imageUrl || "Portrait%20Leon%20Obermann%201.webp"} alt="Portrait"
                                            loading="lazy" width="444" height="592" /></div>
                                        <div className="relative flex w-full flex-col gap-4 text-sm tracking-wide lg:text-base">
                                            <div id="about-gradient"
                                                className="absolute -left-1/4 -top-2/3 -z-50 h-[175%] w-[150%] rounded-full bg-gradient-to-tr from-[#440303] to-[#c63d14] opacity-[0.1] lg:-left-80 lg:-top-[12.5%] lg:h-[125%] lg:w-[200%]">
                                            </div>
                                            <h3 className="font-inria-sans text-3xl font-bold tracking-wide">{bio.greeting}</h3>
                                            <div style={{ textAlign: "justify" }} dangerouslySetInnerHTML={{ __html: bio.text }}></div>

                                            <p>{bio.closing}</p> <a id=""
                                                className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 underline decoration-white/40 underline-offset-4 group relative px-4 py-2 -ml-4"
                                                href="/about" target="_self" rel="">Learn more <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                                        fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                                    </svg></span> <span
                                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 24 24"
                                                            fill="#111827" stroke="currentColor" strokeWidth="2" strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
                                                    </svg></span></a>
                                        </div>
                                    </div>
                                </motion.div>
                            ))
                        ) : null}

                        <div className="relative flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16 w-full max-w-[1300px] mx-auto pb-20">
                            {/* Left Side: Sticky Video */}
                            <div className="w-full lg:w-1/2 flex justify-center items-center lg:sticky lg:top-32 z-10 hidden lg:flex h-fit lg:self-start">
                                <GreenScreenVideo
                                    src="/man_green_screen.mp4"
                                    className="w-full max-w-2xl md:max-w-3xl xl:max-w-[40rem] 2xl:max-w-[50rem] scale-110 lg:scale-[1.35] origin-right lg:origin-center"
                                />
                            </div>

                            {/* Right Side: Form */}
                            <div className="w-full lg:w-1/2 flex flex-col w-full z-20">
                                <div id="cta-intro-container" className="relative flex w-full justify-center lg:justify-start pb-10">
                                    <div id="cta-intro-background"
                                        className="pointer-events-none absolute -left-1/4 -top-[75%] flex h-[250%] w-[150%] items-center justify-center">
                                        <div className="dots h-full w-full max-w-screen-2xl svelte-1befunw"></div>
                                    </div>
                                    <div className="flex flex-col items-center lg:items-start gap-6 2xl:gap-10">
                                        <div className="z-10 flex flex-col items-center lg:items-start gap-3 text-center lg:text-left sm:gap-5 2xl:gap-8">
                                            <p
                                                className="font-inria-sans text-xl font-medium tracking-wide xs:text-2xl sm:text-3xl md:text-4xl 2xl:text-5xl 2xl:tracking-wide">
                                                Ready for the next step?</p>
                                            <div
                                                className="flex flex-col items-center lg:items-start gap-0.5 tracking-wide sm:gap-1.5 sm:text-lg md:text-xl 2xl:gap-3 2xl:text-2xl 2xl:tracking-wide">
                                                <p id="cta-intro-subtitle-0">Tell me about your brand and project goals.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="relative flex w-full justify-center lg:justify-start"><span className="absolute -top-20" id="contact"></span>
                                    <ClientContactForm>
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
                                                href="mailto:unocode.developers@gmail.com"
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

                                                </svg></span> <span>unocode.developers@gmail.com</span>
                                                <span
                                                    className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                        xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                        viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2"
                                                        strokeLinecap="round" strokeLinejoin="round"
                                                        className="lucide-icon lucide lucide-triangle">
                                                        <path
                                                            d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                    </svg></span> <span
                                                        className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                            xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                            viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2"
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
                                                        </svg></span> <span>+91 80722 24577 , +91 88386 08103</span> <span
                                                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity left-2.5 group-hover:left-0.5 motion-reduce:left-0.5"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                                viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                className="lucide-icon lucide lucide-triangle">
                                                            <path
                                                                d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                        </svg></span> <span
                                                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                                viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                className="lucide-icon lucide lucide-triangle">
                                                            <path
                                                                d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                        </svg></span></a> <a id=""
                                                            className="rounded-xl justify-center duration-500 h-fit w-fit flex gap-2.5 tracking-wide items-center transition-colors hover:decoration-white/75 decoration-white/40 underline-offset-4 group relative px-4 no-underline -ml-4 py-1"
                                                            href="https://www.linkedin.com/in/unocode-developers-880107421/" target="_blank"
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
                                                            viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2"
                                                            strokeLinecap="round" strokeLinejoin="round"
                                                            className="lucide-icon lucide lucide-triangle">
                                                            <path
                                                                d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                        </svg></span> <span
                                                            className="pointer-events-none absolute top-1/2 -translate-y-1/2 -rotate-90 opacity-0 transition-all duration-200 group-hover:opacity-100 motion-reduce:transition-opacity right-2.5 group-hover:right-0.5 motion-reduce:right-0.5"><svg
                                                                xmlns="http://www.w3.org/2000/svg" width="6" height="6"
                                                                viewBox="0 0 24 24" fill="#111827" stroke="currentColor" strokeWidth="2"
                                                                strokeLinecap="round" strokeLinejoin="round"
                                                                className="lucide-icon lucide lucide-triangle">
                                                            <path
                                                                d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />


                                                        </svg></span></a></div>
                                        </div>
                                    </ClientContactForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
                <div className="absolute inset-0 -z-50 overflow-hidden pointer-events-none">
                    <div className="absolute -bottom-44 -left-1/4 h-[675px] w-[150%] -rotate-12 rounded-3xl bg-gradient-to-tr from-[#2B2EE9] to-[#04344b] opacity-15"></div>
                </div>
            </div>
        </>
    );
}
