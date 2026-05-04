import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Users, Package, MapPin, ThumbsUp } from 'lucide-react';

function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: number; suffix?: string; prefix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const motionValue = useMotionValue(0);
    const rounded = useTransform(motionValue, (v) => Math.round(v));
    const isInView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(motionValue, value, {
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1],
            });

            const unsubscribe = rounded.on('change', (v) => setDisplayValue(v));

            return () => {
                controls.stop();
                unsubscribe();
            };
        }
    }, [isInView, value, motionValue, rounded]);

    return (
        <span ref={ref} className="counter-gradient">
            {prefix}{displayValue.toLocaleString()}{suffix}
        </span>
    );
}

const stats = [
    {
        icon: Users,
        value: 500,
        suffix: '+',
        label: 'Utilizadores Activos',
        description: 'Crescendo todos os dias',
    },
    {
        icon: Package,
        value: 2000,
        suffix: '+',
        label: 'Produtos Vendidos',
        description: 'Produtos frescos entregues',
    },
    {
        icon: MapPin,
        value: 18,
        suffix: '',
        label: 'Províncias',
        description: 'Cobertura em Angola',
    },
    {
        icon: ThumbsUp,
        value: 98,
        suffix: '%',
        label: 'Satisfação',
        description: 'Avaliação dos clientes',
    },
];

export default function Stats() {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section id="stats" className="relative py-24 lg:py-32 bg-white overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-glow-primary" />
            </div>

            <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-secondary tracking-tight"
                    >
                        Números que{' '}
                        <span className="gradient-text">impressionam</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="mt-5 text-lg text-gray-500"
                    >
                        O AgriRoute está a transformar a forma como Angola compra produtos agrícolas.
                    </motion.p>
                </div>

                {/* Stats Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.15 * i }}
                            whileHover={{ y: -6, transition: { duration: 0.3 } }}
                            className="relative group text-center p-8 rounded-3xl bg-gradient-to-b from-white to-primary-50/50 border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                        >
                            {/* Icon */}
                            <div className="mx-auto w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-300">
                                <stat.icon size={28} className="text-primary" />
                            </div>

                            {/* Counter */}
                            <div className="text-4xl lg:text-5xl font-bold mb-2">
                                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                            </div>

                            {/* Label */}
                            <h3 className="text-lg font-semibold text-secondary mb-1">
                                {stat.label}
                            </h3>
                            <p className="text-gray-400 text-sm">
                                {stat.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
