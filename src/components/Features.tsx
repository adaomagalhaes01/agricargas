import { motion, useInView } from 'framer-motion';
import { useRef, memo } from 'react';
import { Leaf, ShoppingCart, Truck, Shield, Star, Zap } from 'lucide-react';

const features = [
    {
        icon: Leaf,
        title: 'Produtos Frescos',
        description: 'Hortaliças, frutas, cereais e legumes colhidos diretamente do campo angolano.',
        color: '#22C55E',
        bg: 'from-emerald-500/10 to-emerald-600/5',
    },
    {
        icon: ShoppingCart,
        title: 'Compra Fácil',
        description: 'Interface intuitiva para encontrar e encomendar os melhores produtos agrícolas.',
        color: '#F59E0B',
        bg: 'from-amber-500/10 to-amber-600/5',
    },
    {
        icon: Truck,
        title: 'Entrega Rápida',
        description: 'Acompanhe o estado das suas entregas em tempo real com total transparência.',
        color: '#3B82F6',
        bg: 'from-blue-500/10 to-blue-600/5',
    },
    {
        icon: Shield,
        title: 'Pagamento Seguro',
        description: 'Transações protegidas com múltiplos métodos de pagamento disponíveis.',
        color: '#8B5CF6',
        bg: 'from-violet-500/10 to-violet-600/5',
    },
    {
        icon: Star,
        title: 'Avaliações Reais',
        description: 'Veja as avaliações de outros compradores antes de fazer a sua escolha.',
        color: '#EF4444',
        bg: 'from-red-500/10 to-red-600/5',
    },
    {
        icon: Zap,
        title: 'Preços Justos',
        description: 'Sem intermediários. Preços directos dos agricultores para si.',
        color: '#06B6D4',
        bg: 'from-cyan-500/10 to-cyan-600/5',
    },
];

const Features = memo(function Features() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="features" className="relative py-24 lg:py-32 bg-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-glow-primary" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-glow-emerald" />

            <div ref={ref} className="max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 text-primary text-sm font-semibold mb-6"
                    >
                        <Leaf size={16} />
                        Funcionalidades
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"
                    >
                        Tudo o que precisas,{' '}
                        <span className="gradient-text">num só lugar</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto"
                    >
                        O AgriRoute foi desenhado para simplificar a compra de produtos
                        agrícolas frescos em Angola, conectando produtores e consumidores.
                    </motion.p>
                </div>

                {/* Features Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            whileHover={{ y: -8, transition: { duration: 0.3 } }}
                            className="group relative p-8 rounded-3xl border border-gray-100 bg-white hover:border-primary/20 transition-all duration-500 hover:shadow-xl hover:shadow-primary/5"
                        >
                            {/* Gradient overlay on hover */}
                            <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                            <div className="relative z-10">
                                {/* Icon */}
                                <div
                                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110"
                                    style={{ backgroundColor: `${feature.color}15` }}
                                >
                                    <feature.icon
                                        size={26}
                                        style={{ color: feature.color }}
                                        className="transition-transform duration-300 group-hover:rotate-6"
                                    />
                                </div>

                                {/* Content */}
                                <h3 className="text-xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-500 leading-relaxed text-[15px]">
                                    {feature.description}
                                </p>

                                {/* Arrow on hover */}
                                <div className="mt-5 flex items-center gap-2 text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                                    Saber mais
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
});

export default Features;
