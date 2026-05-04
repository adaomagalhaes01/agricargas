import { motion } from 'framer-motion';
import { Truck, MapPin, BarChart3, Wallet, PhoneCall, PackageOpen } from 'lucide-react';

const services = [
    {
        title: 'Lógistica & Transportes',
        description: 'Plataforma online que conecta produtores agrícolas, transportadoras e compradores, facilitando a negociação e o agendamento do transporte de produtos agrícolas de forma eficiente.',
        icon: Truck,
    },
    {
        title: 'Rastreamento e monitoramento de cargas',
        description: 'Implementamos na plataforma tecnologias de rastreamento e monitoramento em tempo real para acompanhar a localização e o estado das cargas, proporcionando maior visibilidade e segurança.',
        icon: MapPin,
    },
    {
        title: 'Gestão de estoque e demanda',
        description: 'Usamos ferramentas de gestão que permitam aos produtores acompanhar a demanda do mercado, otimizar níveis de estoque e planejar a produção de forma eficiente.',
        icon: BarChart3,
    },
    {
        title: 'Venda e Crédito para Zungueiras',
        description: 'É importante adaptar as soluções à realidade local das zungueiras em Angola, desenvolvendo abordagens inclusivas e sustentáveis para apoiar em suas atividades comerciais.',
        icon: Wallet,
    },
    {
        title: 'Linha de Atendimento ao Produtor',
        description: 'Conseguimos conectar produtores até zonas onde a comunicação é inacessível através da nossa linha de apoio dedicada.',
        icon: PhoneCall,
    },
    {
        title: 'Easy & Kitandeira Packages',
        description: 'Pacotes de alimentação para famílias que desejam aceder aos nossos serviços localmente com máxima comodidade.',
        icon: PackageOpen,
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Services() {
    return (
        <section className="py-24 bg-gray-50 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.h4
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3"
                    >
                        Nossos Serviços
                    </motion.h4>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight mb-6"
                    >
                        O que oferecemos
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600 text-lg font-light leading-relaxed"
                    >
                        Como uma startup de impacto socioeconômico que visa melhorar e desenvolver a agricultura, a AgriCargas oferece uma variedade de serviços para resolver os problemas de escoamento de produtos agrícolas. Aqui estão seis serviços que podem ajudar nessa solução:
                    </motion.p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}
                                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group border border-gray-100"
                            >
                                {/* Highlight decoration on hover */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-green-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                                <div className="w-14 h-14 bg-green-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-green-600 transition-colors duration-300">
                                    <Icon className="w-7 h-7 text-green-600 group-hover:text-white transition-colors duration-300" />
                                </div>

                                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 font-light leading-relaxed">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
