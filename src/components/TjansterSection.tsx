"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, X, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface Service {
  title: string
  img: string
  imgCaption: string
  desc: string
  longDesc: string
  details: string[]
}

const services: Service[] = [
  {
    title: "Lösvirkeshus",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F7272fabb3fdc4547af8b6a10e8c1f7ae",
    imgCaption: "Lösvirkeshus – nybyggnation från grunden",
    desc: "Skräddarsydda hus byggda från grunden.",
    longDesc:
      "Vi hanterar hela processen från tomtbesiktning och grundarbete till färdigställt hus. Med lång erfarenhet av nybyggnation i Jämtlands klimat vet vi vilka material och metoder som håller.",
    details: [
      "Lösvirkeshus & timmerhus",
      "Grundläggning, stomresning & tak",
      "Färdig överlämning",
    ],
  },
  {
    title: "Specialsnickerier",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F892589fddda0499285cb2caf101f6ef6",
    imgCaption: "Specialsnickerier – handbyggd inredning",
    desc: "Kök, garderober och inredning byggt för hand.",
    longDesc:
      "Från handbyggda kök och garderober till specialsnickerier – vi tillverkar skräddarsydda lösningar i vår verkstad. Varje detalj bearbetas noggrant för ett resultat som håller och ser bra ut i generationer.",
    details: [
      "Handbyggda kök",
      "Garderober & möbler",
      "Allt skräddarsytt efter dina önskemål",
    ],
  },
  {
    title: "Totalentreprenad",
    img: "https://cdn.builder.io/api/v1/image/assets%2F6e3f03f48a5e4360a63ce2a8773f264b%2F0ebe6c48155a44929d3455f527185c32",
    imgCaption: "Totalentreprenad – från idé till färdigt hem",
    desc: "Från idé till färdigt hem.",
    longDesc:
      "Vi tar ansvar för hela projektet, från initial planering till slutlig överlämning. Du behöver bara presentera idén, vi hanterar allt annat.",
    details: [
      "Hela projektet under ledning",
      "Samordning av hantverkare",
      "Tid och budgetgaranti",
    ],
  },
  {
    title: "Om- & tillbyggnad",
    img: "/images/altanrullstols anpassning rätt.jpg",
    imgCaption: "Om- & tillbyggnad – utveckling av befintliga hem",
    desc: "Utveckling av befintliga hem.",
    longDesc:
      "Vill du bygga ut, lägga till ett uterum, bastu eller förråd? Vi planerar och genomför tillbyggnader som smälter in naturligt med befintlig byggnad, med full hänsyn till gällande byggregler.",
    details: [
      "Uterum, verandor & altaner",
      "Bastur, förråd & garage",
      "Anpassning av befintliga byggnader",
    ],
  },
]

function ServiceModal({
  service,
  onClose,
}: {
  service: Service
  onClose: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.93, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 18 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden flex flex-col md:flex-row"
        style={{ maxHeight: "88vh" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Vänster – bild */}
        <div className="relative md:w-[48%] shrink-0">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full">
            <Image
              src={service.img}
              alt={service.imgCaption}
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Bildtext */}
          <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-gradient-to-t from-black/70 to-transparent">
            <p className="text-white/80 text-xs leading-snug">{service.imgCaption}</p>
          </div>
        </div>

        {/* Höger – info */}
        <div className="flex-1 flex flex-col overflow-y-auto p-6">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 z-10 bg-white/90 hover:bg-white text-foreground rounded-full p-1.5 shadow transition-colors md:static md:self-end md:mb-2"
            aria-label="Stäng"
          >
            <X className="w-4 h-4" />
          </button>

          <h2 className="text-2xl font-serif mb-3">{service.title}</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-5">
            {service.longDesc}
          </p>

          <ul className="space-y-2 mb-6">
            {service.details.map((d) => (
              <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
                <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <div className="flex gap-3 mt-auto pt-5 border-t border-border">
            <Link
              href="/kontakt"
              onClick={onClose}
              className="bg-primary text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/90 transition-colors"
            >
              Begär offert
            </Link>
            <a
              href="tel:+46738000979"
              className="border border-border px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-muted transition-colors"
            >
              073-800 09 79
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function TjansterSection() {
  const [selected, setSelected] = useState<Service | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s) => (
          <button
            key={s.title}
            onClick={() => setSelected(s)}
            className="group text-left bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={s.img}
                alt={s.imgCaption}
                width={896}
                height={672}
                loading="lazy"
                className="w-full h-full object-cover group-hover:brightness-105 transition-all duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-serif mb-2 group-hover:text-primary transition-colors">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4">{s.desc}</p>
              <span className="inline-flex items-center text-primary text-sm font-semibold gap-1">
                Läs mer{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <ServiceModal service={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </>
  )
}
