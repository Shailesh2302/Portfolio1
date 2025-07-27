import React from "react";
import SkillButton from "./skillButton";

const Skills = () => {
  return (
    <div className="py-5">
      <h1 className="text-white text-4xl font-semibold pb-5">Skills</h1>
      <div className="grid grid-cols-7 gap-2">
        <SkillButton name="Nextjs" className="p-2 bg-slate-700 text-white" />
        <SkillButton name="Reactjs" className="p-2 bg-slate-700 text-white" />
        <SkillButton
          name="TypeScript"
          className="p-2 bg-slate-700 text-white"
        />
        <SkillButton name="Java" className="p-2 bg-slate-700 text-white" />
        <SkillButton
          name="JavaScript"
          className="p-2 bg-slate-700  text-white"
        />
        <SkillButton
          name="SQL(Postgres)"
          className="p-2 bg-slate-700  text-white"
        />
        <SkillButton name="MongoDB" className="p-2 bg-slate-700 text-white" />
        <SkillButton name="Docker" className="p-2 bg-slate-700 text-white" />
        <SkillButton name="AWS" className="p-2 bg-slate-700 text-white" />
        <SkillButton name="CI/CD" className="p-2 bg-slate-700 text-white" />
        <SkillButton
          name="Cloudflare"
          className="p-2 bg-slate-700 text-white"
        />
        <SkillButton name="Git" className="p-2 bg-slate-700 text-white" />
        <SkillButton name="DSA" className="p-2 bg-slate-700 text-white" />
        <SkillButton name="Monorepo" className="p-2 bg-slate-700 text-white" />
        <SkillButton
          name="Nextjs"
          className="p-2 border-amber-50 bg-slate-700 text-white"
        />
      </div>
    </div>
  );
};

export default Skills;
