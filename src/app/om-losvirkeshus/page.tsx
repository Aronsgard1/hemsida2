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
              Lösvirkeshus är perfekt för Jämtlands klimat. Jag bygger skräddarsydda hus från grunden, anpassade efter din vision och behov. Du kan komma med egna ritningar eller jag hjälper dig hitta en arkitekt. Från tomtbesiktning till färdigställt hus hanterar jag hela processen.
            </p>
            <p className="text-foreground/70 font-semibold mb-4">
              Träbaserad konstruktion med masonitebalkar
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Vi har byggt flera projekt med masonitebalkar och träfiberisolering – allt från bostadshus och garage till stall för hästar – med mycket fina resultat. Det är ett byggsystem som kombinerar energieffektivitet, kortare byggtid och ett behagligt inomhusklimat i en och samma lösning.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              Husen håller värmen bättre på vintern, står emot värme bättre på sommaren och får en konstruktion som känns både naturlig och genomtänkt. Samtidigt upplever vi en smidig byggprocess som sparar tid utan att kompromissa med kvaliteten.
            </p>
            <p className="text-foreground/70 leading-relaxed mb-8">
              För oss är det här ett modernt och hållbart sätt att bygga – där resultatet inte bara fungerar tekniskt, utan också känns rätt att leva i.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#e8dfd4" }}>
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif">
            Redo för ditt nya hem?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Kontakta mig för en kostnadsfri konsultation om ditt projekt.
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
