'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Project } from '@/components/HomePageClient';

export default function ProjectsPageClient({ projects }: { projects: Project[] }) {
    return (
        <div className="relative flex min-h-screen w-full flex-col overflow-clip z-0" style={{ backgroundColor: '#0f0c29', backgroundImage: 'linear-gradient(to right, #24243e, #302b63, #0f0c29)', WebkitBackgroundImage: '-webkit-linear-gradient(to right, #24243e, #302b63, #0f0c29)' } as React.CSSProperties}>
            <Header />
            <div className="w-full flex-1 px-5 pt-32 md:pt-36 lg:px-10 lg:pt-40 xl:pt-44 pb-32">
                <div className="flex flex-col items-center gap-10 lg:gap-16">
                    <div className="flex w-full flex-col gap-2 text-left lg:items-center lg:gap-4 lg:text-center max-w-lg lg:max-w-6xl items-center">
                        <h2 className="font-inria-sans text-3xl leading-10 tracking-wide lg:text-4xl 2xl:text-5xl text-white">Projects</h2>
                    </div>
                    <div className="flex flex-col items-center gap-16 lg:px-10 xl:gap-24 w-full">
                        {projects.map((project, index) => {
                            const isReversed = index % 2 !== 0;
                            return (
                                <motion.div
                                    key={project.id}
                                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
                                    className={`relative flex max-w-lg flex-col gap-7 lg:max-w-6xl lg:items-center lg:gap-12 w-full ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
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
                                                        className="thumbnail-image rounded object-cover w-full h-full"
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
                                                    <img className="thumbnail-image rounded object-cover w-full h-full"
                                                        src={project.imageUrl}
                                                        alt={`Screenshot of website for ${project.title}`} loading="lazy" width="1200" height="641" data-flip-id="thumbnail-image"
                                                        id={`thumbnail-image-${project.id}`} />
                                                </>
                                            )}
                                        </div>
                                    </button>
                                    <div className="relative flex flex-col gap-2 lg:w-1/3 text-white text-left">
                                        <div id={`project-gradient-${project.id}`}
                                            className={`absolute -left-1/4 -top-[12.5%] -z-50 h-[125%] w-[150%] rounded-full opacity-15 lg:w-[200%] ${isReversed ? 'lg:-left-1/3' : 'lg:-left-2/3'}`}
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
            </div>
            <Footer />
        </div>
    );
}
