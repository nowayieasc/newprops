'use client';

import React, { useState, useEffect } from 'react';

export default function OrientationLock() {
    const [isPortrait, setIsPortrait] = useState(false);

    useEffect(() => {
        const checkOrientation = () => {
            // Check if it's a mobile device (width < 768px) and in portrait mode
            const isMobile = window.innerWidth < 768;
            const portrait = window.innerHeight > window.innerWidth;
            setIsPortrait(isMobile && portrait);
        };

        // Initial check
        checkOrientation();

        // Listen for resize/orientation change
        window.addEventListener('resize', checkOrientation);
        window.addEventListener('orientationchange', checkOrientation);

        return () => {
            window.removeEventListener('resize', checkOrientation);
            window.removeEventListener('orientationchange', checkOrientation);
        };
    }, []);

    if (!isPortrait) return null;

    return (
        <div className="fixed inset-0 z-[100] bg-gray-900 text-white flex flex-col items-center justify-center p-8 text-center">
            <div className="text-6xl mb-4 animate-bounce">🔄</div>
            <h2 className="text-2xl font-bold mb-4 font-serif">Please Rotate Your Phone</h2>
            <p className="text-gray-300">
                For the best experience, this website is designed to be viewed in landscape mode.
            </p>
        </div>
    );
}
