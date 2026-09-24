"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Ventures" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-lg border-b border-gray-200 shadow-[0_1px_0_0_rgba(0,0,0,0.02)]"
          : "bg-white/80 backdrop-blur-lg border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/logo.png"
              alt="TrybeNode"
              width={240}
              height={70}
              className="h-11 w-auto sm:h-12"
              style={{ width: "auto" }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200 ${
                    active
                      ? "text-[#2d236d]"
                      : "text-gray-500 hover:text-[#2d236d]"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[#725eed]" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden md:flex items-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#2d236d] text-white text-sm font-semibold rounded-full hover:bg-[#725eed] transition-colors duration-200"
            >
              Start a project
              <svg
                className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-9 h-9 flex items-center justify-center rounded-full text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <span className="sr-only">Toggle menu</span>
            <div className="relative w-5 h-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "top-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-all duration-200 ${
                  mobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 h-0.5 w-5 bg-current transition-all duration-300 ${
                  mobileMenuOpen ? "bottom-[7px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden grid overflow-hidden transition-[grid-template-rows] duration-300 ease-out ${
            mobileMenuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0">
            <div className="py-4 border-t border-gray-100 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[#2d236d] bg-[#725eed]/5"
                      : "text-gray-600 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 px-4 py-2.5 bg-[#2d236d] text-white text-sm font-semibold rounded-lg text-center"
              >
                Start a project
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
