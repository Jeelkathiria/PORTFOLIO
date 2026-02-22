import React, { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 2000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return (
            <div className="h-screen w-full bg-white dark:bg-black flex flex-col items-center justify-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-6xl font-black tracking-tighter"
                >
                    JK<span className="text-primary italic">.</span>
                </motion.div>
                <div className="mt-8 text-sm font-bold tracking-[0.3em] uppercase opacity-40">Loading Excellence</div>
            </div>
        );
    }

    return (
        <div className="bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-primary selection:text-white">
            {/* Scroll Progress Indicator */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-[2px] bg-primary z-[60] origin-left"
                style={{ scaleX }}
            />

            <Navbar />
            <main className="space-y-4">
                <Hero />
                {/* We can hide other sections until they are redesigned for the bento layout if needed, 
            but for now they will inherit the theme variables. */}
                <section className="max-w-7xl mx-auto px-6 space-y-4 pb-32">
                    <About />
                    <Skills />
                    <Projects />
                    <Experience />
                    <Contact />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default Home;
