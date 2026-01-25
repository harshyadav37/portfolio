"use client";

import React from "react";
import Aboutpage from "./ui/Aboutoage";
import TracingBeamDemo from "./ui/Tracingbeam";

const About = () => {
  return (
    <section id="about" className="relative">
      <TracingBeamDemo />

      {/* Aboutpage hidden on mobile, visible on md+ */}
      <div className="relative -mt-4 hidden md:block">
        <Aboutpage />
      </div>
    </section>
  );
};

export default About;
