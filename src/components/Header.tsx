"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Hem" },
  { href: "/projekt", label: "Projekt" },
  { href: "/om-oss", label: "Om mig" },
  { href: "/kontakt", label: "Kontakt" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        transparent
          ? "bg-transparent"
          : "bg-gray-800/70 backdrop-blur-sm shadow-sm"
      }`}
    >
      <div className={`container mx-auto px-4 md:px-8 flex items-center justify-between transition-all duration-300 relative ${
        transparent ? "h-64" : "h-32"
      }`}>
        {/* Logotyp */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Test logga.png"
            alt="Aronsgård Bygg & Service"
            width={480}
            height={240}
            className={`w-auto object-contain transition-all brightness-0 invert ${
              transparent ? "h-56" : "h-28"
            }`}
            style={{ fontWeight: 400 }}
            priority
            quality={100}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 absolute right-4 md:right-8 top-0 pt-6">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                pathname === l.href
                  ? transparent
                    ? "text-white"
                    : "text-white"
                  : transparent
                  ? "text-white/80 hover:text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+46738000979"
            className={`inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${
              transparent
                ? "text-white/80 hover:text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            <Phone className="w-3.5 h-3.5" />
            073-800 09 79
          </a>
        </nav>

        {/* Mobilmeny-knapp */}
        <button
          className={`md:hidden p-2 transition-colors ${
            transparent ? "text-white" : "text-white"
          }`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Meny"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobilmeny */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-4 py-4 flex flex-col gap-4">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === l.href ? "text-primary" : "text-foreground/70"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="tel:+46738000979"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary"
          >
            <Phone className="w-3.5 h-3.5" />
            073-800 09 79
          </a>
        </div>
      )}
    </header>
  );
}
