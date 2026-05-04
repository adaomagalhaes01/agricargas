import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, memo } from 'react';

const DownloadCTA = memo(function DownloadCTA() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

    return (
        <section id="contact" ref={ref} className="relative py-24 lg:py-32 bg-bg-dark overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-glow-primary" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-glow-emerald" />
                <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-glow-primary" />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `linear-gradient(rgba(34,197,94,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.3) 1px, transparent 1px)`,
                backgroundSize: '60px 60px',
            }} />

            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left - Content */}
                    <div className="text-center lg:text-left">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-white/80 text-sm font-semibold mb-8"
                        >
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                            Gratuito para sempre
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-tight"
                        >
                            Baixe agora e
                            <br />
                            <span className="gradient-text">comece a comprar</span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="mt-6 text-lg text-white/40 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Disponível gratuitamente para iOS e Android. Junte-se a centenas
                            de angolanos que já compram produtos frescos pelo AgriRoute.
                        </motion.p>

                        {/* Download Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
                        >
                            {/* App Store - Real Apple Black */}
                            <a
                                href="#"
                                className="group flex items-center gap-3 px-7 py-4 bg-[#000000] text-white rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-white/10"
                            >
                                <svg className="w-9 h-9" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider">Baixar na</div>
                                    <div className="text-lg font-bold -mt-0.5">App Store</div>
                                </div>
                            </a>

                            {/* Google Play - Real Colors */}
                            <a
                                href="#"
                                className="group flex items-center gap-3 px-7 py-4 bg-[#000000] text-white rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-white/10"
                            >
                                <svg className="w-8 h-8" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#EA4335" />
                                    <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" fill="#4285F4" />
                                    <path d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" fill="#FBBC04" />
                                    <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#34A853" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider">Disponível no</div>
                                    <div className="text-lg font-bold -mt-0.5">Google Play</div>
                                </div>
                            </a>
                        </motion.div>

                        {/* QR Code hint */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-8 text-white/30 text-sm flex items-center gap-2 justify-center lg:justify-start"
                        >
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            Compatível com Android 8+ e iOS 14+
                        </motion.p>
                    </div>

                    {/* Right - Phone */}
                    <motion.div
                        style={{ y, willChange: 'transform' }}
                        className="flex justify-center lg:justify-end"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 60, rotate: -8 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -4 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="relative"
                        >
                            <img
                                src="/images/mockup-home-2.png"
                                alt="AgriRoute App"
                                className="w-[280px] sm:w-[320px] lg:w-[340px] phone-shadow"
                            />
                            <div className="absolute -inset-8 bg-glow-primary rounded-[3rem] -z-10 animate-pulse-glow" />

                            {/* Floating notification */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0, y: 20 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 1, duration: 0.6, type: 'spring' }}
                                className="absolute -left-8 sm:-left-16 top-1/3 glass-dark px-5 py-4 rounded-2xl"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div>
                                        <p className="text-white text-sm font-semibold">Encomenda Entregue!</p>
                                        <p className="text-white/40 text-xs">Há 2 minutos</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
});

export default DownloadCTA;
