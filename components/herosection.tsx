"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import CopyEmailButton from "./copyEmailButton";
import DownloadResumeButton from "./downloadResumeButton";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { MdWork } from "react-icons/md";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="mt-20 mb-10"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Left Section - Content */}
        <div className="space-y-8">
          {/* Status */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg"
            variants={itemVariants}
          >
            <div className="w-2 h-2 bg-emerald-400 rounded-full" />
            <span className="text-emerald-300 font-medium text-sm">
              Available for Hire
            </span>
          </motion.div>

          {/* Name */}
          <motion.div className="space-y-4" variants={itemVariants}>
            <h1 className="text-4xl font-semibold unde text-white ">
              Rushikesh Kanfade
            </h1>

            <h2 className="text-xl font-semibold text-slate-400">
              Full Stack Developer • DevOps Engineer • F1 Enthusiast
            </h2>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            className="flex items-center gap-4 flex-wrap"
            variants={itemVariants}
          >
            <ProfessionalButton
              href="https://x.com/Shaileshkanfade"
              variant="primary"
              icon={<MdWork size={12} />}
            >
              Let&apos;s Work Together
            </ProfessionalButton>

            <span className="text-white">or</span>
            <CopyEmailButton />
          </motion.div>

          {/* Social Links */}
          <motion.div className="space-y-4 pt-5" variants={itemVariants}>
            <p className="text-slate-400 font-medium">
              Connect with me, here are my socials
            </p>

            <div className="flex items-center gap-4 flex-wrap">
              <DownloadResumeButton />
              <ProfessionalButton
                href="https://www.linkedin.com/in/rushikesh-kanfade-2a78ba229/"
                icon={<FaLinkedin size={14} />}
                variant="secondary"
              >
                LinkedIn
              </ProfessionalButton>
              <ProfessionalButton
                href="https://github.com/Shailesh2302"
                icon={<FaGithub size={14} />}
                variant="secondary"
              >
                GitHub
              </ProfessionalButton>
              <ProfessionalButton
                href="https://x.com/Shaileshkanfade"
                icon={<FaTwitter size={14} />}
                variant="secondary"
              >
                Twitter
              </ProfessionalButton>
            </div>
          </motion.div>
        </div>

        {/* Right Section - Image */}
        <motion.div className="flex justify-center" variants={imageVariants}>
          <div className="relative">
            <div className="overflow-hidden rounded-2xl bg-slate-800/50 p-2 border border-slate-700/30">
              <Image
                src="/Herosection.png"
                width={350}
                height={350}
                alt="Rushikesh Kanfade"
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Simple Professional Button Component
function ProfessionalButton({
  href,
  children,
  icon,
  variant = "secondary",
}: {
  href: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary";
}) {
  const getButtonStyles = () => {
    switch (variant) {
      case "primary":
        return "bg-blue-600 hover:bg-blue-700 text-white";
      case "secondary":
        return "bg-slate-700 hover:bg-slate-600 text-white border border-slate-600";
    }
  };

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button
        className={`
          flex items-center gap-2 px-3 py-1 rounded-lg font-medium text-sm
          transition-colors duration-200 ${getButtonStyles()}
        `}
      >
        {icon}
        {children}
      </Button>
    </Link>
  );
}
