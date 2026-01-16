"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/Button";
import TiltedCard from "./ui/TiltedCard";
import RotatingText from "./ui/RotatingText";

export const Hero: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-16"
    >
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        
        {/* LEFT: TEXT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-6"
        >
          <span className="text-cyan-400 text-sm tracking-widest uppercase">
            Hello, I’m
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Harsh <span className="text-cyan-400">Yadav</span>
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-200 flex flex-wrap items-center gap-3">
            I am a
            <RotatingText
              texts={[
                "Full Stack Developer",
                "React Developer",
                "MERN Engineer",
                "UI Enthusiast",
              ]}
              mainClassName="
                inline-flex w-fit
                px-3 sm:px-4
                py-1 sm:py-1.5
                bg-cyan-300 text-black
                rounded-lg font-semibold
              "
              staggerFrom="last"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.03}
              splitLevelClassName="overflow-hidden"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2200}
            />
          </h2>

          <p className="text-slate-400 max-w-lg leading-relaxed">
            I build modern, high-performance web applications with clean UI,
            smooth animations, and scalable backend systems.
          </p>

          {/* CTA BUTTONS */}
          <div className="flex gap-4 pt-4">
            <Button variant="primary" size="lg" className="gap-2">
              View Projects <ArrowRight size={18} />
            </Button>

            <Button variant="secondary" size="lg">
              Contact Me
            </Button>
          </div>
        </motion.div>

        {/* RIGHT: TILTED IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          className="flex justify-center md:justify-end"
        >
          <TiltedCard
            rotateAmplitude={30}
            scaleOnHover={1.2}
          />
        </motion.div>
      </div>
    </section>
  );
};
