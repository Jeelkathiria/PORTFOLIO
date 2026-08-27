import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar, Trophy, Code2 } from 'lucide-react';
import { education, experience, achievements } from '../data/data';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-2">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2 block">Track Record</span>
                <h2 className="text-4xl md:text-5xl font-black mb-4">Journey <span className="text-luxury">& Achievements</span></h2>
                <p className="text-text-secondary max-w-2xl text-base md:text-lg">
                    My professional experience, academic background, and competitive coding milestones.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {/* Work Experience Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bento-item md:col-span-12 lg:col-span-7 p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl"
                >
                    <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                        <Briefcase className="text-primary" /> Work Experience
                    </h3>
                    <div className="space-y-10">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-primary/30">
                                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/20"></div>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                                    <Calendar size={14} /> {exp.duration}
                                </div>
                                <h4 className="text-2xl font-black mb-1">{exp.role}</h4>
                                <p className="text-text-secondary font-semibold text-sm mb-4">
                                    {exp.company} {exp.location && `• ${exp.location}`}
                                </p>
                                <ul className="space-y-3">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-sm text-text-secondary leading-relaxed flex gap-3">
                                            <span className="text-primary font-bold">•</span>
                                            <span>{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Right Side: Education & Achievements */}
                <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
                    {/* Academic Profile */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bento-item p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl"
                    >
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <GraduationCap className="text-primary" /> Academic Profile
                        </h3>
                        <div className="space-y-6">
                            {education.map((edu, index) => (
                                <div key={index} className="relative pl-6 border-l-2 border-primary/30">
                                    <div className="absolute left-[-7px] top-1.5 w-3 h-3 rounded-full bg-primary"></div>
                                    <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-1">
                                        <Calendar size={12} /> {edu.duration}
                                    </div>
                                    <h4 className="text-xl font-black mb-1">{edu.degree}</h4>
                                    <p className="text-text-secondary font-medium text-xs mb-3">{edu.institution}</p>
                                    <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-black uppercase tracking-wider">
                                        {edu.score}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Key Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bento-item p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl"
                    >
                        <h3 className="text-2xl font-black mb-6 flex items-center gap-3">
                            <Trophy className="text-primary" /> Achievements & Honors
                        </h3>
                        <div className="space-y-4">
                            {achievements.map((ach, index) => (
                                <div key={index} className="p-4 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                                    <div className="flex items-center justify-between gap-2 mb-2">
                                        <h4 className="font-bold text-base flex items-center gap-2">
                                            {index === 0 ? <Trophy size={16} className="text-yellow-500" /> : <Code2 size={16} className="text-primary" />}
                                            {ach.title}
                                        </h4>
                                        <span className="text-[10px] font-black uppercase tracking-wider px-2 py-0.5 bg-primary/10 text-primary rounded">
                                            {ach.badge}
                                        </span>
                                    </div>
                                    <p className="text-xs text-text-secondary leading-relaxed">
                                        {ach.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
