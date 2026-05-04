import { motion } from 'framer-motion';
import { Route, Navigation, Clock } from 'lucide-react';

export default function AgriRoute() {
    return (
        <section className="py-24 bg-green-50/50 relative overflow-hidden flex items-center">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-green-600/5 rounded-l-full blur-3xl -z-10 transform translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-green-400/5 rounded-tr-full blur-2xl -z-10 transform -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3 flex items-center gap-2">
                            <Route className="w-5 h-5" />
                            Inovação Tecnológica
                        </h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                            Conheça o <span className="text-green-700">AgriRoute</span>
                        </h2>
                        <p className="text-lg text-gray-600 font-light mb-8 leading-relaxed">
                            A nossa solução tecnológica desenhada para revolucionar o escoamento agrícola. Acompanhe, otimize e faça a gestão completa das suas rotas de entrega na palma da sua mão.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 bg-white p-2 rounded-lg shadow-sm">
                                    <Navigation className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-800">Rastreamento em Tempo Real</h4>
                                    <p className="mt-1 text-gray-600 font-light">Monitorize as suas mercadorias desde a origem até ao destino com máxima precisão e segurança.</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0 mt-1 bg-white p-2 rounded-lg shadow-sm">
                                    <Clock className="w-6 h-6 text-green-600" />
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold text-gray-800">Histórico e Gestão de Tempo</h4>
                                    <p className="mt-1 text-gray-600 font-light">Tenha total visibilidade do histórico de rotas e otimize os tempos de viagem para evitar o desperdício.</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-10">
                            <button className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-full transition-colors shadow-lg shadow-green-600/30">
                                Saber Mais
                            </button>
                        </div>
                    </motion.div>

                    {/* Mockups */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] flex justify-center items-center"
                    >
                        {/* Back Mockup (History) */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
                            className="absolute left-[10%] md:left-[5%] top-[15%] w-56 md:w-64 z-10 filter drop-shadow-2xl"
                        >
                            <img
                                src="/images/mockup-history.png"
                                alt="AgriRoute Histórico"
                                className="w-full h-auto rounded-[2rem]"
                            />
                        </motion.div>

                        {/* Front Mockup (Home) */}
                        <motion.div
                            animate={{ y: [0, 15, 0] }}
                            transition={{ repeat: Infinity, duration: 7, ease: "easeInOut", delay: 1 }}
                            className="absolute right-[5%] md:right-0 bottom-[10%] w-60 md:w-72 z-20 filter drop-shadow-2xl"
                        >
                            <img
                                src="/images/mockup-home.png"
                                alt="AgriRoute Home"
                                className="w-full h-auto rounded-[2.2rem]"
                            />
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
