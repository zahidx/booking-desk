'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("/"); // Default to Home

  // Function to handle active tab change
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <nav className="relative flex justify-between items-center bg-opacity-100 px-35 py-4 top-0 left-0 w-full z-50">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 h-[400px] w-full">
        <Image
          src="/images/navbar-bg.png"
          alt="Travel Background"
          fill
          className="object-cover"
        />
      </div>

      {/* Navigation items at the top */}
      <div className="flex items-center gap-6 z-10">
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        <ul className={`md:flex gap-8 ${isOpen ? 'block' : 'hidden'} md:block text-white`}>
          <li
            className={`cursor-pointer ${activeTab === "/" ? "border-b-2 border-white" : ""}`}
            onClick={() => handleTabClick("/")}
          >
            <Link href="/">Home</Link>
          </li>
          <li
            className={`cursor-pointer ${activeTab === "/sections" ? "border-b-2 border-white" : ""}`}
            onClick={() => handleTabClick("/sections")}
          >
            <Link href="/sections">Sections</Link>
          </li>
          <li
            className={`cursor-pointer ${activeTab === "/order" ? "border-b-2 border-white" : ""}`}
            onClick={() => handleTabClick("/order")}
          >
            <Link href="/order">Order</Link>
          </li>
          <li
            className={`cursor-pointer ${activeTab === "/report-client" ? "border-b-2 border-white" : ""}`}
            onClick={() => handleTabClick("/report-client")}
          >
            <Link href="/report-client">Report</Link>
          </li>
          <li
            className={`cursor-pointer ${activeTab === "/client" ? "border-b-2 border-white" : ""}`}
            onClick={() => handleTabClick("/client")}
          >
            <Link href="/client">Client</Link>
          </li>
        </ul>
      </div>

      {/* Logo */}
      <div className="text-xl font-bold text-center flex-1 text-white z-10">Logo</div>

      {/* Additional nav items */}
      <ul className="md:flex gap-8 hidden text-white z-10">
        <li><Link href="/about">About Us</Link></li>
        <li><Link href="/contact">Contact</Link></li>
        <li><Link href="/privacy">Privacy</Link></li>
        <li><Link href="/apps">Apps</Link></li>
        <li><Link href="/admin">Admin</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
