import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="flex justify-between items-center px-6 py-3 bg-white shadow-lg relative">
      <img
        src="https://www.chellship.com/wp-content/themes/chellship/images/logo.png"
        alt="Chellship Logo"
        width="250px"/>

      <ul className="hidden lg:flex space-x-1 text-sm text-black-700">
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">About Us</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Our Fleet</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Our Team</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Social Responsibility</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Environmental Impact</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Safety & Quality</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Fleet News</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Training</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Career Opportunities</a></li>
        <li><a href="#" className="px-2 py-1 rounded hover:bg-black hover:text-white transition">Life On Board</a></li>
      </ul>

      <button
        className="lg:hidden text-blue-900 text-3xl"
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>

      {isOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col text-sm text-gray-700 p-4">
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>About Us</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Our Fleet</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Our Team</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Social Responsibility</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Environmental Impact</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Safety & Quality</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Fleet News</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Training</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Career Opportunities</a></li>
          <li><a href="#" className="block px-3 py-2 rounded hover:bg-black hover:text-white transition" onClick={() => setIsOpen(false)}>Life On Board</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Header;
