import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';

export default function Contact() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3"
                    >
                        Fale Connosco
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-800"
                    >
                        Contacto
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contacto</h3>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <MapPin className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h4 className="text-lg font-medium text-gray-800">Endereço</h4>
                                <p className="mt-2 text-gray-600 font-light leading-relaxed">
                                    Rangel, Bairro dos CTT Km 7.<br />
                                    Parque do Saber, Luanda, Angola.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h4 className="text-lg font-medium text-gray-800">Email</h4>
                                <p className="mt-2 text-green-600 font-light hover:underline cursor-pointer">
                                    geral@agricargas.ao
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                            </div>
                            <div className="ml-6">
                                <h4 className="text-lg font-medium text-gray-800">Telefone</h4>
                                <p className="mt-2 text-gray-600 font-light">
                                    +244 943 464 593 <br />
                                    +244 922 943 512
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-8">Envie uma Mensagem</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                                    <input
                                        type="text"
                                        id="name"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                        placeholder="seu@endereco.com"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">Assunto</label>
                                <input
                                    type="text"
                                    id="subject"
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white"
                                    placeholder="Como podemos ajudar?"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Mensagem</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-all bg-gray-50 focus:bg-white resize-none"
                                    placeholder="Escreva a sua mensagem aqui..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 rounded-xl transition-colors shadow-lg shadow-green-600/30"
                            >
                                Enviar Mensagem
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
