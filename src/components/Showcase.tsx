import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, memo } from 'react';

const Showcase = memo(function Showcase() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [80, -80]);
    const y2 = useTransform(scrollYProgress, [0, 1], [120, -40]);
    const yCenter = useTransform(scrollYProgress, [0, 1], [40, -60]);
    const rotateL = useTransform(scrollYProgress, [0, 0.5, 1], [6, 0, -3]);
    const rotateR = useTransform(scrollYProgress, [0, 0.5, 1], [-6, 0, 3]);
    const scale = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0.85, 1, 1, 0.92]);

    return (
        <section
            id="showcase"
            ref={sectionRef}
            className="relative py-32 lg:py-48 bg-bg-dark overflow-hidden noise-overlay"
        >
            {/* Background - radial gradients instead of blur */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-glow-primary" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-glow-emerald" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-semibold mb-6"
                    >
                        <span className="w-2 h-2 rounded-full bg-primary" />
                        Interface Premium
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-6xl font-bold text-white tracking-tight leading-tight"
                    >
                        Design bonito com
                        <br />
                        <span className="gradient-text">interface moderna</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-6 text-lg text-white/40 max-w-xl mx-auto"
                    >
                        Uma experiência de utilizador cuidadosamente desenhada para tornar
                        a compra de produtos agrícolas intuitiva e agradável.
                    </motion.p>
                </div>

                {/* Phone Mockups with Parallax */}
                <motion.div
                    style={{ scale, willChange: 'transform' }}
                    className="relative flex items-center justify-center gap-6 sm:gap-8 lg:gap-16"
                >
                    {/* Left Phone */}
                    <motion.div
                        style={{ y: y1, rotate: rotateL, willChange: 'transform' }}
                        className="hidden sm:block gpu-layer"
                    >
                        <div className="relative">
                            <img
                                src="/images/mockup-history-2.png"
                                alt="AgriRoute - Histórico de Compra"
                                className="w-[200px] sm:w-[240px] lg:w-[300px] phone-shadow"
                                loading="lazy"
                            />
                            <div className="absolute -inset-6 bg-glow-primary rounded-[3rem] -z-10" />
                        </div>
                    </motion.div>

                    {/* Center Phone - Hero */}
                    <motion.div
                        style={{ y: yCenter, willChange: 'transform' }}
                        className="relative z-20 gpu-layer"
                    >
                        <div className="relative">
                            <img
                                src="/images/mockup-home.png"
                                alt="AgriRoute - Ecrã Principal"
                                className="w-[260px] sm:w-[300px] lg:w-[360px] phone-shadow"
                                loading="lazy"
                            />
                            <div className="absolute -inset-8 bg-glow-primary rounded-[3rem] -z-10 animate-pulse-glow" />

                            {/* Floating UI Elements */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: 40 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.6, duration: 0.5, type: 'spring' }}
                                className="absolute -right-6 sm:-right-12 top-1/4 glass-dark px-4 py-3 rounded-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                                        <span className="text-xl">🍅</span>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold">Tomates</p>
                                        <p className="text-primary text-sm font-bold">10.000 Kzs</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0, x: -40 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.8, duration: 0.5, type: 'spring' }}
                                className="absolute -left-6 sm:-left-16 bottom-1/3 glass-dark px-4 py-3 rounded-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-xs font-semibold">Entregue</p>
                                        <p className="text-white/50 text-[11px]">22/02/2026</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Right Phone */}
                    <motion.div
                        style={{ y: y2, rotate: rotateR, willChange: 'transform' }}
                        className="hidden sm:block gpu-layer"
                    >
                        <div className="relative">
                            <img
                                src="/images/mockup-home-2.png"
                                alt="AgriRoute - Categorias"
                                className="w-[200px] sm:w-[240px] lg:w-[300px] phone-shadow"
                                loading="lazy"
                            />
                            <div className="absolute -inset-6 bg-glow-emerald rounded-[3rem] -z-10" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
});

export default Showcase;
