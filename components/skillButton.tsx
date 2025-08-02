"use client";
import React from "react";
import { Button } from "./ui/button";

type SkillButtonProps = React.ComponentProps<typeof Button> & {
  name: string;
  icon?: React.ReactNode;
};

const SkillButton = ({ name, icon, className = "", ...props }: SkillButtonProps) => {
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
        flex items-center gap-x-2
      `}
      {...props}
    >
      <span className="shrink-0">{icon}</span>
      <span className="truncate">{name}</span>
    </Button>
  );
};

export default SkillButton;
