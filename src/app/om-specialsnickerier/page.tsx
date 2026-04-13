import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Specialsnickerier | Aronsgård Bygg & Service",
  description:
    "Läs mer om specialsnickerier från Aronsgård Bygg & Service. Handbyggda kök, garderober, trappor och skräddarsydda inrednigslösningar.",
  alternates: { canonical: "/om-specialsnickerier" },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Hem",
      item: "https://aronsgard-bygg.se/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Specialsnickerier",
      item: "https://aronsgard-bygg.se/om-specialsnickerier",
    },
  ],
};

export default function OmSpecialsnickerierPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Specialsnickerier" }]} />

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Text */}
          <div className="mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Specialsnickerier
            </p>
            <h1 className="mb-6 font-serif">Handbyggd inredning som håller</h1>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Vi bygger specialsnickerier som anpassas efter både hemmet och dina behov. Varje lösning tas fram med fokus på funktion, material och helhet – där inget lämnas åt slumpen.
            </p>

            <p className="text-foreground/70 font-semibold mb-4">Vi bygger bland annat:</p>

            <ul className="text-foreground/70 leading-relaxed mb-8 space-y-2">
              <li>Kök – handbyggda och anpassade efter huset</li>
              <li>Garderober och förvaring – platsbyggda lösningar</li>
              <li>Kommoder och badrumsinredning</li>
              <li>Trappor – från enkla till mer avancerade utföranden</li>
              <li>Hyllor och bokhyllor</li>
              <li>TV-möbler och mediaväggar</li>
              <li>Bänkar och sittmöbler</li>
              <li>Inbyggda lösningar i hall och entré</li>
              <li>Speciallösningar efter behov</li>
            </ul>

            <Button variant="hero" asChild>
              <Link href="/kontakt">Kontakta mig</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#e8dfd4" }}>
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif">
            Behöver du skräddarsydda lösningar?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Kontakta mig idag för att diskutera ditt projekt. Jag hjälper dig att skapa inredning som är både vacker och funktionell.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="xl" asChild className="border-gray-800 text-gray-800 hover:bg-gray-100">
              <Link href="/om-oss">Läs mer om mig</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
