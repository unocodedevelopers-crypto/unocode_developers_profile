"use client";
import { useEffect, useRef } from "react";

export default function GreenScreenVideo({ src, className }: { src: string, className?: string }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const video = videoRef.current;
        const canvas = canvasRef.current;
        if (!video || !canvas) return;

        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) return;

        let animationFrameId: number;

        const drawFrame = () => {
            if (video.paused || video.ended) {
                animationFrameId = requestAnimationFrame(drawFrame);
                return;
            }
            
            if (video.videoWidth === 0 || video.videoHeight === 0) {
                animationFrameId = requestAnimationFrame(drawFrame);
                return;
            }
            
            if (canvas.width !== video.videoWidth || canvas.height !== video.videoHeight) {
                canvas.width = video.videoWidth;
                canvas.height = video.videoHeight;
            }

            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

            const frame = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = frame.data;

            // Chroma key
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i + 0];
                const g = data[i + 1];
                const b = data[i + 2];

                if (g > 90 && g > r * 1.3 && g > b * 1.3) {
                    data[i + 3] = 0; 
                }
            }

            ctx.putImageData(frame, 0, 0);
            animationFrameId = requestAnimationFrame(drawFrame);
        };

        const onPlay = () => {
            drawFrame();
        };

        video.addEventListener('play', onPlay);
        
        animationFrameId = requestAnimationFrame(drawFrame);
        
        return () => {
            video.removeEventListener('play', onPlay);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={`relative flex items-center justify-center ${className || ''}`}>
            {/* 
              Do not use 'hidden' (display: none) as it stops video playback/decoding in some browsers.
              Instead, use opacity-0 and absolute positioning to keep it in the DOM but invisible. 
            */}
            <video 
                ref={videoRef} 
                src={src} 
                autoPlay loop muted playsInline
                className="opacity-0 absolute w-0 h-0 pointer-events-none" 
            />
            <canvas ref={canvasRef} className="w-full h-full object-contain drop-shadow-2xl rounded-xl" />
        </div>
    );
}
