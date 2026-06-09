"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

export default function VideoModal() {
  return (
    <main className="min-h-screen w-full flex items-center justify-center ">
      <div className="w-[600px] h-[600px]  rounded-3xl overflow-hidden ">
        <Spline
          className="w-full h-full"
          scene="https://prod.spline.design/UN0Ke3EorUhDGtKe/scene.splinecode"
        />
      </div>
    </main>
  );
}

  {/* <Spline className="w-full h-full"
        scene="https://prod.spline.design/osdKCL6PN70qFUou/scene.splinecode" 
      /> */}
       {/* <Spline
          scene="https://prod.spline.design/QRA4PdnRuQGn2HQ1/scene.splinecode"
          className="w-full h-full"
        /> */}



  