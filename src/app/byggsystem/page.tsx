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
            Byggsystemet
          </p>
          <h1 className="mb-6">Träbaserad konstruktion för hållbar framtid</h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Jag använder ett träbaserat byggsystem med masonitebalkar och träfibersolering. Det är en konstruktionsmetod som kombinerar moderna krav på energieffektivitet med traditionellt hantverk i trä.
          </p>
        </div>
      </section>

      {/* Huvudinnehål */}
      <section className="py-16 md:py-24 px-4 md:px-8 bg-muted/30">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-12">
            {/* Masonitebalkar */}
            <div>
              <h2 className="mb-4">Masonitebalkar som stomme</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Stomstrukturen bygger på masonitebalkar – en väl provad konstruktionslösning som är både stark och lätt. Dessa balkar formar huskroppen och ger den strukturella stabiliteten som krävs för att hålla över tid.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Masonitebalkar är framtidsvändiga eftersom de är gjorda av återvunnen wood fiber och kräver mindre energi att tillverka än helt nya massiva träkonstruktioner.
              </p>
            </div>

            {/* Träfibersolering */}
            <div>
              <h2 className="mb-4">Träfibersolering för klimatkomfort</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Isolering av träfibermaterial håller värmen inomhus under vintern och håller värmen ute under sommaren. Det är ett naturligt material som andas, vilket innebär att fukt kan passera genom väggarna på ett miljövänligt sätt.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Träfiberisolering är både miljövänlig och skapar ett behagligare inomhusklimat än syntiska isolermaterial. Det är ett val för den som bryr sig om både klimat och hälsa.
              </p>
            </div>

            {/* Helhet och hållbarhet */}
            <div>
              <h2 className="mb-4">En hålbar helhet</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Systemet är utformat för att hålla i generationer. Träbaserade konstruktioner åldras vackert – de blir bara finare med tiden, särskilt när de underhålls med omsorg.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Det här byggsystemet passar perfekt för lösvirkeshus som ska byggas snabbt men långsiktigt. Det är en väg till framtiden som respekterar både traditioner och miljön.
              </p>
            </div>

            {/* Varför detta system */}
            <div>
              <h2 className="mb-4">Varför jag valde detta system</h2>
              <p className="text-muted-foreground leading-relaxed">
                Jag har valt detta byggsystem för att det representerar allt jag tror på: kvalitet, hållbarhet och respekt för material. Det möjliggör snabb uppförande utan att offra långsiktighet eller estetik. Det är ett system som passar Jämtlands klimat och som kan justeras för individuelle önskemål utan stora komplikationer.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 pt-12 border-t border-border text-center">
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Intresserad av att bygga ett hus med detta system? Kontakta mig för att diskutera din projekt.
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
