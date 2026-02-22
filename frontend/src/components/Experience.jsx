import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { education, experience } from '../data/data';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-2">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-16"
            >
                <h2 className="text-5xl font-black mb-4">Journey <span className="text-luxury">& Milestones</span></h2>
                <p className="text-[var(--text-secondary)] max-w-2xl text-lg">
                    My professional journey and academic foundation in Information Technology.
                </p>
            </motion.div>

            <div className="bento-grid">
                {/* Experience Card */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bento-item md:col-span-6"
                >
                    <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                        <Briefcase className="text-primary" /> Work Experience
                    </h3>
                    <div className="space-y-12">
                        {experience.map((exp, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-[var(--border)]">
                                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10"></div>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                                    <Calendar size={14} /> {exp.duration}
                                </div>
                                <h4 className="text-2xl font-black mb-1">{exp.role}</h4>
                                <p className="text-[var(--text-secondary)] font-medium mb-4">{exp.company}</p>
                                <ul className="space-y-3">
                                    {exp.points.map((point, i) => (
                                        <li key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed flex gap-2">
                                            <span className="text-primary">•</span> {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Education Card */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bento-item md:col-span-6"
                >
                    <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                        <GraduationCap className="text-primary" /> Academic Profile
                    </h3>
                    <div className="space-y-12">
                        {education.map((edu, index) => (
                            <div key={index} className="relative pl-8 border-l-2 border-[var(--border)]">
                                <div className="absolute left-[-9px] top-1.5 w-4 h-4 rounded-full bg-primary ring-4 ring-primary/10"></div>
                                <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                                    <Calendar size={14} /> {edu.duration}
                                </div>
                                <h4 className="text-2xl font-black mb-1">{edu.degree}</h4>
                                <p className="text-[var(--text-secondary)] font-medium mb-4">{edu.institution}</p>
                                <div className="inline-block px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-black uppercase tracking-widest">
                                    {edu.score}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience;
