"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import WebLogo from "./WebLogo";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const mobileMenuRef = useRef(null);

  const baseLinks = [
    { href: "/", label: "Home" },
    { href: "/items", label: "Items" },
    { href: "/contact", label: "Contact" },
    { href: "/aboutUs", label: "About Us" },
    { href: "/profile", label: "Profile" }, // protected
  ];

  // Only show Login when NOT logged in
  const navLinks = isLoggedIn
    ? baseLinks
    : [...baseLinks, { href: "/login", label: "Login" }];

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  // Check auth UI cookie (client-readable)
  const syncAuthUI = () => {
    const hasAuthUI = document.cookie
      .split("; ")
      .some((c) => c.startsWith("shopsphere_auth_ui=true"));

    setIsLoggedIn(hasAuthUI);
  };

  useEffect(() => {
    syncAuthUI();
  }, []);

  async function handleLogout() {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
    } finally {
      // Remove state immediately for UI update
      setIsLoggedIn(false);
      setIsOpen(false);

      router.push("/login");
      router.refresh();
    }
  }

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
    // In case login/logout happened on another page, re-check cookie on navigation
    syncAuthUI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close menu on outside click + Escape
  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (e) => {
      if (!mobileMenuRef.current) return;
      if (!mobileMenuRef.current.contains(e.target)) setIsOpen(false);
    };

    const handleEscape = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <WebLogo />

        {/* Desktop Menu */}
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

          {/* Logout (only if logged in) */}
          {isLoggedIn && (
            <button
              type="button"
              onClick={handleLogout}
              className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold border border-gray-200 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-50 transition"
            >
              Logout
            </button>
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-lg border border-gray-200 px-3 py-2 text-gray-700 hover:bg-gray-50"
          onClick={() => setIsOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span className="text-lg">{isOpen ? "✕" : "☰"}</span>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div
            ref={mobileMenuRef}
            className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
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

            {/* Mobile Logout */}
            {isLoggedIn && (
              <button
                type="button"
                onClick={handleLogout}
                className="mt-2 px-4 py-3 rounded-lg text-sm font-semibold border border-gray-200 text-gray-700 hover:border-indigo-600 hover:text-indigo-600 hover:bg-gray-50 transition text-left"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
