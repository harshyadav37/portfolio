'use client';

import React from 'react';
import  Projects  from '../components/Projects';
import { Footer } from '../components/Footer';
import Navbar from '../components/Navbar';

const Page = () => {
  return (
    <main className="min-h-screen w-full ">
      <Navbar/>
      <Projects />
      <Footer />
    </main>
  );
};

export default Page;
