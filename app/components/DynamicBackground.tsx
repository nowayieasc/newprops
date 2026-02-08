'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface DynamicBackgroundProps {
    image: string | null;
}

export default function DynamicBackground({ image }: DynamicBackgroundProps) {
    if (!image) return null;

    return (
        <div className="fixed inset-0 z-0 overflow-hidden bg-black">
            <AnimatePresence mode="popLayout">
                <motion.div
                    key={image}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.6, scale: 1 }} // 0.6 opacity to blend with background color
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className="absolute inset-0"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center blur-md"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                    {/* Overlay gradient to ensure text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/50 via-transparent to-pink-900/30" />
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
