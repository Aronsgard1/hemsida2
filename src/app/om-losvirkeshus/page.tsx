import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageCarousel from "@/components/ImageCarousel";

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

            {/* Bildspel - Lösvirkeshus projekt */}
            <ImageCarousel
              images={[
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F4dff2758a33445679bc1b38899d7cc6a", alt: "Lösvirkeshus projekt 1" },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Ffb06e0510c514846a0fddc6f92142e96", alt: "Lösvirkeshus projekt 2" },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F896dd755d9804eb0b03da02c6fbd0dd9", alt: "Lösvirkeshus projekt 3", rotation: 90 },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fe565c27af05d41ef80b25b18e6f0ecb0", alt: "Lösvirkeshus projekt 4", rotation: 90 },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Faa60e1df74ad4df7a6d7cff44a10dfa9", alt: "Lösvirkeshus projekt 5", rotation: 90 },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Ff14dae4901354747b83e9c16e2cfee43", alt: "Lösvirkeshus projekt 6", rotation: 90 },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F7ed76dc6bc6f4af199d211aca3892580", alt: "Lösvirkeshus projekt 7", rotation: 90 },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fa798fd9b5723479fa5d9babbdee1a0b8", alt: "Lösvirkeshus projekt 8" },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F4950e890da8048d6a7fa8e101f8e6b4c", alt: "Lösvirkeshus projekt 9" },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fce1eb982c3c4418e9d1ea842fa1d672d", alt: "Lösvirkeshus projekt 10" },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fad06067e4f6746c6ad0f1e7f2c5135e3", alt: "Lösvirkeshus projekt 11" },
                { src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fc8f05fcca50e455cbc18b06bf0491a3e", alt: "Lösvirkeshus projekt 12" },
              ]}
            />
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
