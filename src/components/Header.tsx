import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/aronsgard-bygg-service-logo.jpg";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { to: "/", label: "Hem" },
  { to: "/projekt", label: "Projekt" },
  { to: "/om-oss", label: "Om oss" },
  { to: "/kontakt", label: "Kontakt" },
];

const Header = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        <Link to="/" aria-label="Aronsgård Bygg & Service – startsida" className="flex items-center gap-3">
          <img src={logo} alt="Aronsgård Bygg & Service logotyp" width={44} height={44} className="rounded-full" />
          <span className="hidden sm:block font-sans text-sm font-semibold text-foreground tracking-wide uppercase">
            Aronsgård Bygg & Service
          </span>
        </Link>

        <nav aria-label="Huvudnavigation" className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to || (link.to !== "/" && location.pathname.startsWith(link.to))
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+46738000979"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
          >
            <Phone className="w-4 h-4" />
            073-800 09 79
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label={mobileOpen ? "Stäng meny" : "Öppna meny"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="md:hidden bg-background border-t border-border px-4 py-4" aria-label="Mobilnavigation">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block py-3 text-base font-medium border-b border-border/50 ${
                location.pathname === link.to ? "text-primary" : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:+46738000979"
            className="flex items-center gap-2 mt-4 bg-primary text-primary-foreground px-4 py-3 rounded-full text-base font-semibold justify-center"
          >
            <Phone className="w-5 h-5" />
            073-800 09 79
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
