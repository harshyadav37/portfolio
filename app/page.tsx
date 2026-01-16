'use client';
import Navbar from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import  Experience  from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import FloatingLines from './components/ui/Floatingbg';

export default function Home() {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <main className="min-h-screen w-full">
      {/* Fixed Navbar - 80% width on mobile, 60% on desktop */}
      <div className='flex items-center justify-center' style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, padding: '20px 0' }}>
        <div className="w-[80%] md:w-[60%]">
          <Navbar />
        </div>
      </div>

      {/* Hero section with FloatingLines background */}
      <div id="home" style={{ width: '100%', minHeight: '100vh', position: 'relative',  }}>
        {/* Floating background - positioned absolutely behind everything */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
          <FloatingLines lineCount={8} />
        </div>
        
        {/* Hero section */}
        <div style={{ position: 'relative', zIndex: 20 }}><Hero /></div>
      </div>
      
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="experience"><Experience /></section>
      <section id="contact"><Contact /></section>
      <Footer />
    </main>
  );
}

