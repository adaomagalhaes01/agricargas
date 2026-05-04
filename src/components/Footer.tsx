export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center">
                    <a href="#inicio" className="mb-8 block">
                        <img
                            src="/images/agricargas.png"
                            alt="AgriCargas Logo"
                            className="h-14 w-auto object-contain select-none grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100"
                        />
                    </a>

                    <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-8">
                        {['Início', 'Sobre Nós', 'Serviços', 'Galeria', 'Contacto'].map((link) => (
                            <a
                                key={link}
                                href={`#${link.toLowerCase().replace(' ', '').replace('í', 'i').replace('ó', 'o')}`}
                                className="text-gray-500 hover:text-green-600 transition-colors text-sm font-medium tracking-wide uppercase"
                            >
                                {link}
                            </a>
                        ))}
                    </nav>

                    <div className="text-center text-gray-400 text-sm mt-8 border-t border-gray-100 w-full pt-8">
                        <p>&copy; {new Date().getFullYear()} AgriCargas. Todos os direitos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
