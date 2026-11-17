import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Services from './components/Services.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
// Documents section hidden for now. To restore: uncomment this import, add <Documents /> after <Projects />,
// and add { id: 'documents', label: 'Documents' } back to navLinks in data/portfolio.js.
// import Documents from './components/Documents.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import BackToTop from './components/BackToTop.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
