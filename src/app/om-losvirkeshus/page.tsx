import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Lösvirkeshus | Aronsgård Bygg & Service",
  description:
    "Läs mer om lösvirkeshus från Aronsgård Bygg & Service. Skräddarsydda hus byggda från grunden med lång erfarenhet från Jämtlands klimat.",
  alternates: { canonical: "/om-losvirkeshus" },
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
      name: "Lösvirkeshus",
      item: "https://aronsgard-bygg.se/om-losvirkeshus",
    },
  ],
};

export default function OmLosvirkeshusgPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Lösvirkeshus" }]} />

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Text */}
          <div className="mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Lösvirkeshus
            </p>
            <h1 className="mb-6 font-serif">Nybyggnation från grunden</h1>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Lösvirkeshus är en klassisk och beprövad byggmetod som är perfekt för Jämtlands klimat. Jag bygger skräddarsydda hus från grunden, anpassade efter din vision, tomten och dina behov. Varje projekt är unikt, och jag tar mig tid att förstå dina önskningar innan arbetet börjar.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Från tomtbesiktning och grundarbete till färdigställt hus – jag hanterar hela processen. Jag väljer material noggrant baserat på klimat och långsiktighet, och säkerställer att byggnationen följer alla byggregler och standarder. Med många års erfarenhet av nybyggnation i Jämtland vet jag vilka material och metoder som håller i hårt väder och frost.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              En lösvirkeshus är inte bara ett hus – det är en investering för framtiden. Jag bygger med fokus på hållbarhet, energieffektivitet och kvalitet så att ditt hem stannar vackert och funktionellt i många decennier.
            </p>

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
            Redo att bygga ditt drömhus?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Kontakta mig idag för en kostnadsfri konsultation. Vi diskuterar ditt projekt, tomten och hur jag kan hjälpa dig att bygga ett fantastiskt hus.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="dark" size="xl" asChild>
              <Link href="/kontakt">Begär offert</Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-gray-800 text-gray-800 hover:bg-gray-100">
              <Link href="/om-oss">Läs mer om mig</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
