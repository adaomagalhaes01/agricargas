import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Search, ShoppingBag, Truck, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: Search,
        number: '01',
        title: 'Explore',
        description: 'Navegue pelas categorias de hortaliças, frutas, cereais e legumes frescos disponíveis.',
        color: '#22C55E',
    },
    {
        icon: ShoppingBag,
        number: '02',
        title: 'Encomende',
        description: 'Adicione os produtos ao carrinho e finalize a sua compra de forma rápida e segura.',
        color: '#F59E0B',
    },
    {
        icon: Truck,
        number: '03',
        title: 'Acompanhe',
        description: 'Siga o estado da sua entrega em tempo real e receba notificações actualizadas.',
        color: '#3B82F6',
    },
    {
        icon: CheckCircle,
        number: '04',
        title: 'Receba',
        description: 'Receba os seus produtos frescos directamente na sua porta, com qualidade garantida.',
        color: '#8B5CF6',
    },
];

export default function HowItWorks() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="how-it-works" className="relative py-24 lg:py-32 bg-bg-section overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, #22C55E 1px, transparent 0)`,
                backgroundSize: '40px 40px',
            }} />

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-6"
                    >
                        Passo a Passo
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"
                    >
                        Como <span className="gradient-text">Funciona</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-5 text-lg text-gray-500"
                    >
                        Em apenas 4 passos simples, desfrute de produtos frescos do campo angolano.
                    </motion.p>
                </div>

                {/* Steps */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connection Line */}
                    <div className="hidden lg:block absolute top-20 left-[12.5%] right-[12.5%] h-[2px]">
                        <motion.div
                            initial={{ scaleX: 0 }}
                            animate={isInView ? { scaleX: 1 } : {}}
                            transition={{ duration: 1.5, delay: 0.5, ease: 'easeOut' }}
                            className="w-full h-full bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
                        />
                    </div>

                    {steps.map((step, i) => (
                        <motion.div
                            key={step.number}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + 0.15 * i }}
                            className="relative text-center group"
                        >
                            {/* Step Number */}
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="relative mx-auto w-20 h-20 rounded-3xl flex items-center justify-center mb-6 transition-all duration-300 z-10 bg-white shadow-lg shadow-black/5 group-hover:shadow-xl group-hover:shadow-primary/10"
                            >
                                <div
                                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ backgroundColor: `${step.color}10` }}
                                />
                                <step.icon
                                    size={32}
                                    style={{ color: step.color }}
                                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                                />
                                {/* Number badge */}
                                <div
                                    className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold shadow-lg"
                                    style={{ backgroundColor: step.color }}
                                >
                                    {step.number}
                                </div>
                            </motion.div>

                            {/* Content */}
                            <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                                {step.title}
                            </h3>
                            <p className="text-gray-500 leading-relaxed text-[15px] max-w-xs mx-auto">
                                {step.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
