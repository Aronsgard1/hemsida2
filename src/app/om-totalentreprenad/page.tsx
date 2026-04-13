import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Totalentreprenad | Aronsgård Bygg & Service",
  description:
    "Läs mer om totalentreprenad från Aronsgård Bygg & Service. Vi tar ansvar för hela projektet från idé till färdigt hem.",
  alternates: { canonical: "/om-totalentreprenad" },
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
      name: "Totalentreprenad",
      item: "https://aronsgard-bygg.se/om-totalentreprenad",
    },
  ],
};

export default function OmTotalentreprenadadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Totalentreprenad" }]} />

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          {/* Text */}
          <div className="mb-12 md:mb-16">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Totalentreprenad
            </p>
            <h1 className="mb-6 font-serif">Från idé till färdigt hem</h1>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Totalentreprenad betyder att jag tar fullt ansvar för hela projektet från start till målsnöre. Du presenterar din idé och vision – jag hanterar allt annat. Det är ett effektivt och bekymringsfritt sätt att bygga, eftersom du har en enda kontaktperson att förhålla dig till.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Från första ritningen till slutlig överlämning är jag ansvarig för arkitektur, konstruktion, material val, entreprenörer och alla detaljer. Jag säkerställer att projektet följer tidsplan och budget, och levererar ett hem som motsvarar eller överträffar dina förväntningar.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Som totalentreprenör kombinerar jag mitt byggkunnande med erfarenhet inom projektledning. Jag förstår både de tekniska och praktiska aspekterna, och kan därför ge dig det bästa resultatet för dina pengar.
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
            Redo att ta nästa steg?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Kontakta mig idag för en kostnadsfri konsultation. Vi diskuterar ditt projekt och hur jag kan hjälpa dig att förverkliga din vision.
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
