"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileDown, CheckCircle2 } from "lucide-react";
import Image from "next/image";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    try {
      const response = await fetch("/assets/harshresume.png");
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Harsh_Yadav_Resume.png";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
      
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (error) {
      console.error("Error downloading resume:", error);
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop - High Z-index */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/90 backdrop-blur-md z-[999]"
          />

          {/* Modal Wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 z-[1000] flex items-center justify-center p-4 md:p-8 pointer-events-none"
          >
            <div className="relative w-full max-w-xl flex flex-col pointer-events-auto bg-slate-900 rounded-[24px] shadow-2xl border border-white/10 overflow-hidden max-h-[90vh]">
              
<button
  onClick={onClose}
  className="absolute top-1 left-60 p-2  hover:text-red-700 backdrop-blur-md rounded-full text-white shadow-lg  transition-all active:scale-95"
  aria-label="Close"
>
  <X size={20} strokeWidth={2.5} />
</button>

              {/* Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-4 bg-slate-950/50">
                <div className="rounded-xl overflow-hidden shadow-2xl border border-white/5">
                  <Image
                    src="/assets/harshresume.png"
                    alt="Resume Preview"
                    width={800}
                    height={1100}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-4 bg-slate-900 border-t border-white/10 flex justify-center">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleDownload}
                  disabled={isDownloading}
                  className={`w-full max-w-[240px] flex items-center justify-center gap-2 px-6 py-2 rounded-xl font-bold text-sm transition-all duration-300 ${
                    downloaded 
                    ? "bg-emerald-500 text-white" 
                    : "bg-white text-slate-900 hover:bg-slate-100"
                  }`}
                >
                  {downloaded ? (
                    <><CheckCircle2 size={16} /> Downloaded</>
                  ) : (
                    <><FileDown size={16} /> {isDownloading ? "Wait..." : "Download Resume"}</>
                  )}
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};