"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import CopyEmailButton from "./copyEmailButton";
import DownloadResumeButton from "./downloadResumeButton";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

export default function HeroSection() {
  const router = useRouter();
  return (
    <div className="my-20">
      <div className="pb-3">
        <h1 className="text-4xl font-bold text-white">Rushikesh Kanfade</h1>
      </div>
      <div className="pb-3">
        <h2 className="text-slate-400 font-semibold">
          Full Stack Developer • DevOps Engineer • F1 Enthusiast
        </h2>
      </div>

      <div className="flex-1 py-5 flex items-center gap-4">
        <Link
          href={"https://x.com/Shaileshkanfade"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg">
            Available for Hire
          </Button>
        </Link>

        <p className="text-white">or</p>

        <CopyEmailButton />
      </div>

      <div className="pb-3">
        <p className="text-slate-400 font-semibold">
          Connect with me, here are my socials
        </p>
      </div>

      <div className="py-1 flex-1 flex items-center gap-4">
        <DownloadResumeButton />

        <Link
          href={"https://www.linkedin.com/in/rushikesh-kanfade-2a78ba229/"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg min-w-fit">
            <FaLinkedin size={20} />
            LinkedIn
          </Button>
        </Link>

        <Link
          href={"https://x.com/Shaileshkanfade"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg min-w-fit">
            <FaTwitter size={20} />
            Twitter
          </Button>
        </Link>

        <Link
          href={"https://github.com/Shailesh2302"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg min-w-fit">
            <FaGithub size={20} />
            GitHub
          </Button>
        </Link>
      </div>
    </div>
  );
}
