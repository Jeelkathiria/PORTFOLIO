import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';
import { Code, Database, Wrench, Cpu, Terminal } from 'lucide-react';

const categoryIcons = {
    "Languages": <Terminal size={18} className="text-primary" />,
    "Frameworks & Libraries": <Code size={18} className="text-primary" />,
    "Databases & Cloud": <Database size={18} className="text-primary" />,
    "Tools & Platforms": <Wrench size={18} className="text-primary" />,
    "Core Computer Science": <Cpu size={18} className="text-primary" />
};

const Skills = () => {
    return (
        <section id="skills" className="py-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 px-2 gap-4">
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2 block">Technical Toolkit</span>
                    <h2 className="text-4xl md:text-5xl font-black">Skills <span className="text-luxury">& Expertise</span></h2>
                </div>
                <p className="text-text-secondary max-w-md text-sm font-medium leading-relaxed">
                    Technologies, frameworks, databases, and core computer science concepts I work with regularly.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                {skills.map((skillGroup, index) => {
                    const isWide = index === 0 || index === 1;
                    return (
                        <motion.div
                            key={skillGroup.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`bento-item p-8 rounded-3xl border border-black/5 dark:border-white/10 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl ${
                                isWide ? 'md:col-span-6' : 'md:col-span-4'
                            }`}
                        >
                            <div className="flex items-center gap-3 mb-6">
                                {categoryIcons[skillGroup.category] || <Code size={18} className="text-primary" />}
                                <h3 className="text-xs font-black uppercase tracking-[0.2em] text-text-secondary">
                                    {skillGroup.category}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2.5">
                                {skillGroup.items.map(skill => (
                                    <span 
                                        key={skill} 
                                        className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-xl text-sm font-bold hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white transition-all transform hover:-translate-y-0.5 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
