import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight, Hammer, TreePine, Shield, Users } from "lucide-react";
import { pastProjects } from "@/lib/projects";
import TjansterSection from "@/components/TjansterSection";
import FadeInOnScroll from "@/components/FadeInOnScroll";

export const metadata: Metadata = {
  title: "Byggfirma i Jämtland | Aronsgård Bygg & Service",
  description:
    "Aronsgård Bygg & Service – byggfirma i Hallen, Jämtland. Nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader. Ring 073-800 09 79.",
  alternates: { canonical: "/" },
};


const values = [
  {
    icon: Hammer,
    title: "Bred erfarenhet",
    desc: "Allt från platsbyggda kök\u00A0till jordbruksbyggnader – vi har kunskapen som krävs.",
  },
  {
    icon: TreePine,
    title: "Lokal förankring",
    desc: "Vi utgår från Hallen och känner Jämtlands klimat och byggtraditioner.",
  },
  {
    icon: Shield,
    title: "Kvalitet först",
    desc: "Varje projekt genomförs med fokus på hållbarhet och noggrannhet.",
  },
  {
    icon: Users,
    title: "Flexibelt upplägg",
    desc: "Fast pris eller löpande kostnad – vi anpassar oss efter dig.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://aronsgard-bygg.se/#business",
  name: "Aronsgård Bygg & Service",
  description:
    "Byggfirma i Jämtland – nybyggnation, renoveringar, takbyten, finsnickeri och om- & tillbyggnader.",
  url: "https://aronsgard-bygg.se",
  telephone: "+46738000979",
  email: "aronsgard.bos@icloud.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Trägsta 17",
    addressLocality: "Hallen",
    postalCode: "284 91",
    addressRegion: "Jämtland",
    addressCountry: "SE",
  },
  geo: { "@type": "GeoCoordinates", latitude: 63.18, longitude: 14.5 },
  image: "https://aronsgard-bygg.se/images/og-aronsgard-bygg.jpg",
  priceRange: "$$",
  areaServed: { "@type": "State", name: "Jämtland" },
  sameAs: ["https://www.instagram.com/snickeridagboken/"],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />

      {/* Hero – helskärm */}
      <section
        className="relative flex items-end"
        style={{
          height: "calc(100vh - 48px)",
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F2921a636d058409dabed0df2d886c66d')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >

        {/* Fade to dark overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.35) 0%, rgba(0, 0, 0, 0.25) 30%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 100%)"
          }}
        />

        {/* Textinnehåll */}
        <div className="relative z-10 container mx-auto px-8 md:px-16 pb-20 pt-40">
          <p className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
            Byggfirma i Jämtland
          </p>
          <h1 className="text-white leading-tight mb-6 max-w-2xl font-serif">
            Där idé blir verklighet.
          </h1>
          <p className="text-white text-lg max-w-lg leading-relaxed mb-10">
            Bred erfarenhet inom nybyggnation, renoveringar och
            finsnickeri. Vi utgår från Hallen och verkar i hela Jämtland.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="xl" asChild className="bg-slate-800 border-2 border-slate-800 text-white hover:bg-slate-900 transition-colors">
              <Link href="/kontakt">Begär offert</Link>
            </Button>
            <Button size="xl" asChild className="bg-slate-700/40 border border-slate-600/50 text-white hover:bg-slate-700/60 backdrop-blur-sm">
              <a href="tel:+46738000979" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                073-800 09 79
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Om mig */}
      <section className="py-12 md:py-16 px-4 md:px-8 fade-in-scroll" style={{ backgroundColor: "#f5f1ec" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* Bild */}
            <div className="relative rounded-xl overflow-hidden self-stretch min-h-64">
              <Image
                src="/images/Robin om oss.jpeg"
                alt="Robin från Aronsgård Bygg & Service på byggarbetsplatsen"
                fill
                loading="lazy"
                className="object-cover object-center"
                style={{ margin: 'auto' }}
              />
            </div>
            {/* Text */}
            <div>
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
                Om mig
              </p>
              <h2 className="mb-4 font-serif">Med rötter i snickeriet och en passion för trä</h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                Mitt intresse för byggande började i min pappas snickeri och har följt med mig sedan dess. Idag driver jag min egen byggfirma där jag skapar genomtänkta lösningar i trä – från konstruktion till färdig inredning. Jag bygger hem där varje detalj har en tanke bakom sig, och där helheten alltid står i centrum.
              </p>
              <Link
                href="/om-oss"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Dethär är min historia <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Byggsystem */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#f5f1ec" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Vänster kolumn */}
            <div>
              <h2 className="mb-6 font-serif">Ett sundare sätt att bygga</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Jag bygger lösvirkeshus med masonitebalkar och träfiberisolering – ett modernt träbaserat system som ger energieffektiva, hållbara och behagliga hem.
              </p>

              {/* Punktlista */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-semibold mt-1">✓</span>
                  <span className="text-foreground">Färre köldbryggor</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-semibold mt-1">✓</span>
                  <span className="text-foreground">Bättre inomhusklimat</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-semibold mt-1">✓</span>
                  <span className="text-foreground">Naturliga material</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-800 font-semibold mt-1">✓</span>
                  <span className="text-foreground">Stabil temperatur året runt</span>
                </li>
              </ul>

              <Link
                href="/byggsystem"
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
              >
                Läs mer om byggsystemet <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Höger kolumn - Bild */}
            <div className="relative rounded-lg overflow-hidden h-96">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2Fd20ded055ac448c9ba66f4d02469483b"
                alt="Träbaserad konstruktion med masonitebalkar"
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lösvirkeshus */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#3d3d3d" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 font-serif text-white">Lösvirkeshus</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Skräddarsydda hus byggda från grunden. Vi hanterar hela processen från tomtbesiktning och grundarbete till färdigställt hus. Med lång erfarenhet av nybyggnation i Jämtlands klimat vet vi vilka material och metoder som håller.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="dark" size="lg" asChild>
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                  <Link href="/om-oss">Läs mer</Link>
                </Button>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden h-80">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F7272fabb3fdc4547af8b6a10e8c1f7ae"
                alt="Lösvirkeshus – nybyggnation från grunden"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialsnickerier */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#e8dfd4" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-80 order-2 lg:order-1">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F892589fddda0499285cb2caf101f6ef6"
                alt="Specialsnickerier – handbyggd inredning"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-serif">Specialsnickerier</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Kök, garderober och inredning byggt för hand. Från handbyggda kök och garderober till specialsnickerier – vi tillverkar skräddarsydda lösningar i vår verkstad. Varje detalj bearbetas noggrant för ett resultat som håller och ser bra ut i generationer.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="dark" size="lg" asChild>
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/om-oss">Läs mer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Totalentreprenad */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#3d3d3d" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="mb-6 font-serif text-white">Totalentreprenad</h2>
              <p className="text-white/80 leading-relaxed mb-6">
                Från idé till färdigt hem. Vi tar ansvar för hela projektet, från initial planering till slutlig överlämning. Du behöver bara presentera idén, vi hanterar allt annat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="dark" size="lg" asChild>
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white/10">
                  <Link href="/om-oss">Läs mer</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-80">
              {/* Back image */}
              <div className="absolute inset-0 rounded-lg overflow-hidden">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F0ebe6c48155a44929d3455f527185c32"
                  alt="Totalentreprenad – från idé till färdigt hem"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Front image with offset overlap */}
              <div className="absolute bottom-8 right-8 w-3/5 h-3/5 rounded-lg overflow-hidden shadow-2xl z-10">
                <Image
                  src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F7204158639e84f849bfd50bfd90948cb"
                  alt="Nybyggnation exempel"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Om- & tillbyggnad */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#e8dfd4" }}>
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-lg overflow-hidden h-80 order-2 lg:order-1">
              <Image
                src="https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F0a7486edbfb14e3fa87fb819c5ce7021"
                alt="Om- & tillbyggnad – utveckling av befintliga hem"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="mb-6 font-serif">Om- & tillbyggnad</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Utveckling av befintliga hem. Vill du bygga ut, lägga till ett uterum, bastu eller förråd? Vi planerar och genomför tillbyggnader som smälter in naturligt med befintlig byggnad, med full hänsyn till gällande byggregler.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="dark" size="lg" asChild>
                  <Link href="/kontakt">Kontakta oss</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/om-oss">Läs mer</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Så arbetar jag */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#ffffff" }}>
        <div className="container mx-auto">
          <div className="text-center mb-14">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              Så arbetar jag
            </p>
            <h2 className="mb-6 font-serif">Från idé till färdigt hem</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Steg 1 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center text-2xl font-serif font-bold">
                  1
                </div>
              </div>
              <h3 className="text-lg font-serif mb-3">Dialog & idé</h3>
              <p className="text-muted-foreground leading-relaxed">
                Vi går igenom dina behov och visioner.
              </p>
            </div>

            {/* Steg 2 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center text-2xl font-serif font-bold">
                  2
                </div>
              </div>
              <h3 className="text-lg font-serif mb-3">Planering & byggnation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Jag leder projektet och bygger med fokus på kvalitet.
              </p>
            </div>

            {/* Steg 3 */}
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-gray-800 text-white flex items-center justify-center text-2xl font-serif font-bold">
                  3
                </div>
              </div>
              <h3 className="text-lg font-serif mb-3">Färdigt hem</h3>
              <p className="text-muted-foreground leading-relaxed">
                Ett genomtänkt resultat där allt hänger ihop.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parallax landscape image */}
      <section
        className="relative w-full h-96 md:h-[50vh]"
        style={{
          backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F2921a636d058409dabed0df2d886c66d')",
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
        <div className="absolute inset-0 bg-black/10" />
      </section>

      {/* CTA */}
      <section className="section-padding fade-in-scroll" style={{ backgroundColor: "#e8dfd4" }}>
        <div className="container mx-auto text-center">
          <h2 className="mb-4 font-serif">
            Låt oss skapa något tillsammans.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-lg">
            Vi erbjuder fast pris på totalentreprenad eller arbete på löpande
            kostnad. ROT-avdrag tillämpas där det är aktuellt.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="dark" size="xl" asChild>
              <Link href="/kontakt">Kontakta oss idag</Link>
            </Button>
            <Button variant="outline" size="xl" asChild className="border-gray-800 text-gray-800 hover:bg-gray-100">
              <a href="tel:+46738000979" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Ring oss
              </a>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
