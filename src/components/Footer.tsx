import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    {/* Huvud */}
    <div className="container mx-auto px-4 md:px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

      {/* Varumärke */}
      <div className="flex flex-col gap-4 items-start">
        <Image
          src="/images/Test logga.png"
          alt="Aronsgård Bygg & Service logotyp"
          width={280}
          height={140}
          className="h-14 w-auto object-contain invert self-start"
          quality={100}
        />
        <p className="text-background/60 text-sm leading-relaxed max-w-xs">
          Byggfirma med bred erfarenhet inom byggbranschen och timmerhus.
          Vi utgår från Hallen i Jämtland och arbetar i hela regionen.
        </p>
        <a
          href="https://www.instagram.com/snickeridagboken/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-background/60 hover:text-background transition-colors w-fit"
        >
          <Instagram className="w-4 h-4" />
          @snickeridagboken
        </a>
      </div>

      {/* Navigation */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-5">
          Sidor
        </p>
        <ul className="space-y-3 text-sm">
          {[
            { href: "/", label: "Hem" },
            { href: "/projekt", label: "Projekt" },
            { href: "/om-oss", label: "Om mig" },
            { href: "/kontakt", label: "Kontakt" },
          ].map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="text-background/70 hover:text-background transition-colors"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Kontakt */}
      <div>
        <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-5">
          Kontakt
        </p>
        <ul className="space-y-4 text-sm text-background/70">
          <li className="flex items-start gap-3">
            <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-primary" />
            <span>
              Trägsta 172<br />
              284 91 Hallen<br />
              <span className="text-background/50 text-xs">Utgår från Hallen</span>
            </span>
          </li>
          <li className="flex items-center gap-3">
            <Phone className="w-4 h-4 shrink-0 text-primary" />
            <a href="tel:+46738000979" className="hover:text-background transition-colors">
              073-800 09 79
            </a>
          </li>
          <li className="flex items-center gap-3">
            <Mail className="w-4 h-4 shrink-0 text-primary" />
            <a href="mailto:aronsgard.bos@icloud.com" className="hover:text-background transition-colors">
              aronsgard.bos@icloud.com
            </a>
          </li>
        </ul>
      </div>
    </div>

    {/* Botten */}
    <div className="border-t border-background/10">
      <div className="container mx-auto px-4 md:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-background/40">
        <div>
          <p>© {new Date().getFullYear()} Aronsgård Bygg & Service</p>
        </div>
        <Link href="/integritetspolicy" className="hover:text-background/70 transition-colors">
          Integritetspolicy
        </Link>
        <a
          href="https://axonadigital.se"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:opacity-80 transition-opacity"
          title="Skapad av Axona Digital"
        >
          <span className="text-background/40">Skapad av</span>
          <Image
            src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F4bc83b42bd3b41caa659e7d8aa4f3b99?format=webp&width=800&height=1200"
            alt="Axona Digital"
            width={100}
            height={50}
            className="h-5 w-auto object-contain invert"
          />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
