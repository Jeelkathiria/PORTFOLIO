import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MapPin, ExternalLink, Clock } from 'lucide-react';
import { personalInfo } from '../data/data';

const Hero = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="min-h-screen pt-32 pb-20 section-padding relative overflow-hidden">
            {/* Background Decor */}
            <div className="bg-blob blob-1"></div>
            <div className="bg-blob blob-2"></div>

            <div className="max-w-7xl mx-auto bento-grid">

                {/* Profile Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bento-item group md:col-span-4"
                >
                    <div className="space-y-6">
                        <h2 className="text-4xl font-black leading-tight">
                            {personalInfo.name.split(' ')[0]} <br />
                            <span className="text-luxury text-text-secondary">{personalInfo.name.split(' ')[1]}</span>
                        </h2>
                        <div className="flex items-center gap-2 text-text-secondary text-sm">
                            <MapPin size={14} className="text-primary" />
                            Mumbai, IN • {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>

                        {/* Image Placeholder - User should put their profile.jpg in assets */}
                        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden glass-card border-none bg-zinc-100 dark:bg-zinc-900">

                            <img
                                src="/profile.jpeg"
                                alt={personalInfo.name}
                                className="w-full h-full object-cover"
                                onError={(e) => e.target.style.display = 'none'}
                            />
                        </div>

                        <div className="flex gap-4 pt-4">
                            <a href={personalInfo.github} target="_blank" className="p-3 bg-white/5 dark:bg-white/5 hover:bg-primary/20 rounded-xl transition-all">
                                <Github size={20} />
                            </a>
                            <a href={personalInfo.linkedin} target="_blank" className="p-3 bg-white/5 dark:bg-white/5 hover:bg-primary/20 rounded-xl transition-all">
                                <Linkedin size={20} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className="p-3 bg-white/5 dark:bg-white/5 hover:bg-primary/20 rounded-xl transition-all">
                                <Mail size={20} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Main Banner Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bento-item group md:col-span-8 bg-zinc-900 text-white dark:bg-white dark:text-black shadow-2xl"
                >
                    <div className="absolute top-8 right-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span> Available for work
                    </div>

                    <div className="h-full flex flex-col justify-center gap-8">
                        <div className="space-y-4">
                            <p className="text-xs uppercase font-bold tracking-[0.2em] opacity-60">Creative Engineer</p>
                            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter">
                                INTERFACES <br />
                                <span className="text-luxury font-medium text-primary">you can feel.</span>
                            </h1>
                        </div>

                        <p className="max-w-xl text-lg opacity-70 leading-relaxed">
                            {personalInfo.heroIntro}
                        </p>

                        <div className="flex gap-4 pt-4">
                            <a href="#projects" className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2">
                                View Projects <ExternalLink size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Status / Clock Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bento-item group md:col-span-5 h-[300px]"
                >
                    <h3 className="text-sm font-bold uppercase tracking-widest opacity-60 mb-6">Current Location</h3>
                    <div className="flex-1 flex flex-col items-center justify-center gap-2">
                        <div className="w-24 h-24 rounded-full border-2 border-primary/20 flex items-center justify-center relative">
                            <div className="absolute w-12 h-[2px] bg-primary origin-left rotate-[-45deg]"></div>
                            <div className="absolute w-2 h-2 bg-primary rounded-full"></div>
                        </div>
                        <p className="text-2xl font-bold mt-4">Mumbai, Maharashtra</p>
                        <p className="text-text-secondary">Based in India</p>
                    </div>
                </motion.div>

                {/* Stack / About Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="bento-item group md:col-span-7"
                >
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Full Stack Dev, <br /><span className="text-text-secondary">& Designer</span></h3>
                        <p className="text-sm text-text-secondary leading-relaxed max-w-md">
                            Focused on building scalable full-stack applications with clean architecture and impactful user experiences.
                            I sweat the details so you don't have to.
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4">
                            {['MERN', 'Next.js', 'Docker', 'AWS', 'TypeScript'].map(tech => (
                                <span key={tech} className="px-4 py-2 bg-white dark:bg-zinc-800 border border-black/5 dark:border-white/5 rounded-full text-xs font-bold">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;
