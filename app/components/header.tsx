"use client";
import BracketIcon from "@/assets/branding/BracketIcon.svg";
import { SiIconFromName } from "@/utils/icon";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { MdClose, MdMenu } from "react-icons/md";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const pageSections = [
    { title: "About", href: "about" },
    { title: "Sponsors", href: "sponsors" },
    { title: "FAQ", href: "faq" },
  ];

  const socialMedia = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/gdscmcmasteru/",
      icon: "SiInstagram",
    },
    {
      name: "Discord",
      url: "https://discord.gg/XtYqWmJmh7",
      icon: "SiDiscord",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/gdscmcmasteru/",
      icon: "SiLinkedin",
    },
  ];

  // Disable background scrolling when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        data-testid="header"
        className="z-50 fixed left-1/2 -translate-x-1/2 top-8 hidden md:flex flex-row items-center gap-x-16 bg-google-grey bg-opacity-10 backdrop-blur py-2 px-3 rounded-full border-opacity-10"
      >
        <Link href="#hero" className="flex items-center h-fit w-fit">
          <Image src={BracketIcon} alt="GDSC Bracket Icon" className="h-5 w-auto" />
        </Link>

        {/* Main Navigation */}
        <nav aria-label="Main Navigation" className="flex flex-1">
          <ul className="flex flex-row gap-x-8 items-center h-full">
            {pageSections.map((section) => (
              <li key={section.href}>
                <Link
                  href={`#${section.href}`}
                  className="whitespace-nowrap cursor-pointer text-lg hover:text-google-orange transition-colors duration-300"
                >
                  {section.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Media Links */}
        <nav aria-label="Social Media" className="flex gap-x-4 h-fit w-fit">
          <ul className="flex flex-row gap-x-4">
            {socialMedia.map((media) => (
              <li key={media.name}>
                <Link
                  href={media.url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center hover:text-google-orange transition-colors duration-300"
                >
                  <SiIconFromName
                    icon={media.icon}
                    className="h-5 w-auto"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Mobile Header */}
      <header data-testid="header" className="z-50 fixed inset-0 md:hidden text-center">
        {menuOpen ? (
          <div
            className="fixed inset-0 bg-white flex flex-col items-center justify-center z-50"
            aria-hidden={!menuOpen}
          >
            <button
              onClick={handleMenuToggle}
              aria-label="Close menu"
              className="absolute left-4 top-4 rounded-full p-1 bg-google-grey bg-opacity-10"
            >
              <MdClose size={24} />
            </button>
            <nav className="flex flex-col gap-y-6">
              {pageSections.map((section) => (
                <Link
                  key={section.href}
                  href={`#${section.href}`}
                  onClick={handleMenuToggle}
                  className="text-lg font-medium text-gray-800 hover:text-google-orange transition-colors"
                >
                  {section.title}
                </Link>
              ))}
            </nav>
            <div className="mt-8 flex gap-x-4">
              {socialMedia.map((media) => (
                <Link
                  key={media.name}
                  href={media.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-800 hover:text-google-orange"
                >
                  <SiIconFromName icon={media.icon} className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
        ) : (
          <button
            onClick={handleMenuToggle}
            aria-label="Open menu"
            className="absolute left-4 top-4 rounded-full p-1 bg-google-grey bg-opacity-10"
          >
            <MdMenu size={24} />
          </button>
        )}
      </header>
    </>
  );
};

export default Header;
