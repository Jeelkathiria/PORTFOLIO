import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/data';

const Skills = () => {
    return (
        <section id="skills" className="py-10">
            <div className="bento-grid">
                {skills.map((skillGroup, index) => (
                    <motion.div
                        key={skillGroup.category}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`bento-item ${index % 3 === 0 ? 'md:col-span-6' : 'md:col-span-3'}`}
                    >
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">{skillGroup.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skillGroup.items.map(skill => (
                                    <span key={skill} className="text-xl font-bold">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 h-1 bg-black/5 dark:bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: '100%' }}
                                transition={{ duration: 1, delay: 0.5 }}
                                className="h-full bg-primary/20"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
