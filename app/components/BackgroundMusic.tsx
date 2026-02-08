'use client';

import React, { useEffect, useRef, useState } from 'react';
import { config } from '@/app/config';

export default function BackgroundMusic() {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    useEffect(() => {
        // Attempt to autoplay
        const audio = audioRef.current;
        if (audio) {
            audio.volume = 0.3; // Low volume as requested
            audio.play().then(() => {
                setIsPlaying(true);
            }).catch(e => {
                console.log("Autoplay blocked, waiting for interaction", e);
            });
        }

        // Add interaction listener to start audio if autoplay failed
        const handleInteraction = () => {
            if (audio && audio.paused) {
                audio.play();
                setIsPlaying(true);
            }
        };

        document.addEventListener('click', handleInteraction);
        document.addEventListener('touchstart', handleInteraction);

        return () => {
            document.removeEventListener('click', handleInteraction);
            document.removeEventListener('touchstart', handleInteraction);
        };
    }, []);

    return (
        <div className="fixed bottom-4 right-4 z-50">
            <audio ref={audioRef} src={config.music} loop />
            <button
                onClick={() => {
                    const audio = audioRef.current;
                    if (audio) {
                        if (isPlaying) {
                            audio.pause();
                            setIsPlaying(false);
                        } else {
                            audio.play();
                            setIsPlaying(true);
                        }
                    }
                }}
                className="bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all"
            >
                {isPlaying ? '🎵' : '🔇'}
            </button>
        </div>
    );
}
