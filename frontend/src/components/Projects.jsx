import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/data';

const Projects = () => {
    return (
        <section id="projects" className="py-20">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 px-2 gap-4">
                <div>
                    <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary mb-2 block">Portfolio Showcase</span>
                    <h2 className="text-4xl md:text-5xl font-black">Featured <span className="text-luxury">Projects</span></h2>
                </div>
                <p className="text-text-secondary max-w-md text-sm font-medium leading-relaxed">
                    Key full-stack applications featuring AI document parsing, OCR pipelines, real-time analytics, and automated cloud workflows.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                {projects.map((project, index) => {
                    const isFirst = index === 0;
                    return (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`bento-item group flex flex-col justify-between p-6 md:p-8 border border-black/5 dark:border-white/10 rounded-3xl bg-white/50 dark:bg-zinc-900/50 backdrop-blur-xl ${
                                isFirst ? 'md:col-span-12 lg:col-span-8' : 'md:col-span-12 lg:col-span-4'
                            }`}
                        >
                            <div>
                                {/* Project Image Container */}
                                {project.image && (
                                    <div className="relative w-full aspect-[16/9] mb-6 overflow-hidden rounded-2xl border border-black/10 dark:border-white/10 shadow-lg group-hover:shadow-2xl transition-all">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Card Header */}
                                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                    <div className="flex flex-wrap gap-2">
                                        {project.techStack.map(tech => (
                                            <span key={tech} className="text-[10px] font-black uppercase tracking-wider px-3 py-1 bg-primary/10 text-primary border border-primary/20 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                    <div className="flex gap-2">
                                        {project.github && (
                                            <a 
                                                href={project.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                aria-label="GitHub Repository"
                                                className="p-3 bg-black/5 dark:bg-white/10 hover:bg-primary hover:text-white rounded-full transition-all"
                                            >
                                                <Github size={18} />
                                            </a>
                                        )}
                                        {project.live && project.live !== "#" && (
                                            <a 
                                                href={project.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                aria-label="Live Demo"
                                                className="p-3 bg-primary text-white hover:scale-110 rounded-full transition-transform shadow-lg shadow-primary/25"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                <span className="text-xs uppercase font-bold text-text-secondary tracking-widest block mb-1">{project.category}</span>
                                <h3 className="text-3xl font-black mb-3 group-hover:text-primary transition-colors flex items-center gap-2">
                                    {project.title}
                                </h3>

                                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>

                                {/* Features List */}
                                {project.features && project.features.length > 0 && (
                                    <div className="space-y-2 mb-6 pt-4 border-t border-black/5 dark:border-white/5">
                                        <h4 className="text-xs font-bold uppercase tracking-wider text-text-secondary mb-3">Key Highlights:</h4>
                                        <div className="grid grid-cols-1 gap-2">
                                            {project.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-2.5 text-xs text-text-secondary">
                                                    <CheckCircle2 size={14} className="text-primary shrink-0 mt-0.5" />
                                                    <span className="leading-snug">{feature}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Card Footer Actions */}
                            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-wrap justify-between items-center gap-4">
                                <div className="flex gap-4">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center gap-2 text-text-secondary hover:text-primary transition-colors">
                                            <Github size={14} /> Repository
                                        </a>
                                    )}
                                    {project.live && project.live !== "#" && (
                                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-xs font-bold flex items-center gap-2 text-primary hover:underline transition-all">
                                            <ExternalLink size={14} /> Live Demo
                                        </a>
                                    )}
                                </div>

                                <div className="text-[10px] font-black uppercase tracking-widest opacity-40">
                                    {isFirst ? "Featured Architecture" : "Production Ready"}
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Projects;
