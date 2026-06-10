'use client';
import Navbar from './components/Navbar';
// import { Hero } from './components/Hero';
import  About  from './components/About';
import  Projects  from './components/Projects';
import  Skills  from './components/SkillsTree';
import Contact  from './components/Contact';
import { Footer } from './components/Footer';
import Experience from './components/Experience';
import Education from './components/Education';


import BlurBlob from './components/ui/BlurBlob';

export default function Home() {
  const items = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];
  return (
    <main className="bg-[#050414]">
    
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      
   <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
   

      
      <div className="relative pt-20">
        <Navbar/>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="projects"><Projects /></section>
        <section id="experience"><Experience /></section>
        <section id="education"><Education /></section>
         {/* <section id="about"><About /></section> */}
      
      {/* <section id="experience"><Experience /></section> */}
      <section id="contact"><Contact /></section>
      {/* <Footer /> */}
      </div>
      
     
    </main>
  );
}

