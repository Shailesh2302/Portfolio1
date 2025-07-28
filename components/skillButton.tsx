"use client";
import React from "react";
import { Button } from "./ui/button";

const SkillButton = ({ name = "", className = "" }) => {
  return (
    <Button
      className={`
        ${className}
        bg-[#191923] 
        hover:bg-[#2a2a3e] 
        border 
        border-gray-600/40 
        hover:border-gray-500 
        text-white 
        font-medium 
        px-4 
        py-2 
        rounded-md 
        transition-all 
        duration-200 
        ease-out
        hover:scale-[1.02]
        hover:shadow-md
        active:scale-[0.98]
      `}
    >
      {name}
    </Button>
  );
};

export default SkillButton;
