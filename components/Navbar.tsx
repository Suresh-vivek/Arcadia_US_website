'use client'    
import { useState } from 'react';
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-transparent text-white p-4 flex justify-between sm:justify-center items-center fixed right-0 sm:left-1/2 sm:right-1/2 z-10">
        <div className="flex justify-center items-center sm:space-x-10">
          {/* Existing menu items, hidden on mobile */}
            <div className="hidden sm:flex space-x-10">
                <Link href="/">Home</Link>
                <Link href="/">About</Link>
                <Link href="/">Services</Link>
                <Link href="/">Contact</Link>
                </div>
        </div>
        <button className="sm:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
        </button>
      </nav>
      {/* Sidebar */}
      <div className={`${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'} sm:hidden fixed top-0 right-0 h-full w-3/4 bg-white shadow-md transition-transform duration-300 ease-in-out z-10`}>
        <button className="p-4" onClick={() => setIsMobileMenuOpen(false)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
        </button>
        <ul className="flex flex-col space-y-4 p-4">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/">About</Link></li>
          <li><Link href="/">Services</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;