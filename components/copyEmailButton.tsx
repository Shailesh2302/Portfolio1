"use client";
import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion } from "framer-motion";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "rushikeshkanfade123@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err: unknown) {
      // Fallback for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <motion.div
      className="relative inline-block cursor-pointer"
      whileHover="hover"
    >
      <button
        onClick={copyToClipboard}
        className="flex items-center gap-2 px-4 py-1 bg-slate-700 text-white rounded-lg min-w-fit relative z-10"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? "Copied!" : "Email Me"}
      </button>

      {/* Bottom Animated Underline */}
      <motion.span
        variants={{
          hover: { scaleX: 1 },
          initial: { scaleX: 0 },
        }}
        initial="initial"
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-pink-500 via-yellow-500 to-blue-500 origin-left scale-x-0"
      />
    </motion.div>
  );
};

export default CopyEmailButton;
