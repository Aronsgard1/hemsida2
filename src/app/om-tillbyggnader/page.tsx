import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import ImageCarousel from "@/components/ImageCarousel";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Om- & Tillbyggnader | Aronsgård Bygg & Service",
  description:
    "Läs mer om om- och tillbyggnader från Aronsgård Bygg & Service. Vi planerar och genomför tillbyggnader som smälter in naturligt med befintlig byggnad.",
  alternates: { canonical: "/om-tillbyggnader" },
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
      name: "Om- & Tillbyggnader",
      item: "https://aronsgard-bygg.se/om-tillbyggnader",
    },
  ],
};

export default function OmTillbyggnadPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Om- & Tillbyggnader" }]} />

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Bild */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:self-stretch min-h-96">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F0a7486edbfb14e3fa87fb819c5ce7021"
                alt="Om- och tillbyggnader"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Om- & Tillbyggnader
              </p>
              <h1 className="mb-6 font-serif">Utveckling av befintliga hem</h1>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Många av mina projekt handlar om att utveckla och förbättra redan befintliga hem. Det är ofta här som de mest känsliga och personliga uppdragen uppstår, för det handlar om att förstärka och vidareutveckla något som redan betyder mycket för människor. Oavsett om det gäller att bygga ut med ett större kök, lägga till ett vackert uterum, installera en bastu eller bygga ett praktiskt förråd – jag förstår vikten av att tillbyggnaden smälter in naturligt med befintlig arkitektur.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Jag arbetar noggrannt med planering och design för att säkerställa att alla nya delar passar harmoniskt ihop med den befintliga byggnaden. Det handlar inte bara om teknisk skicklighet, utan också om att kunna läsa en byggnad och förstå dess karaktär. Samtidigt ser jag till att alla projekt följer gällande byggregler och krav för säkerhet och hållbarhet.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Från de första ritningarna till slutresultatet är jag din partner. Jag lyssnar på dina önskningar, förstår dina behov och levererar en tillbyggnad som ökar både värde och livskvalitet för många år framåt.
              </p>

              <Button variant="hero" asChild>
                <Link href="/kontakt">Kontakta mig</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projektbilder - Bildspel */}
      <section className="py-16 md:py-24 px-4 md:px-8" style={{ backgroundColor: "#f5f1ec" }}>
        <div className="container mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Projekt & Exempel
            </p>
            <h2 className="mb-4 font-serif">Exempel från mina tillbyggnader</h2>
          </div>

          <ImageCarousel
            images={[
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F669847cfa5c640649be188069e03b9d5",
                alt: "Tillbyggnad - modern design",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fe4dccc55090c4762aff89c9b29bce0a6",
                alt: "Inredning bastu",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F50c5e7284d1246f0b016d1f9ff9b6d95",
                alt: "Bastu interior",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F459b8816d55f482d8080bdd255023e8e",
                alt: "Tillbyggnad natt",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Ff0d83d52127947e791f49755fa441f20",
                alt: "Konstruktion med isolering",
              },
              {
                src: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F9fee25f8d9e6430e8d802f4a55676b83",
                alt: "Pergola och uterum",
              },
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#e8dfd4" }}>
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif">
            Vill du utveckla ditt hem?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Kontakta mig idag för att diskutera din idé. Jag hjälper dig att planera och genomföra tillbyggnaden på ett sätt som passar ditt hem och dina behov – både praktiskt och estetiskt.
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
