import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, MapPin, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/data';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e) => {
        e.preventDefault();
        toast.success("Thanks for reaching out! I'll be in touch soon.", {
            style: { borderRadius: '1rem', background: '#333', color: '#fff' }
        });
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section id="contact" className="py-20">
            <div className="bento-grid">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bento-item md:col-span-12 !flex-row !p-0 overflow-hidden min-h-[500px]"
                >
                    {/* Left Side - Info */}
                    <div className="hidden lg:flex flex-col justify-between p-12 bg-primary text-white w-2/5">
                        <div>
                            <h2 className="text-6xl font-black leading-none mb-6">Let's build <br /> <span className="text-luxury text-white/60">something</span> <br /> great.</h2>
                            <p className="text-white/70 max-w-xs uppercase text-xs font-bold tracking-[0.2em]">Available for new collaborations starting March 2026</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><Mail size={18} /></div>
                                <span className="font-bold">{personalInfo.email}</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center"><MapPin size={18} /></div>
                                <span className="font-bold">Mumbai, India</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Form */}
                    <div className="flex-1 p-12 flex flex-col justify-center">
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-text-secondary">Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        required
                                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-primary outline-none transition-colors font-bold text-xl"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase font-black tracking-widest text-text-secondary">Email</label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        required
                                        className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-primary outline-none transition-colors font-bold text-xl"
                                        value={formData.email}
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase font-black tracking-widest text-text-secondary">Message</label>
                                <textarea
                                    rows="1"
                                    placeholder="Project details..."
                                    required
                                    className="w-full bg-transparent border-b border-black/10 dark:border-white/10 py-4 focus:border-primary outline-none transition-colors font-bold text-xl resize-none"
                                    value={formData.message}
                                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button type="submit" className="group flex items-center gap-4 pt-8 text-2xl font-black">
                                SAY HELLO
                                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center group-hover:translate-x-4 transition-transform">
                                    <ArrowRight />
                                </div>
                            </button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
