import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import { education, experience } from '../data/data';

const Experience = () => {
    return (
        <section id="experience" className="section-padding">
            <div className="max-w-6xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-white mb-4">Experience & <span className="text-primary">Education</span></h2>
                    <p className="text-slate-500 max-w-2xl mx-auto">
                        My professional journey and academic foundation in Information Technology.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Experience Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Briefcase className="text-primary" /> Work Experience
                        </h3>
                        <div className="relative border-l border-slate-800 ml-4 space-y-12">
                            {experience.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                                        <Calendar size={14} /> {exp.duration}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-1">{exp.role}</h4>
                                    <p className="text-slate-400 font-medium mb-4">{exp.company}</p>
                                    <ul className="space-y-2">
                                        {exp.points.map((point, i) => (
                                            <li key={i} className="text-sm text-slate-500 leading-relaxed">• {point}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <GraduationCap className="text-primary" /> Academic Profile
                        </h3>
                        <div className="relative border-l border-slate-800 ml-4 space-y-12">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative pl-8"
                                >
                                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                                    <div className="flex items-center gap-2 text-primary font-medium text-sm mb-2">
                                        <Calendar size={14} /> {edu.duration}
                                    </div>
                                    <h4 className="text-xl font-bold text-white mb-1">{edu.degree}</h4>
                                    <p className="text-slate-400 font-medium mb-2">{edu.institution}</p>
                                    <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-xs text-primary font-bold">
                                        {edu.score}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
