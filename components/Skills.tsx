"use client";
import React from "react";
import SkillButton from "./skillButton";

const Skills = () => {
  const skills = [
    "Next.js",
    "React.js",
    "TypeScript",
    "JavaScript",
    "Java",
    "SQL (Postgres)",
    "MongoDB",
    "Docker",
    "AWS",
    "Cloudflare",
    "CI/CD",
    "Git",
    "DSA",
    "Monorepo",
  ];

  return (
    <section className="py-12">
      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
      `}</style>
      <h1 className="text-white text-4xl font-semibold pb-5">Skills</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <SkillButton
            key={index}
            name={skill}
            className="
              bg-[#191923]
              hover:bg-[#242438]
              border 
              border-gray-700/50
              hover:border-gray-600/70
              text-white 
              text-sm
              font-normal
              px-3 
              py-2
              relative
              overflow-hidden
              transition-all 
              duration-300
              hover:scale-[1.02]
              hover:shadow-lg
              hover:shadow-blue-500/20
              before:absolute
              before:bottom-0
              before:left-0
              before:w-full
              before:h-0.5
              before:bg-gradient-to-r
              before:from-blue-500
              before:via-purple-500
              before:to-pink-500
              before:bg-[length:200%_100%]
              before:animate-[shimmer_2s_ease-in-out_infinite]
              before:opacity-80
            "
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
