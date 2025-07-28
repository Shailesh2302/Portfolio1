import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex bg-[#191923]/90 backdrop-blur-lg w-full py-4 px-6 text-white items-center fixed top-0 left-0 right-0 justify-between z-50 transition-all duration-500 hover:bg-[#191923] supports-[backdrop-filter]:bg-[#191923]/90 shadow-lg">
      <h3 className="font-bold text-xl sm:text-2xl transition-all duration-300 hover:scale-105 cursor-pointer bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent hover:from-blue-400 hover:to-purple-500">
        MyPortfolio
      </h3>
      
      <div className="flex items-center space-x-6 md:space-x-8 lg:space-x-10">
        <Link 
          href={"/"} 
          className="text-sm md:text-base font-medium hover:text-blue-400 transition-all duration-300 transform hover:scale-110 relative group px-2 py-1 rounded-lg hover:bg-[#191923]/50"
        >
          Home
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-400 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
        </Link>
        <Link 
          href={"/about"} 
          className="text-sm md:text-base font-medium hover:text-purple-400 transition-all duration-300 transform hover:scale-110 relative group px-2 py-1 rounded-lg hover:bg-[#191923]/50"
        >
          About
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
        </Link>
        <Link 
          href={"/snippet"} 
          className="text-sm md:text-base font-medium hover:text-green-400 transition-all duration-300 transform hover:scale-110 relative group px-2 py-1 rounded-lg hover:bg-[#191923]/50"
        >
          Snippet
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
        </Link>
        <Link 
          href={"/contact"} 
          className="text-sm md:text-base font-medium hover:text-pink-400 transition-all duration-300 transform hover:scale-110 relative group px-2 py-1 rounded-lg hover:bg-[#191923]/50"
        >
          Contact
          <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-pink-400 transition-all duration-300 group-hover:w-4/5 transform -translate-x-1/2"></span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;