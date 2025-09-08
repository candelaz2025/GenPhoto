import React, { useState, useEffect } from 'react';
import { Translation } from '../locales/translations';

// Helper component for a single pixel
const Pixel: React.FC<{ color: string; }> = ({ color }) => (
    <div className={`w-1 h-1 ${color}`}></div>
);

// Data for the pixel art
const zenitsuArt = {
    body: [
        { r: 1, c: 9, s: 6, C: 'bg-yellow-400' }, { r: 2, c: 7, s: 10, C: 'bg-yellow-400' },
        { r: 3, c: 6, s: 12, C: 'bg-yellow-400' }, { r: 4, c: 5, s: 2, C: 'bg-yellow-400' },
        { r: 4, c: 7, s: 10, C: 'bg-orange-500' }, { r: 4, c: 17, s: 2, C: 'bg-yellow-400' },
        { r: 5, c: 5, s: 2, C: 'bg-yellow-200' }, { r: 5, c: 7, s: 10, C: 'bg-yellow-400' },
        { r: 5, c: 17, s: 2, C: 'bg-yellow-200' }, { r: 6, c: 6, s: 12, C: 'bg-yellow-200' },
        { r: 7, c: 7, s: 10, C: 'bg-yellow-200' }, { r: 7, c: 9, s: 2, C: 'bg-black' },
        { r: 7, c: 13, s: 2, C: 'bg-black' }, { r: 8, c: 8, s: 8, C: 'bg-yellow-200' },
        { r: 9, c: 7, s: 10, C: 'bg-gray-700' }, { r: 10, c: 5, s: 14, C: 'bg-gray-700' },
        { r: 11, c: 4, s: 16, C: 'bg-yellow-400' }, { r: 12, c: 4, s: 16, C: 'bg-yellow-400' },
        { r: 13, c: 3, s: 18, C: 'bg-yellow-400' }, { r: 14, c: 3, s: 18, C: 'bg-yellow-400' },
        { r: 15, c: 4, s: 16, C: 'bg-yellow-400' }, { r: 16, c: 4, s: 16, C: 'bg-yellow-400' },
        { r: 17, c: 5, s: 14, C: 'bg-yellow-400' }, { r: 18, c: 5, s: 14, C: 'bg-yellow-400' },
        { r: 19, c: 7, s: 10, C: 'bg-gray-800' },
    ],
    triangles: [
        { r: 11, c: 6, C: 'bg-white' }, { r: 11, c: 11, C: 'bg-white' }, { r: 11, c: 16, C: 'bg-white' },
        { r: 12, c: 5, s: 3, C: 'bg-white' }, { r: 12, c: 10, s: 3, C: 'bg-white' }, { r: 12, c: 15, s: 3, C: 'bg-white' },
        { r: 15, c: 6, C: 'bg-white' }, { r: 15, c: 11, C: 'bg-white' }, { r: 15, c: 16, C: 'bg-white' },
        { r: 16, c: 5, s: 3, C: 'bg-white' }, { r: 16, c: 10, s: 3, C: 'bg-white' }, { r: 16, c: 15, s: 3, C: 'bg-white' },
    ],
    pose1: [ // Left leg forward
        { r: 10, c: 2, s: 3, C: 'bg-gray-700' }, { r: 11, c: 2, s: 2, C: 'bg-gray-700' }, // Left Arm
        { r: 20, c: 6, s: 4, C: 'bg-gray-800' }, { r: 21, c: 5, s: 4, C: 'bg-gray-800' },
        { r: 22, c: 5, s: 4, C: 'bg-yellow-400' }, { r: 23, c: 5, s: 4, C: 'bg-yellow-400' },
        { r: 24, c: 6, s: 3, C: 'bg-black' }, // Left leg
        { r: 20, c: 14, s: 4, C: 'bg-gray-800' }, { r: 21, c: 15, s: 4, C: 'bg-gray-800' },
        { r: 22, c: 15, s: 4, C: 'bg-yellow-400' }, { r: 23, c: 15, s: 4, C: 'bg-yellow-400' },
        { r: 24, c: 15, s: 3, C: 'bg-black' }, // Right leg
    ],
    pose2: [ // Right leg forward
        { r: 10, c: 19, s: 3, C: 'bg-gray-700' }, { r: 11, c: 20, s: 2, C: 'bg-gray-700' }, // Right Arm
        { r: 20, c: 7, s: 4, C: 'bg-gray-800' }, { r: 21, c: 8, s: 4, C: 'bg-gray-800' },
        { r: 22, c: 8, s: 4, C: 'bg-yellow-400' }, { r: 23, c: 8, s: 4, C: 'bg-yellow-400' },
        { r: 24, c: 8, s: 3, C: 'bg-black' }, // Left leg
        { r: 20, c: 15, s: 4, C: 'bg-gray-800' }, { r: 21, c: 14, s: 4, C: 'bg-gray-800' },
        { r: 22, c: 14, s: 4, C: 'bg-yellow-400' }, { r: 23, c: 14, s: 4, C: 'bg-yellow-400' },
        { r: 24, c: 15, s: 3, C: 'bg-black' }, // Right leg
    ],
};

const PixelArt: React.FC<{ data: { r: number, c: number, s?: number, C: string }[] }> = ({ data }) => (
    <>
        {data.map((p, i) => (
            <div key={i} className={p.C} style={{ gridRow: p.r, gridColumn: `${p.c} / span ${p.s || 1}` }} />
        ))}
    </>
);

const PixelZenitsu = () => {
    const [pose, setPose] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => setPose(p => !p), 150);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="transform scale-[3] animate-running-bob">
            <div className="grid" style={{ gridTemplateColumns: 'repeat(24, 4px)', gridTemplateRows: 'repeat(25, 4px)' }}>
                <PixelArt data={zenitsuArt.body} />
                <PixelArt data={pose ? zenitsuArt.pose1 : zenitsuArt.pose2} />
                <PixelArt data={zenitsuArt.triangles} />
            </div>
        </div>
    );
};

interface LoaderProps {
    mode: 'image' | 'video';
    t: Translation;
}

const Loader: React.FC<LoaderProps> = ({ mode, t }) => {
    const messages = mode === 'video' 
        ? t.videoLoadingMessages 
        : t.imageLoadingMessages;
        
    const [message, setMessage] = React.useState(messages[0]);

    React.useEffect(() => {
        setMessage(messages[0]);
        const intervalId = setInterval(() => {
            setMessage(prevMessage => {
                const currentIndex = messages.indexOf(prevMessage);
                const nextIndex = (currentIndex + 1) % messages.length;
                return messages[nextIndex];
            });
        }, 3000);

        return () => clearInterval(intervalId);
    }, [mode, messages]);

    return (
        <div className="fixed inset-0 bg-base-100/80 backdrop-blur-md flex flex-col items-center justify-center z-50">
            <div 
              className="absolute w-64 h-64 bg-yellow-300 rounded-full animate-lightning-flash"
              style={{ filter: 'blur(120px)' }}
            />
            <PixelZenitsu />
            <p className="mt-8 text-lg font-semibold text-content transition-opacity duration-500">{message}</p>
        </div>
    );
};

export default Loader;
