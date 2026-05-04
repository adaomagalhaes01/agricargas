import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['Tudo', 'Escoamento', 'Vendas', 'Outros'];

const galleryImages = [
    { id: 1, src: '/images/agri0.jpg', category: 'Escoamento' },
    { id: 2, src: '/images/agri1.jpg', category: 'Vendas' },
    { id: 3, src: '/images/agri2.jpg', category: 'Outros' },
    { id: 4, src: '/images/agri04.jpg', category: 'Escoamento' },
    { id: 5, src: '/images/agri07.jpg', category: 'Vendas' },
    { id: 6, src: '/images/tomate.jpg', category: 'Outros' },
];

export default function Gallery() {
    const [activeCategory, setActiveCategory] = useState('Tudo');

    const filteredImages = activeCategory === 'Tudo'
        ? galleryImages
        : galleryImages.filter(img => img.category === activeCategory);

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-12">
                    <h4 className="text-green-600 font-semibold tracking-wider text-sm uppercase mb-3">
                        O Nosso Trabalho
                    </h4>
                    <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
                        Galeria
                    </h2>

                    {/* Navigation / Filter */}
                    <div className="flex flex-wrap justify-center gap-4 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeCategory === category
                                        ? 'bg-green-600 text-white shadow-md'
                                        : 'bg-green-50 text-green-800 hover:bg-green-100'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Masonry or Grid Layout for Gallery */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredImages.map((image) => (
                            <motion.div
                                key={image.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="relative rounded-2xl overflow-hidden group aspect-[4/3] shadow-[0_4px_20px_-10px_rgba(0,0,0,0.1)]"
                            >
                                <img
                                    src={image.src}
                                    alt={`Galeria ${image.category}`}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                {/* Overlay on hover */}
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <span className="text-white font-medium tracking-wider uppercase text-sm border border-white/50 px-4 py-2 rounded-full backdrop-blur-sm">
                                        {image.category}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

            </div>
        </section>
    );
}
