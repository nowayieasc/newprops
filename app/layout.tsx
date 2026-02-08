import './globals.css';
import type { Metadata } from 'next';
import { Outfit, Playfair_Display } from 'next/font/google';

const outfit = Outfit({
    subsets: ['latin'],
    variable: '--font-outfit',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    variable: '--font-playfair',
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'For Muna ❤️',
    description: 'A special question for a special person.',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className={`${outfit.variable} ${playfair.variable}`}>
            <body className={outfit.className}>{children}</body>
        </html>
    );
}
