import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

const CopyEmailButton = () => {
  const [copied, setCopied] = useState(false);
  const email = "rushikeshkanfade123@gmail.com"; // Replace with your actual email

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
    <button
      onClick={copyToClipboard}
      className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg min-w-fit"
    >
      {copied ? <Check size={16} /> : <Copy size={16} />}
      {copied ? "Copied!" : "Email Me"}
    </button>
  );
};

export default CopyEmailButton;
