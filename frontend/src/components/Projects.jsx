import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/data';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="flex justify-between items-end mb-12 px-2">
                <h2 className="text-5xl font-black">Featured <span className="text-luxury">Work</span></h2>
                <p className="text-text-secondary max-w-xs text-sm font-medium">
                    A curation of my best full-stack applications and technical experiments.
                </p>
            </div>

            <div className="bento-grid">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className={`bento-item group h-[600px] ${index === 0 ? 'md:col-span-8' : 'md:col-span-4'}`}
                    >
                        <div className="flex justify-between items-start">
                            <div className="space-y-4">
                                <div className="flex gap-2">
                                    {project.techStack.slice(0, 3).map(tech => (
                                        <span key={tech} className="text-[10px] uppercase font-black tracking-widest px-2 py-1 bg-primary/10 text-primary rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <h3 className="text-4xl font-black">{project.title}</h3>
                            </div>
                            <a href={project.github} target="_blank" className="p-4 bg-black dark:bg-white text-white dark:text-black rounded-full hover:scale-110 transition-transform">
                                <ArrowUpRight size={24} />
                            </a>
                        </div>

                        <div className="relative flex-1 mt-8 group-hover:scale-[1.02] transition-transform duration-500 overflow-hidden rounded-3xl">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="hidden w-full h-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center">
                                <div className="text-6xl font-black opacity-5 select-none">{project.title}</div>
                            </div>
                        </div>

                        <div className="mt-8">
                            <p className="text-text-secondary line-clamp-2 mb-6">
                                {project.description}
                            </p>
                            <div className="flex gap-4">
                                {project.github && (
                                    <a href={project.github} target="_blank" className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                                        <Github size={16} /> Repository
                                    </a>
                                )}
                                {project.live !== "#" && (
                                    <a href={project.live} className="text-sm font-bold flex items-center gap-2 hover:text-primary transition-colors">
                                        <ExternalLink size={16} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
