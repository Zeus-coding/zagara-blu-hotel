import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Car, Dog, Baby, Dumbbell, Utensils, Waves, Compass, Wifi } from "lucide-react";
import spaImg from "@/assets/spa.jpg";

export const Route = createFileRoute("/servizi")({
  head: () => ({
    meta: [
      { title: "Servizi Hotel — Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "Tutti i servizi dello Zagara Blu: parcheggio, pet friendly, area bambini, palestra, escursioni, attività sportive.",
      },
      { property: "og:title", content: "Servizi — Zagara Blu" },
      {
        property: "og:description",
        content: "Parcheggio, Spa, area bambini, palestra, pet friendly ed escursioni.",
      },
    ],
  }),
  component: ServiziPage,
});

const services = [
  { icon: Car, label: "Parcheggio", text: "Ampio parcheggio privato per gli ospiti." },
  { icon: Dog, label: "Pet Friendly", text: "Accogliamo i tuoi amici a quattro zampe." },
  {
    icon: Baby,
    label: "Area Bambini & Animazione",
    text: "Spazio giochi e attività organizzate per i più piccoli.",
  },
  { icon: Dumbbell, label: "Palestra", text: "Sala fitness attrezzata con vista mare." },
  {
    icon: Utensils,
    label: "Ristorante",
    text: "Cucina siciliana con prodotti locali e pesce fresco.",
  },
  {
    icon: Waves,
    label: "Accesso Mare",
    text: "Direttamente sul lungomare, spiaggia a pochi passi.",
  },
  {
    icon: Compass,
    label: "Escursioni & Trekking",
    text: "Organizziamo attività outdoor nei parchi e lungo la costa.",
  },
  { icon: Wifi, label: "Wi-Fi Ovunque", text: "Connessione veloce e gratuita in tutte le aree." },
];

function ServiziPage() {
  return (
    <>
      <PageHero
        eyebrow="Comfort & attività"
        title="Servizi"
        description="Tutto ciò che serve per un soggiorno completo — dal relax alle attività outdoor."
        image={spaImg}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map(({ icon: Icon, label, text }) => (
            <div
              key={label}
              className="p-8 border border-black/10 bg-white/60 rounded-sm hover:border-terracotta transition-colors"
            >
              <Icon size={28} className="text-sea mb-5" />
              <h3 className="font-serif text-xl mb-2">{label}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
