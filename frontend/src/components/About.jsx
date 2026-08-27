import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';
import { Award, BookOpen, Code, Sparkles } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-item md:col-span-12 lg:col-span-8 p-8 md:p-12 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl"
                >
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-3 block">Background & Passion</span>
                    <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
                        Engineering <span className="text-luxury">scalable platforms</span> with clean architecture.
                    </h2>
                    <div className="space-y-6 text-base md:text-lg text-text-secondary leading-relaxed">
                        {personalInfo.bio.map((para, i) => (
                            <p key={i}>{para}</p>
                        ))}
                    </div>
                </motion.div>

                {/* Quick Stats Grid */}
                <div className="md:col-span-12 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl flex items-center gap-4"
                    >
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                            <BookOpen size={24} />
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary block">Education</span>
                            <h3 className="text-2xl font-black text-primary">9.24 CGPA</h3>
                            <p className="text-xs text-text-secondary font-semibold">B.Tech IT @ KJSCE</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 }}
                        className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl flex items-center gap-4"
                    >
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                            <Award size={24} />
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary block">Hackathon</span>
                            <h3 className="text-2xl font-black text-primary">3rd Rank</h3>
                            <p className="text-xs text-text-secondary font-semibold">KJSCE GDG Hackathon</p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="p-6 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl flex items-center gap-4"
                    >
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary">
                            <Code size={24} />
                        </div>
                        <div>
                            <span className="text-[10px] font-black uppercase tracking-widest text-text-secondary block">Problem Solving</span>
                            <h3 className="text-2xl font-black text-primary">100+ Solved</h3>
                            <p className="text-xs text-text-secondary font-semibold">DSA Problems on LeetCode</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
