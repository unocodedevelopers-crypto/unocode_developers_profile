import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClientContactForm from '@/components/ClientContactForm';
import GreenScreenVideo from '@/components/GreenScreenVideo';

export default function ContactPage() {
    return (
        <>
            <div className="relative flex min-h-screen w-full flex-col gap-48 overflow-clip"><Header />
                <div className="flex flex-col lg:flex-row items-center lg:items-start pt-32 px-5 lg:px-10 gap-10 lg:gap-16 w-full max-w-[1300px] mx-auto min-h-screen">

                    <div className="w-full lg:w-1/2 flex justify-center items-center lg:sticky lg:top-32 h-fit lg:self-start">
                        <GreenScreenVideo
                            src="/man_green_screen.mp4"
                            className="w-full max-w-2xl md:max-w-3xl xl:max-w-[40rem] 2xl:max-w-[50rem] scale-110 lg:scale-[1.35] origin-right lg:origin-center"
                        />
                    </div>

                    {/* Right Side: Contact Info & Form */}
                    <div className="w-full lg:w-1/2 max-w-xl 2xl:max-w-2xl flex flex-col">
                        <div className="mb-10">
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-inria-sans mb-4">Tell me about your brand</h1>
                            <p className="text-gray-200 text-lg mb-6">You value close collaboration, clear communication and full transparency? Then you've come to the right place.</p>
                            <div className="flex flex-col gap-3 text-gray-200">
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                                    <a href="mailto:unocode.developers@gmail.com" className="hover:text-white transition-colors">unocode.developers@gmail.com</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                                    <a href="tel:+91 80722 24577" className="hover:text-white transition-colors">+91 80722 24577 , +91 88386 08103</a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                                    <a href="https://www.linkedin.com/in/unocode-developers-880107421/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        <div className="relative flex w-full justify-center lg:justify-start"><span className="absolute -top-20" id="contact"></span>
                            <div className="w-full">
                                <ClientContactForm />
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}
