'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { config } from '@/app/config';

interface IntroSequenceProps {
    onComplete: () => void;
    onBgChange: (image: string | null) => void;
}

const steps = config.intro.steps;

export default function IntroSequence({ onComplete, onBgChange }: IntroSequenceProps) {
    const [currentStep, setCurrentStep] = useState(0);

    // Update background when step changes
    useEffect(() => {
        onBgChange(steps[currentStep].image);
    }, [currentStep, onBgChange]);

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(prev => prev + 1);
        } else {
            onComplete();
        }
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center cursor-pointer overflow-hidden"
            onClick={handleNext}
        >
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="text-center px-6 max-w-2xl flex flex-col items-center z-10"
                >
                    {steps[currentStep].image && (
                        <motion.img
                            src={steps[currentStep].image || ""}
                            alt="Cute moment"
                            className="w-full max-w-sm rounded-lg shadow-2xl mb-8 object-cover h-64 border-4 border-white transform -rotate-2"
                            initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
                            animate={{ scale: 1, opacity: 1, rotate: -2 }}
                            transition={{ delay: 0.2 }}
                        />
                    )}
                    <h1 className="text-4xl md:text-6xl font-bold text-gray-800 font-serif mb-6 leading-tight drop-shadow-md bg-white/50 backdrop-blur-sm p-4 rounded-xl">
                        {steps[currentStep].text}
                    </h1>
                    <p className="text-gray-600 text-sm mt-8 uppercase tracking-widest font-bold bg-white/30 px-4 py-1 rounded-full">
                        {currentStep === steps.length - 1 ? "Tap to begin" : "Tap to continue"}
                    </p>
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
