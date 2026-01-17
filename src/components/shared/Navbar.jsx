"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import WebLogo from "./WebLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Items" },
    { href: "/contact", label: "Contact" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/login", label: "Login" },
  ];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left: Logo */}
        <WebLogo />

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={[
                "px-4 py-2 rounded-lg text-sm font-medium transition",
                isActive(link.href)
                  ? "text-indigo-600 bg-indigo-100 underline"
                  : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600",
              ].join(" ")}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border px-3 py-2 text-gray-700 hover:bg-gray-50"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {/* Simple icon */}
          <span className="text-lg">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen ? (
        <div className="md:hidden bg-white">
          <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={[
                  "px-4 py-3 rounded-lg text-sm font-medium transition",
                  isActive(link.href)
                    ? "bg-indigo-600 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-indigo-600",
                ].join(" ")}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}