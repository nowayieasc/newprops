'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { config } from '@/app/config';

export default function ProposalCard() {
    const [accepted, setAccepted] = useState(false);
    const [noCount, setNoCount] = useState(0);
    const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });

    const handleNoHover = () => {
        const x = Math.random() * 600 - 300; // -300 to 300
        const y = Math.random() * 600 - 300; // -300 to 300
        setNoButtonPos({ x, y });
        setNoCount(prev => prev + 1);
    };

    const handleYesClick = () => {
        setAccepted(true);
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#ff69b4', '#ff1493', '#ffd700', '#ffffff']
        });

        // Continuous confetti
        const duration = 5 * 1000;
        const animationEnd = Date.now() + duration;

        const random = (min: number, max: number) => Math.random() * (max - min) + min;

        const interval: any = setInterval(function () {
            const timeLeft = animationEnd - Date.now();
            if (timeLeft <= 0) {
                return clearInterval(interval);
            }
            const particleCount = 50 * (timeLeft / duration);
            confetti({
                particleCount,
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: { x: random(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff69b4', '#e91e63']
            });
            confetti({
                particleCount,
                startVelocity: 30,
                spread: 360,
                ticks: 60,
                origin: { x: random(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff69b4', '#e91e63']
            });
        }, 250);
    };

    const getNoButtonText = () => {
        const phrases = config.proposal.noButton;
        return phrases[Math.min(noCount, phrases.length - 1)];
    };

    if (accepted) {
        return (
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="card"
            >
                <h1 className="text-4xl md:text-5xl font-bold text-pink-600 mb-4 font-serif">
                    {config.success.title}
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                    {config.success.message}
                </p>
                <div className="w-full h-64 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden relative">
                    {config.success.video ? (
                        <video
                            src={config.success.video}
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <img src={config.success.image} alt="Success!" className="w-full h-full object-cover" />
                    )}
                    <div className="absolute inset-0 bg-pink-500 opacity-10"></div>
                </div>
            </motion.div>
        );
    }

    return (
        <div className="relative w-full max-w-lg">
            <div className="card w-full">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 font-serif leading-tight">
                    {config.proposal.question}
                </h1>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center mt-8">
                    <button
                        onClick={handleYesClick}
                        className="btn btn-primary text-xl px-8 py-3 w-full md:w-auto transform hover:scale-110 active:scale-95 transition-all"
                    >
                        {config.proposal.yesButton}
                    </button>

                    <motion.button
                        animate={{ x: noButtonPos.x, y: noButtonPos.y }}
                        onMouseEnter={handleNoHover}
                        onTouchStart={handleNoHover}
                        className="btn btn-secondary text-xl px-8 py-3 w-full md:w-auto"
                        style={{ position: noCount > 0 ? 'absolute' : 'relative' }}
                    >
                        {getNoButtonText()}
                    </motion.button>
                </div>
            </div>
        </div>
    );
}
