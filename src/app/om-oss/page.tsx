import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Om oss – Byggfirma i Hallen | Aronsgård Bygg",
  description:
    "Lär känna Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland med bred erfarenhet inom timmerhus och byggbranschen. Kvalitet och hållbarhet.",
  alternates: { canonical: "/om-oss" },
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
      name: "Om oss",
      item: "https://aronsgard-bygg.se/om-oss",
    },
  ],
};

const stats = [
  { value: "2018", label: "Grundat" },
  { value: "100+", label: "Genomförda projekt" },
  { value: "Hela Jämtland", label: "Verksamhetsområde" },
];

export default function OmOssPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <Breadcrumbs items={[{ label: "Om oss" }]} />

      {/* Intro – bild + text */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Bild */}
            <div className="relative rounded-2xl overflow-hidden aspect-[3/4] lg:aspect-auto lg:self-stretch min-h-96">
              <Image
                src="/images/Robin om oss.jpeg"
                alt="Robin Aronsson – Aronsgård Bygg & Service"
                fill
                className="object-cover object-center"
                priority
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Om oss
              </p>
              <h1 className="mb-6">Byggt på erfarenhet och förtroende</h1>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Jag startade mitt byggföretag 2018, men mitt intresse för trä och byggande började långt tidigare. Redan i skolåldern tillbringade jag mycket tid i min pappas snickeri och verkstad där jag fick prova, experimentera och utveckla min kreativitet. Min pappa arbetade som trapp/inrednings snickare och blev tidigt en stor inspirationskälla för mig. Jag minns hur jag ofta cyklade till hans arbetsplats efter skolan för att titta på de vackra trappor och möbler som tog form där – och ibland hade jag turen att få med mig en bit ädelträ hem att skapa något eget av.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Som barn byggde jag ständigt olika projekt. Tillsammans med kompisar byggde vi lådbilar där jag ofta stod för både design och arbete, medan de bidrog med sällskap och skratt. Jag byggde också egna "Boombox"-lådor i plywood där jag monterade högtalare jag hittat på återvinningen, målade dem i starka färger och stänkte glitter över dem för att ge dem en personlig stil. Samtidigt började jag skapa små möbler och lösningar till hemmet – till exempel en liten bänk till badkaret där man kunde ställa värmeljus och ha stöd för en bok.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                På gymnasiet valde jag byggprogrammet och har sedan dess arbetat på olika byggföretag där jag fått bred erfarenhet inom branschen. Med åren har mitt intresse för att skapa genomtänkta helheter bara blivit starkare.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Min vision är att kunna leverera nyckelfärdiga hus, gärna byggda med återvunna och hållbara material. Jag vill ta rollen som totalentreprenör och leda hela projektet – från idé till färdigt hem. I dessa projekt vill jag också skapa den fasta inredningen själv: handbyggda kök, garderober, kommoder och andra specialsnickerier som ger varje hem en unik karaktär och en tydlig hantverkskänsla.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                Materialet spelar en central roll i mitt arbete. Oavsett om det handlar om massivt trä eller faner, jämtländsk furu eller ädelträ som ask, ek eller valnöt, strävar jag alltid efter att skapa hållbara och vackra lösningar där hantverket får stå i centrum.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                En viktig del av min framtida inriktning är att nischa mig mot lösvirkeshus byggda i träbaserade konstruktioner, där stommar av masonitebalkar kombineras med träfiberisolering. Det är en byggmetod som både känns rätt och gör gott – för huset, för människorna som bor i det och för miljön.
              </p>
              <p className="text-foreground/70 leading-relaxed mb-8">
                För mig handlar byggande inte bara om att sätta upp väggar. Det handlar om att skapa hem med själ, där material, hantverk och funktion möts i något som håller över generationer.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-t border-border mb-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-serif font-semibold text-foreground">{s.value}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>

              <Button variant="hero" asChild>
                <Link href="/kontakt">Kontakta oss</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax – byt ut bilden när naturbilden är klar */}
      <div
        className="parallax-bg h-56 md:h-72"
        style={{ backgroundImage: "url('/images/Parallax%20naturbild.jpg')" }}
      />

      {/* Vår filosofi */}
      <section className="py-16 px-4 md:px-8 bg-muted/40">
        <div className="container mx-auto max-w-3xl text-center">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Vår filosofi
          </p>
          <h2 className="mb-6">Vi bygger mer än hus</h2>
          <p className="text-muted-foreground leading-relaxed text-lg">
            För oss handlar byggande om mer än att sätta upp väggar och lägga
            tak. Det handlar om att lyssna på kunden, förstå platsen och
            leverera något som känns rätt – både direkt och om tjugo år.
            Jämtlands natur och klimat ställer höga krav, och det är krav vi
            välkomnar.
          </p>
        </div>
      </section>
    </>
  );
}
