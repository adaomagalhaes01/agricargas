import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import AgriRoute from './components/AgriRoute';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-white text-gray-800 antialiased overflow-x-hidden">
      <Navbar />

      <main>
        <div id="inicio">
          <Hero />
        </div>
        <div id="sobre">
          <About />
        </div>
        <div id="servicos">
          <Services />
        </div>
        <div id="agriroute">
          <AgriRoute />
        </div>
        <div id="galeria">
          <Gallery />
        </div>
        <div id="contacto">
          <Contact />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
