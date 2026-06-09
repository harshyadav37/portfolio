'use client';
import Experience from '../components/SkillsTree';
import { Footer } from '../components/Footer';
import VideoModal from '../components/VideoModal';
export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full  ">
    <VideoModal/>
      
      < Experience />
      <Footer />

    </main>
  );
}
