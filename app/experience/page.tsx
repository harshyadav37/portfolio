'use client';
import Experience from '../components/SkillsTree';
import { Footer } from '../components/Footer';
import VideoModal from '../components/VideoModal';
import Navbar from '../components/Navbar';
export default function ExperiencePage() {
  return (
    <main className="min-h-screen w-full  ">
    {/* <VideoModal/> */}
      <Navbar />
      < Experience />
      {/* <Footer /> */}

    </main>
  );
}
