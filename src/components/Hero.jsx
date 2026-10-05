import { useState } from "react";

const videos = [
    '/videos/video3.mp4',
    '/videos/video4.mp4',
    '/videos/video5.mp4',
];

export const Hero = () => {
    const [index, setIndex] = useState(0);

    return (
        <div className="relative w-full h-screen overflow-hidden">

            <video
                key={index}
                src={videos[index]}
                autoPlay
                muted
                playsInline
                onEnded={() => setIndex((index + 1) % videos.length)}
                className="absolute inset-0 w-full h-auto object-contain [image-rendering:pixelated] saturate-50"
            />

            <div className="absolute inset-0 bg-bg-dark/80" />
            <div className="absolute inset-0 bg-indigo-700 mix-blend-color" saturate-50 />

            <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6 px-6 text-center">
                <img src="/candlebyte.png" alt="CandleByte Interactive" className="w-32 sm:w-70" />
                <h1 className="font-tech text-5xl sm:text-7xl text-ice">
                    CandleByte Interactive
                </h1>
            </div>

        </div>
    );
};