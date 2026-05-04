import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, memo } from 'react';

const Hero = memo(function Hero() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

    return (
        <section
            id="hero"
            ref={ref}
            className="relative min-h-screen overflow-hidden bg-bg-dark"
        >
            {/* Background Image with Parallax */}
            <motion.div
                style={{ y, willChange: 'transform' }}
                className="absolute inset-0 z-0 gpu-layer"
            >
                <img
                    src="/images/banner.jpg"
                    alt="AgriRoute Banner"
                    className="w-full h-full object-cover scale-110"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/85" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-black/40" />
            </motion.div>

            {/* Simplified background elements - no blur, using radial gradients */}
            <div className="absolute inset-0 z-[1] overflow-hidden">
                <div
                    className="absolute top-20 left-10 w-72 h-72 rounded-full bg-glow-primary animate-blob"
                    style={{ opacity: 0.6 }}
                />
                <div
                    className="absolute bottom-40 right-20 w-96 h-96 rounded-full bg-glow-primary animate-blob"
                    style={{ animationDelay: '3s', opacity: 0.4 }}
                />
            </div>

            {/* Content */}
            <motion.div
                style={{ opacity, scale, willChange: 'transform, opacity' }}
                className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center"
            >
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">
                    {/* Left - Text Content */}
                    <div className="text-center lg:text-left">

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] tracking-tight"
                        >
                            Produtos frescos
                            <br />
                            <span className="gradient-text">direto do campo</span>
                            <br />
                            para sua mesa.
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-6 text-lg sm:text-xl text-white/60 max-w-lg mx-auto lg:mx-0 leading-relaxed"
                        >
                            Conectamos agricultores angolanos diretamente ao consumidor.
                            Hortaliças, frutas, cereais e legumes com qualidade garantida.
                        </motion.p>

                        {/* Download Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 mt-10 justify-center lg:justify-start"
                            id="download"
                        >
                            {/* App Store - Real Apple Black */}
                            <a
                                href="#"
                                className="group flex items-center gap-3 px-6 py-3.5 bg-[#000000] text-white rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-white/10"
                            >
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider">Baixar na</div>
                                    <div className="text-base font-bold -mt-0.5">App Store</div>
                                </div>
                            </a>

                            {/* Google Play - Real Google Play Colors */}
                            <a
                                href="#"
                                className="group flex items-center gap-3 px-6 py-3.5 bg-[#000000] text-white rounded-2xl hover:bg-[#1a1a1a] transition-all duration-300 hover:-translate-y-1 active:scale-95 border border-white/10"
                            >
                                <svg className="w-7 h-7" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z" fill="#EA4335" />
                                    <path d="M47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z" fill="#4285F4" />
                                    <path d="M472.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8z" fill="#FBBC04" />
                                    <path d="M104.6 499l280.8-161.2-60.1-60.1L104.6 499z" fill="#34A853" />
                                </svg>
                                <div className="text-left">
                                    <div className="text-[10px] font-medium text-white/60 uppercase tracking-wider">Disponível no</div>
                                    <div className="text-base font-bold -mt-0.5">Google Play</div>
                                </div>
                            </a>
                        </motion.div>

                        {/* Trust Badges */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="flex items-center gap-6 mt-10 justify-center lg:justify-start"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-2">
                                    {[1, 2].map((i) => (
                                        <div
                                            key={i}
                                            className="w-8 h-8 rounded-full border-2 border-white/20 overflow-hidden"
                                        >
                                            <img
                                                src={`/images/profile-${i}.png`}
                                                alt=""
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                                onError={(e) => {
                                                    (e.target as HTMLImageElement).style.display = 'none';
                                                }}
                                            />
                                        </div>
                                    ))}
                                    <div className="w-8 h-8 rounded-full border-2 border-white/20 bg-primary flex items-center justify-center text-white text-xs font-bold">
                                        +
                                    </div>
                                </div>
                                <span className="text-white/50 text-sm">
                                    <span className="text-white font-semibold">500+</span> utilizadores activos
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right - Phone Mockups */}
                    <div className="relative flex justify-center lg:justify-end">
                        {/* Primary Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 80 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                            className="relative z-20 animate-float gpu-layer"
                        >
                            <div className="relative">
                                <img
                                    src="/images/mockup-home.png"
                                    alt="AgriRoute App Home"
                                    className="w-[320px] sm:w-[370px] phone-shadow"
                                    loading="eager"
                                />
                                {/* Glow behind phone - no blur, using radial gradient */}
                                <div className="absolute -inset-4 bg-glow-primary rounded-[3rem] -z-10" />
                            </div>
                        </motion.div>

                        {/* Secondary Phone */}
                        <motion.div
                            initial={{ opacity: 0, y: 100, x: -40 }}
                            animate={{ opacity: 1, y: 40, x: -80 }}
                            transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute z-10 hidden lg:block animate-float-delayed gpu-layer"
                        >
                            <img
                                src="/images/mockup-history.png"
                                alt="AgriRoute App History"
                                className="w-[280px] phone-shadow opacity-80"
                                loading="lazy"
                            />
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Bottom gradient fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#060A08] to-transparent z-20" />

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 2 }}
                    className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
                >
                    <motion.div
                        animate={{ y: [0, 12, 0] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        className="w-1.5 h-1.5 rounded-full bg-white/60"
                    />
                </motion.div>
            </motion.div>
        </section>
    );
});

export default Hero;
