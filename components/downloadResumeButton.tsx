import React from "react";
import { Download } from "lucide-react";

const DownloadResumeButton = () => {
  const handleDownload = () => {
    // Replace with your actual resume file path
    const resumeUrl = "/resume.pdf"; // Put your resume.pdf in the public folder

    // Create a temporary link element
    const link = document.createElement("a");
    link.href = resumeUrl;
    link.download = "Rushikesh_Kanfade_Resume.pdf"; // Replace with your actual name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <button
      onClick={handleDownload}
      className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg min-w-fit"
    >
      <Download size={16} />
      Download Resume
    </button>
  );
};

export default DownloadResumeButton;
