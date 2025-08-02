"use client";
import React from "react";
import SkillButton from "./skillButton";

import {
  FaReact,
  FaJs,
  FaJava,
  FaDatabase,
  FaDocker,
  FaAws,
  FaCloudflare,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiMongodb,
  SiHackerrank,
  SiNx,
} from "react-icons/si";

const Skills = () => {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs color="#000" size={18} /> },
    { name: "React.js", icon: <FaReact color="#61DBFB" size={18} /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" size={18} /> },
    { name: "JavaScript", icon: <FaJs color="#F0DB4F" size={18} /> },
    { name: "Java", icon: <FaJava color="#007396" size={18} /> },
    { name: "SQL (Postgres)", icon: <FaDatabase color="#336791" size={18} /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" size={18} /> },
    { name: "Docker", icon: <FaDocker color="#0db7ed" size={18} /> },
    { name: "AWS", icon: <FaAws color="#FF9900" size={18} /> },
    { name: "Cloudflare", icon: <FaCloudflare color="#F38020" size={18} /> },
    { name: "CI/CD" },
    { name: "Git", icon: <FaGitAlt color="#F1502F" size={18} /> },
    { name: "DSA", icon: <SiHackerrank color="#2EC866" size={18} /> },
    { name: "Monorepo", icon: <SiNx color="#143055" size={18} /> },
  ];

  return (
    <section className="py-12">
      <h1 className="text-white text-3xl font-semibold pb-10">
        Skills and Technologies
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {skills.map((skill, index) => (
          <SkillButton
            key={index}
            name={skill.name}
            icon={skill.icon}
            style={{ animationDelay: `${index * 100}ms` }}
            className={`
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
              before:animate-shimmer
              before:opacity-80
              relative
              overflow-hidden
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;
