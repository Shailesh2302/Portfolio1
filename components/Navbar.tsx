import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-16 py-4 bg-[#191923]/80 backdrop-blur-md supports-[backdrop-filter]:bg-[#191923]/80 shadow-md">
      <h3 className="font-bold text-xl sm:text-2xl text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 cursor-pointer">
        MyPortfolio
      </h3>

      <div className="flex items-center space-x-6 md:space-x-10">
        <NavLink href="/" label="Home" color="blue-400" />
        <NavLink href="/about" label="About" color="purple-400" />
        <NavLink href="/snippet" label="Snippet" color="green-400" />
        <NavLink href="/contact" label="Contact" color="pink-400" />
      </div>
    </nav>
  );
};

// Fixing colorMap with exact keys you're passing
const colorMap: Record<
  "blue-400" | "purple-400" | "green-400" | "pink-400",
  string
> = {
  "blue-400": "bg-blue-400",
  "purple-400": "bg-purple-400",
  "green-400": "bg-green-400",
  "pink-400": "bg-pink-400",
};

// Correctly typing color prop as keyof colorMap
const NavLink = ({
  href,
  label,
  color = "blue-400",
}: {
  href: string;
  label: string;
  color?: keyof typeof colorMap;
}) => {
  return (
    <Link
      href={href}
      className="relative group text-white text-sm md:text-base font-medium transition-all duration-300 px-2 py-1 rounded-lg hover:scale-105 hover:bg-white/10"
    >
      {label}
      <span
        className={`absolute left-1/2 bottom-0 h-0.5 w-0 rounded-full transition-all duration-300 transform -translate-x-1/2 group-hover:w-4/5 ${colorMap[color]}`}
      ></span>
    </Link>
  );
};

export default Navbar;
