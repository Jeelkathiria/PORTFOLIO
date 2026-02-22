import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="py-12 border-t border-[var(--border)] bg-[var(--bg-primary)]">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
                <div className="flex flex-col items-center md:items-start">
                    <a href="#" className="text-2xl font-black tracking-tighter text-[var(--text-primary)]">
                        JK<span className="text-primary italic">.</span>
                    </a>
                    <p className="text-text-secondary text-xs font-bold uppercase tracking-widest mt-4">
                        © {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <div className="flex items-center gap-2 text-sm font-bold text-[var(--text-secondary)]">
                        Made with <Heart size={14} className="text-accent fill-accent animate-pulse" /> by <span className="text-[var(--text-primary)]">Jeel Kathiria</span>
                    </div>
                    <div className="text-[var(--text-secondary)] text-[10px] uppercase font-black tracking-[0.2em]">
                        Crafting Digital Excellence
                    </div>
                </div>

                <div className="flex flex-col items-center md:items-end gap-2">
                    <div className="text-[var(--text-secondary)] text-sm font-medium">
                        Built with <span className="text-primary font-bold">React</span> & <span className="text-primary font-bold">Tailwind</span>
                    </div>
                    <div className="flex gap-6 text-[10px] uppercase font-black tracking-widest text-[var(--text-secondary)]">
                        <a href="#about" className="hover:text-primary transition-colors">About</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Work</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
