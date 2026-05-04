import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
    {
        name: 'Maria Santos',
        role: 'Dona de Casa, Luanda',
        text: 'O AgriRoute mudou a minha vida! Agora consigo comprar hortaliças e frutas frescas sem sair de casa. A qualidade dos produtos é excelente e a entrega é sempre rápida.',
        rating: 5,
        avatar: '👩🏾',
    },
    {
        name: 'João Domingos',
        role: 'Chef de Cozinha, Luanda',
        text: 'Como chef, preciso de ingredientes frescos todos os dias. O AgriRoute conecta-me directamente com os agricultores e consigo os melhores produtos a preços justos.',
        rating: 5,
        avatar: '👨🏾‍🍳',
    },
    {
        name: 'Ana Francisca',
        role: 'Nutricionista, Benguela',
        text: 'Recomendo o AgriRoute a todos os meus pacientes. Os produtos são frescos, orgânicos e o histórico de compras ajuda-me a acompanhar a alimentação dos meus clientes.',
        rating: 5,
        avatar: '👩🏾‍⚕️',
    },
    {
        name: 'Pedro Manuel',
        role: 'Agricultor, Huambo',
        text: 'Graças ao AgriRoute, os meus produtos chegam a mais pessoas. As vendas aumentaram significativamente e consigo manter preços justos para todos.',
        rating: 5,
        avatar: '👨🏾‍🌾',
    },
];

export default function Testimonials() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section className="relative py-24 lg:py-32 bg-bg-section overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-glow-primary" />
                <div className="absolute top-20 left-0 w-80 h-80 bg-glow-emerald" />
            </div>

            {/* Large quote decorative */}
            <div className="absolute top-16 right-16 opacity-[0.03]">
                <Quote size={300} />
            </div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-6"
                    >
                        Testemunhos
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"
                    >
                        O que dizem os nossos{' '}
                        <span className="gradient-text">clientes</span>
                    </motion.h2>
                </div>

                {/* Testimonials Cards - Desktop */}
                <div className="hidden lg:grid grid-cols-2 gap-6 mb-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="group p-8 rounded-3xl bg-white border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            {/* Quote icon */}
                            <Quote size={24} className="text-primary/20 mb-4" />

                            {/* Text */}
                            <p className="text-gray-600 leading-relaxed text-[15px] mb-6 italic">
                                "{t.text}"
                            </p>

                            {/* Footer */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                                        {t.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-secondary">{t.name}</h4>
                                        <p className="text-gray-400 text-sm">{t.role}</p>
                                    </div>
                                </div>
                                <div className="flex gap-0.5">
                                    {Array.from({ length: t.rating }).map((_, j) => (
                                        <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Testimonials - Mobile Carousel */}
                <div className="lg:hidden">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.4 }}
                        className="p-8 rounded-3xl bg-white border border-gray-100 shadow-lg"
                    >
                        <Quote size={24} className="text-primary/20 mb-4" />
                        <p className="text-gray-600 leading-relaxed text-[15px] mb-6 italic">
                            "{testimonials[currentIndex].text}"
                        </p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl">
                                    {testimonials[currentIndex].avatar}
                                </div>
                                <div>
                                    <h4 className="font-bold text-secondary">{testimonials[currentIndex].name}</h4>
                                    <p className="text-gray-400 text-sm">{testimonials[currentIndex].role}</p>
                                </div>
                            </div>
                            <div className="flex gap-0.5">
                                {Array.from({ length: testimonials[currentIndex].rating }).map((_, j) => (
                                    <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Navigation */}
                    <div className="flex items-center justify-center gap-4 mt-6">
                        <button
                            onClick={prevTestimonial}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                        >
                            <ChevronLeft size={18} />
                        </button>
                        <div className="flex gap-2">
                            {testimonials.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === currentIndex ? 'bg-primary w-8' : 'bg-gray-300'
                                        }`}
                                />
                            ))}
                        </div>
                        <button
                            onClick={nextTestimonial}
                            className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all"
                        >
                            <ChevronRight size={18} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
