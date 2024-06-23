'use client'    
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-transparent text-white p-4 flex justify-between fixed right-0 z-[999]">
        <button className="" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      {/* Sidebar */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} fixed top-0 right-0 h-full w-3/4 sm:w-1/5 bg-white shadow-md transition-transform duration-300 ease-in-out z-[999]`}>
        <button className="p-4" onClick={() => setIsMobileMenuOpen(false)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="#guest">Guest Experience</Link></li>
          <li><Link href="#food">Food and Beverages</Link></li>
          <li><Link href="/Aboutus">About us</Link></li>
          <li><Link href="#contact">Contact Us</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;