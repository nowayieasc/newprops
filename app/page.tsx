'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import IntroSequence from './components/IntroSequence';
import ProposalCard from './components/ProposalCard';
import OrientationLock from './components/OrientationLock';
import DynamicBackground from './components/DynamicBackground';
import BackgroundMusic from './components/BackgroundMusic';

export default function Home() {
    const [showIntro, setShowIntro] = useState(true);
    const [currentBg, setCurrentBg] = useState<string | null>(null);

    return (
        <main className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex items-center justify-center animate-gradient-x">
            <OrientationLock />
            <BackgroundMusic />
            <DynamicBackground image={currentBg} />

            <AnimatePresence mode="wait">
                {showIntro ? (
                    <IntroSequence
                        key="intro"
                        onComplete={() => setShowIntro(false)}
                        onBgChange={setCurrentBg}
                    />
                ) : (
                    <motion.div
                        key="proposal"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="w-full h-full flex items-center justify-center z-10"
                    >
                        <ProposalCard />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating hearts background (CSS only for performance) */}
            <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute text-pink-200 text-4xl animate-float opacity-50"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${Math.random() * 5 + 5}s`,
                        }}
                    >
                        ❤️
                    </div>
                ))}
            </div>
        </main>
    );
}
