"use client";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    year: "2025",
    title: "B.E. in Information Technology",
    subtitle: "Anuradha Engineering College, Chikhli",
    description:
      "Graduated with First Class Distinction, specialized in Full Stack Development and DevOps practices.",
  },
  {
    year: "2020",
    title: "HSC (12th Science)",
    subtitle: "Shri Sambhaji Raje Junior College, Dongar Khandala",
    description:
      "Completed Higher Secondary Education with major subjects in Physics, Chemistry, Mathematics and Biology.",
  },
  {
    year: "2018",
    title: "SSC (10th Standard)",
    subtitle: "Shri Sambhaji Raje School, Dongar Khandala",
    description:
      "Completed Secondary Schooling with distinction in Mathematics and Science.",
  },
];

export default function HorizontalEducationTimeline() {
  return (
    <div className="w-full overflow-x-none py-10">
      <h1 className="text-3xl text-white pb-10 font-semibold">Education</h1>
      <div className="flex space-x-10 min-w-max px-10">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="relative flex flex-col items-center text-center"
          >
            {/* Vertical Line and Icon */}
            <div className="relative">
              <div className="w-1 h-24 bg-gradient-to-b from-pink-500 via-purple-500 to-blue-500 absolute left-1/2 transform -translate-x-1/2 top-0"></div>
              <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center border-2 border-white">
                <GraduationCap size={24} className="text-white" />
              </div>
            </div>

            {/* Card */}
            <div className="mt-6 bg-slate-800 text-white p-6 rounded-xl w-64 shadow-md hover:scale-105 transition-transform duration-300">
              <p className="text-sm text-slate-400">{edu.year}</p>
              <h3 className="text-lg font-bold">{edu.title}</h3>
              <h4 className="text-slate-300 text-sm">{edu.subtitle}</h4>
              <p className="mt-2 text-slate-400 text-sm">{edu.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
