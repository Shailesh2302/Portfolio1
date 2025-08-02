import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-10 flex items-center justify-between py-4 border-t border-gray-700/40">
      {/* Logo */}
      <div className="ml-4">
        <Image src="/assets/f1.svg" height={70} width={70} alt="race car" />
      </div>

      {/* Social Icons */}
      <div className="flex items-center mr-10">
        <Link href="https://linkedin.com/in/your-profile" target="_blank">
          <Button
            variant="ghost"
            className="
              p-0 
              hover:scale-110 
              transition-transform 
              rounded-full
              h-auto w-auto
            "
            aria-label="LinkedIn"
          >
            <FaLinkedin size={60} color="#0077B5" />
          </Button>
        </Link>

        <Link href="https://twitter.com/your-profile" target="_blank">
          <Button
            variant="ghost"
            className="
              p-0 
              hover:scale-110 
              transition-transform 
              rounded-full
              h-auto w-auto
            "
            aria-label="Twitter"
          >
            <FaTwitter size={60} color="#1DA1F2" />
          </Button>
        </Link>

        <Link href="https://github.com/your-profile" target="_blank">
          <Button
            variant="ghost"
            className="
              p-0 
              hover:scale-110 
              transition-transform 
              rounded-full
              h-auto w-auto
            "
            aria-label="GitHub"
          >
            <FaGithub size={60} color="#FFFFFF" />
          </Button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
