"use client";
import { useState } from "react";
import homeIcon from "../../public/home_icon_2.svg";
import codeIcon from "../../public/code_icon.svg";
import cloudIcon from "../../public/cloud_icon.svg";
import bookIcon from "../../public/book_icon.svg";
import settingsIcon from "../../public/settings_icon.svg";
import Image from "next/image";
import Logo from "../../public/codeant-ai_logo.svg";
import phone from "../../public/phone_icon.svg";
import logout from "../../public/logout_icon.svg";
import hamburger from "../../public/hamburger.svg";
import closeIcon from "../../public/close_icon.svg";
import Link from "next/link";

const Navbar: React.FC = () => {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [user, setUser] = useState<string>("Vaishnavi");
  
  const links = [
    { id: "home", label: "Repositories", icon: homeIcon,link:"/home" },
    { id: "code", label: "AI Code Review", icon: codeIcon, link:"/home" },
    { id: "cloud", label: "Cloud Security", icon: cloudIcon, link:"/home" },
    { id: "how to use", label: "How to Use", icon: bookIcon, link:"/home" },
    { id: "settings", label: "Settings", icon: settingsIcon, link:"/home" },
    { id: "support", label: "Support", icon: phone, link:"/home" },
    { id: "logout", label: "Logout", icon: logout, link:"/" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <nav className="flex w-full justify-between p-5 fixed top-0 z-50 border-b border-[#E9EAEB]">
      <div >
        <Image src={Logo} alt="CodeAnt AI Logo"/>
      </div>
      <div onClick={handleMenuToggle} className="cursor-pointer">
        <Image src={hamburger} alt="hamburger"/>
      </div>

      {/* dropdown menu */}
      {/* Dropdown Menu */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
            onClick={handleMenuToggle}
          ></div>

          {/* Dropdown */}
          <div className="fixed top-0 left-0 w-full bg-white z-50 shadow-lg transition-transform">
            <div className="flex justify-between items-center p-5">
              {/* Logo */}
              <Image src={Logo} alt="CodeAnt AI Logo" />

              {/* Close Button */}
              <button onClick={handleMenuToggle}>
                <Image src={closeIcon} alt="close menu" />
              </button>
            </div>
            <div className="px-5">
              <select value={user} onChange={(e) => setUser(e.target.value)} className="px-4 py-2 rounded-lg border border-[#D5D7DA] shadow-sm focus:ring-2 focus:ring-blue-500 focus:outline-none">
                <option value="Vaishnavi" className="text-[#181D27] text-[14px]">Vaishnavi</option>
                <option value="Riya" className="text-[#181D27] text-[14px]">Riya</option>
                <option value="Rohan" className="text-[#181D27] text-[14px]">Rohan</option>
              </select>
            </div>
            
            {/* Links */}
            <ul className="flex flex-col items-start gap-4 p-5">
              {links.map((link) => (
                <Link href={link.link}
                  key={link.id}
                  className="flex items-center gap-3 text-[16px] font-medium cursor-pointer"
                >
                  <Image src={link.icon} alt={`${link.label}-icon`} />
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>
        </>
      )}
    </nav>
  )
}

export default Navbar;