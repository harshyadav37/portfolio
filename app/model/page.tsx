"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

const VideoModal = () => {
  return (
    <main className="min-h-screen w-full flex items-center justify-center bg-black">
      <div className="w-[500px] h-[900px] rounded-3xl overflow-hidden shadow-2xl border border-white/10">
        <Spline
          scene="https://prod.spline.design/QRA4PdnRuQGn2HQ1/scene.splinecode"
          className="w-full h-full"
        />
      </div>
    </main>
  );
};

export default VideoModal;