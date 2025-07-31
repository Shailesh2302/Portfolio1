"use client";
import React from "react";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rushikesh_Kanfade_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      whileHover="hover"
      whileTap="tap"
      initial="initial"
    >
      {/* Main Button */}
      <motion.button
        onClick={handleDownload}
        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-slate-800 to-slate-700 text-white rounded-full shadow-lg border border-slate-600 backdrop-blur-sm relative z-10 font-medium text-sm"
        variants={{
          initial: { scale: 1, y: 0 },
          hover: {
            scale: 1.05,
            y: -2,
            boxShadow: "0 15px 30px rgba(0,0,0,0.25)",
          },
          tap: { scale: 0.95, y: 0 },
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {/* Download Icon with Animation */}
        <motion.div
          variants={{
            initial: { rotate: 0, y: 0 },
            hover: { rotate: 360, y: -1 },
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <Download size={16} />
        </motion.div>
        Download Resume
      </motion.button>

      {/* Glowing Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-xl"
        variants={{
          initial: { opacity: 0, scale: 0.8 },
          hover: { opacity: 1, scale: 1.2 },
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Bottom Animated Underline */}
      <motion.span
        variants={{
          hover: { scaleX: 1, opacity: 1 },
          initial: { scaleX: 0, opacity: 0 },
        }}
        initial="initial"
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute -bottom-1 left-0 h-0.5 w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 origin-center rounded-full"
      />

      {/* Floating Particles Effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        variants={{
          hover: { opacity: 1 },
          initial: { opacity: 0 },
        }}
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
            }}
            variants={{
              hover: {
                y: [-20, -40, -20],
                opacity: [0, 1, 0],
              },
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Ripple Effect */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-blue-400/30"
        variants={{
          hover: {
            scale: [1, 1.5],
            opacity: [0.5, 0],
          },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default DownloadResumeButton;
