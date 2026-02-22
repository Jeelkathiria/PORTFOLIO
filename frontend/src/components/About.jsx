import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/data';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="bento-grid">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="bento-item md:col-span-12"
                >
                    <div className="max-w-4xl">
                        <h2 className="text-4xl md:text-5xl font-black mb-8">
                            Building <span className="text-luxury">impactful</span> solutions <br /> Through code & logic.
                        </h2>
                        <div className="space-y-6 text-lg text-text-secondary leading-relaxed">
                            {personalInfo.bio.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
