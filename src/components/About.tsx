import { motion } from 'framer-motion';

export default function About() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Images Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="relative h-[600px] flex justify-center items-center"
                    >
                        {/* Soft decorative background block */}
                        <div className="absolute w-[80%] h-[80%] bg-green-50 rounded-3xl -z-10 -ml-16 mt-16"></div>

                        {/* Primary Image */}
                        <div className="absolute right-0 top-0 w-3/4 h-[70%] z-10 rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/agri05.jpg"
                                alt="Agricultura local"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                            />
                        </div>

                        {/* Secondary Image */}
                        <div className="absolute left-0 bottom-0 w-2/3 h-1/2 z-20 rounded-2xl overflow-hidden shadow-xl border-8 border-white">
                            <img
                                src="/images/agri06.jpg"
                                alt="Produtor Agrícola"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Decorative Stat Badge */}
                        <div className="absolute top-1/2 left-4 z-30 bg-white p-6 rounded-2xl shadow-xl flex flex-col items-center justify-center transform -translate-y-1/2">
                            <span className="text-3xl font-bold text-green-700 mx-auto">100%</span>
                            <span className="text-sm text-gray-500 font-medium">Compromisso</span>
                        </div>
                    </motion.div>

                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h4 className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3">Sobre Nós</h4>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
                            Conheça a <span className="text-green-700">AgriCargas</span>
                        </h2>
                        <h3 className="text-xl text-gray-700 font-medium mb-6">
                            Procuramos satisfazer os nossos clientes
                        </h3>

                        <div className="space-y-6 text-gray-600 leading-relaxed font-light">
                            <p>
                                AgriCargas é uma startup de impacto socioeconômico que visa melhorar e desenvolver a agricultura a nível nacional. Temos como foco principal resolver os problemas do escoamento de produtos agrícolas.
                            </p>
                            <p>
                                AgriCargas é uma startup de impacto socioeconômico que visa melhorar e desenvolver a agricultura a nível nacional. Temos como foco principal resolver os problemas do escoamento de produtos agrícolas.
                            </p>
                            <p>
                                AgriCargas é uma startup de impacto socioeconômico que visa melhorar e desenvolver a agricultura a nível nacional. Temos como foco principal resolver os problemas do escoamento de produtos agrícolas.
                            </p>
                        </div>

                        <div className="mt-10">
                            <a href="#contacto" className="inline-block pb-1 border-b-2 border-green-600 text-green-700 font-semibold hover:text-green-800 transition-colors">
                                Trabalhe Connosco &rarr;
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
