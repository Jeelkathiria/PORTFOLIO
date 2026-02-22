import React from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { personalInfo } from '../data/data';

const Navbar = () => {
    const { isDarkMode, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = React.useState(false);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Work', href: '#projects' },
        { name: 'Experience', href: '#experience' },
    ];

    return (
        <nav className="fixed top-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
            <div className="glass-card px-6 py-4 flex justify-between items-center rounded-full">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-2xl font-black tracking-tighter"
                >
                    JK<span className="text-primary italic">.</span>
                </motion.div>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 bg-white/5 dark:bg-white/5 px-6 py-2 rounded-full border border-black/5 dark:border-white/5">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <a
                        href={personalInfo.resumeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:flex items-center gap-2 text-sm font-bold bg-primary/10 text-primary px-4 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
                    >
                        Resume
                    </a>
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                    >
                        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                    </button>

                    <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="md:hidden glass-card mt-4 p-6 rounded-[2rem]"
                >
                    <div className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl font-bold"
                            >
                                {link.name}
                            </a>
                        ))}
                        <a
                            href={personalInfo.resumeLink}
                            target="_blank"
                            className="text-xl font-bold text-primary"
                        >
                            Download Resume
                        </a>
                        <a href="#contact" className="text-xl font-bold">Contact</a>
                    </div>
                </motion.div>
            )}
        </nav>
    );
};

export default Navbar;
