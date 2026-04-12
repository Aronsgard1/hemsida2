import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Breadcrumbs from "@/components/Breadcrumbs";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Byggsystemet – Träbaserad konstruktion | Aronsgård Bygg",
  description:
    "Läs mer om det träbaserade byggsystemet vi använder – masonitebalkar, träfibersolering och hållbar konstruktion för framtidens hem.",
  alternates: { canonical: "/byggsystem" },
};

export default function ByggsystemPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Byggsystemet" }]} />

      {/* Intro */}
      <section className="py-16 md:py-24 px-4 md:px-8">
        <div className="container mx-auto max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Vårt byggsystem
          </p>
          <h1 className="mb-6 font-serif">Genomtänkta konstruktioner i trä</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Jag bygger lösvirkeshus där konstruktion, material och hantverk samverkar för att skapa hållbara hem. Genom att arbeta med träbaserade byggsystem kan jag skapa hus som är energieffektiva, hållbara och behagliga att bo i under lång tid.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Grunden i konstruktionen är ett system där masonitebalkar kombineras med träfiberisolering. Det är en modern träbaserad lösning som ger flera tekniska och praktiska fördelar jämfört med traditionella konstruktioner.
          </p>
        </div>
      </section>

      {/* Huvudinnehål */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            {/* Konstruktion med masonitebalkar */}
            <div>
              <h2 className="mb-4 font-serif">Konstruktion med masonitebalkar</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Masonitebalkar används i väggar, tak och bjälklag för att skapa en stabil och energieffektiv stomme. Balkarna består av träflänsar med en livskiva av träfiber, vilket gör konstruktionen både stark och lätt.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Den här typen av konstruktion minskar mängden massivt trä i väggarna och därmed också köldbryggor. Resultatet blir en mer energieffektiv byggnad där isoleringen kan arbeta mer effektivt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Masonitebalkar gör det också enklare att dra installationer i konstruktionen utan att kompromissa med hållfastheten.
              </p>
            </div>

            {/* Träfibersolering */}
            <div>
              <h2 className="mb-4 font-serif">Träfiberisolering</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Som isolering använder jag gärna träfiber, ett material som tillverkas av naturliga träfibrer.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Till skillnad från många traditionella isoleringsmaterial har träfiber en högre densitet, vilket ger flera fördelar:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold mt-1">✓</span>
                  <span className="text-muted-foreground">Bättre värmelagring</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold mt-1">✓</span>
                  <span className="text-muted-foreground">Stabilare inomhusklimat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold mt-1">✓</span>
                  <span className="text-muted-foreground">God ljuddämpning</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-semibold mt-1">✓</span>
                  <span className="text-muted-foreground">Diffusionsöppen konstruktion</span>
                </li>
              </ul>
              <p className="text-muted-foreground leading-relaxed">
                Det innebär att huset kan hantera fukt på ett naturligt sätt och bidra till ett mer behagligt inomhusklimat.
              </p>
            </div>

            {/* Ett sundare hus att bo i */}
            <div>
              <h2 className="mb-4 font-serif">Ett sundare hus att bo i</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                När konstruktionen byggs upp av träbaserade material skapas ett hus som upplevs naturligt och behagligt att bo i. Materialen arbetar tillsammans och bidrar till en balanserad inomhusmiljö.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Trä är också ett material som lagrar koldioxid under hela sin livstid, vilket gör träbaserade konstruktioner till ett mer hållbart val ur ett klimatperspektiv.
              </p>
            </div>

            {/* Friheten i lösvirkeshus */}
            <div>
              <h2 className="mb-4 font-serif">Friheten i lösvirkeshus</h2>
              <p className="text-muted-foreground leading-relaxed">
                Genom att bygga i lösvirke kan varje hus anpassas efter platsen, arkitekturen och kundens behov. Konstruktionen är flexibel och ger stor frihet i planlösning, materialval och detaljer.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Det gör det möjligt att skapa hus där arkitektur, konstruktion och snickeri bildar en helhet – från stomme till handbyggd inredning.
              </p>
            </div>

            {/* Från konstruktion till färdigt hem */}
            <div>
              <h2 className="mb-4 font-serif">Från konstruktion till färdigt hem</h2>
              <p className="text-muted-foreground leading-relaxed">
                Min ambition är att inte bara bygga huset utan att skapa hela hemmet. Därför arbetar jag gärna i projekt där jag kan leda processen från idé till färdigt resultat.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                Det kan innebära allt från konstruktion och byggnation till specialsnickerier som kök, garderober och andra fasta inredningar – allt byggt med samma materialkänsla och hantverksfokus.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Intresserad av att bygga ett hus med detta system? Kontakta mig för att diskutera ditt projekt.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link href="/kontakt">Begär offert</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/om-oss">Läs mer om mig</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
