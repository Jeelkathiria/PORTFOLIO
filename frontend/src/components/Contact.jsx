import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Mail, Github, Linkedin, MapPin, Sparkles, RefreshCw, Send } from 'lucide-react';
import { personalInfo } from '../data/data';

const developerQuotes = [
    {
        quote: "First, solve the problem. Then, write the code.",
        author: "John Johnson",
        role: "Software Developer & Author"
    },
    {
        quote: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
        author: "Martin Fowler",
        role: "Chief Scientist & Author"
    },
    {
        quote: "Simplicity is prerequisite for reliability.",
        author: "Edsger W. Dijkstra",
        role: "Turing Award Winner"
    },
    {
        quote: "Make it work, make it right, make it fast.",
        author: "Kent Beck",
        role: "Creator of Extreme Programming"
    },
    {
        quote: "The best way to predict the future is to invent it.",
        author: "Alan Kay",
        role: "Computer Scientist"
    }
];

const Contact = () => {
    const [quoteIndex, setQuoteIndex] = useState(0);

    const handleNextQuote = () => {
        setQuoteIndex((prev) => (prev + 1) % developerQuotes.length);
    };

    const currentQuote = developerQuotes[quoteIndex];

    return (
        <section id="contact" className="py-16">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-[2.5rem] border border-black/10 dark:border-white/10 bg-gradient-to-br from-zinc-900 via-black to-zinc-950 text-white p-8 md:p-16 shadow-2xl"
            >
                {/* Background Decorative Accents */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-600/10 rounded-full blur-[90px] pointer-events-none"></div>

                <div className="relative z-10 flex flex-col lg:flex-row justify-between items-stretch gap-12">
                    
                    {/* Left Column: Software Developer Quote */}
                    <div className="flex-1 flex flex-col justify-between space-y-8">
                        <div>
                            <div className="flex items-center justify-between mb-6">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-bold uppercase tracking-widest text-primary-light">
                                    <Sparkles size={14} className="text-primary" /> Philosophy of Code
                                </div>
                                <button
                                    onClick={handleNextQuote}
                                    className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/60 hover:text-white bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-all"
                                    title="Cycle Quote"
                                >
                                    <RefreshCw size={12} className="animate-spin-hover" /> Next Quote
                                </button>
                            </div>

                            <div className="relative pl-6 md:pl-8 border-l-4 border-primary">
                                <Quote size={40} className="text-primary/40 absolute -top-4 -left-3 md:-left-4 pointer-events-none" />
                                
                                <AnimatePresence mode="wait">
                                    <motion.div
                                        key={quoteIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <p className="text-2xl md:text-3xl lg:text-4xl font-extrabold italic leading-snug tracking-tight text-zinc-100">
                                            "{currentQuote.quote}"
                                        </p>
                                        <div>
                                            <span className="text-lg font-bold text-primary block">— {currentQuote.author}</span>
                                            <span className="text-xs text-zinc-400 font-medium uppercase tracking-wider">{currentQuote.role}</span>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-sm text-zinc-400">
                            <div className="flex items-center gap-2">
                                <MapPin size={16} className="text-primary" />
                                <span className="font-semibold text-zinc-300">Mumbai, Maharashtra, India</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                <span className="font-medium text-emerald-400">Available for Opportunities</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Quick Reach & Social Connect */}
                    <div className="lg:w-5/12 flex flex-col justify-between p-8 md:p-10 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl space-y-8">
                        <div>
                            <span className="text-xs uppercase font-black tracking-[0.25em] text-primary mb-2 block">Get In Touch</span>
                            <h3 className="text-3xl font-black text-white mb-4">Let's Connect & Build</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                                Have an exciting project, full-stack opportunity, or technical discussion in mind? Feel free to reach out directly.
                            </p>

                            <a
                                href={`mailto:${personalInfo.email}`}
                                className="w-full py-4 px-6 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-base flex items-center justify-center gap-3 transition-all transform hover:-translate-y-0.5 shadow-lg shadow-primary/30"
                            >
                                <Mail size={20} />
                                <span>{personalInfo.email}</span>
                            </a>
                        </div>

                        <div className="space-y-4 pt-6 border-t border-white/10">
                            <span className="text-xs uppercase font-bold tracking-widest text-zinc-400 block">Social Networks</span>
                            <div className="flex gap-4">
                                <a
                                    href={personalInfo.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white transition-all"
                                >
                                    <Github size={18} /> GitHub
                                </a>
                                <a
                                    href={personalInfo.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 text-sm font-bold text-white transition-all"
                                >
                                    <Linkedin size={18} /> LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </motion.div>
        </section>
    );
};

export default Contact;
