import { motion } from 'framer-motion';

export default function Hero() {
    return (
        <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Parallax effect via bg-fixed */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed w-full h-full"
                style={{ backgroundImage: "url('/images/agri0.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-green-700 bg-white/90 rounded-full shadow-sm"
                >
                    AGRICARGAS
                </motion.span>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6"
                >
                    Desenvolvendo a Agricultura Nacional
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto font-light"
                >
                    Otimizamos o escoamento de produtos agrícolas conectando inovação, transporte e os nossos produtores em toda a nação.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <a
                        href="#sobre"
                        className="inline-flex items-center justify-center px-8 py-4 bg-white text-green-700 font-semibold rounded-full hover:bg-green-50 transition-colors duration-300 shadow-md group"
                    >
                        Saber Mais
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </a>
                </motion.div>
            </div>

            {/* Decorative Bottom Wave/Curve (optional) to transition from Hero to white section seamlessly */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 sm:h-24 fill-white">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V120H0Z"></path>
                </svg>
            </div>
        </section>
    );
}
