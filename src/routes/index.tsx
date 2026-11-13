import { createFileRoute, Link } from "@tanstack/react-router";
import { BookingWidget } from "@/components/booking-widget";
import heroSea from "@/assets/hero-sea.jpg";
import roomImg from "@/assets/room.jpg";
import apartmentImg from "@/assets/apartment.jpg";
import spaImg from "@/assets/spa.jpg";
import experiencesImg from "@/assets/experiences.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Zagara Blu Hotel & Spa — Hotel 4 stelle sul mare in Sicilia" },
      {
        name: "description",
        content:
          "Hotel 4 stelle fronte mare a Marina di Serralba: 32 camere vista mare, Residenze Zagara per famiglie, centro benessere Spa e attività nel cuore della Sicilia.",
      },
      { property: "og:title", content: "Zagara Blu — Hotel 4 stelle in Sicilia" },
      {
        property: "og:description",
        content:
          "Sul lungomare di Marina di Serralba: camere, residenze, Spa ed esperienze nella Sicilia autentica.",
      },
    ],
  }),
  component: Index,
});

const highlights = [
  {
    to: "/camere" as const,
    label: "Camere & Suite",
    img: roomImg,
    text: "32 camere dal design contemporaneo, quasi tutte vista mare, con doppio guanciale, aria condizionata e Wi-Fi.",
    cta: "Esplora le camere",
  },
  {
    to: "/appartamenti" as const,
    label: "Residenze Zagara",
    img: apartmentImg,
    text: "8 residenze indipendenti — anche al piano terra — per famiglie o soggiorni lunghi, con accesso a Spa e colazione.",
    cta: "Scopri gli appartamenti",
  },
  {
    to: "/spa" as const,
    label: "Spa & Benessere",
    img: spaImg,
    text: "Sauna, bagno turco e trattamenti personalizzati con essenze mediterranee per rigenerare corpo e mente.",
    cta: "Prenota un trattamento",
  },
  {
    to: "/esperienze" as const,
    label: "Esperienze in Sicilia",
    img: experiencesImg,
    text: "Trekking nel parco, escursioni nei borghi normanni, mare cristallino a due passi dalla reception.",
    cta: "Vivi il territorio",
  },
];

const reviews = [
  {
    quote:
      "Posizione impareggiabile fronte mare. La pulizia e la cura della Spa rendono il soggiorno indimenticabile. Personale squisito.",
    author: "Marco R.",
    source: "Coppia · Luglio",
  },
  {
    quote:
      "Le Residenze Zagara sono perfette per la nostra famiglia. Comodi, silenziosi e con tutti i servizi dell'hotel.",
    author: "Elena G.",
    source: "Famiglia · Agosto",
  },
  {
    quote:
      "Colazione ricca di prodotti locali, staff accogliente, vista mare mozzafiato. Torneremo sicuramente.",
    author: "Luca V.",
    source: "Amici · Settembre",
  },
];

function Index() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[92vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <img
          src={heroSea}
          alt="Vista aerea dello Zagara Blu sul lungomare di Marina di Serralba"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/25" />
        <div className="relative z-10 text-center text-cream px-4 max-w-4xl">
          <span className="block text-[11px] md:text-xs uppercase tracking-[0.3em] mb-5 text-cream/85">
            Marina di Serralba · Sicilia
          </span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] italic text-balance">
            L'essenza del mare
          </h1>
          <p className="mt-6 text-lg md:text-xl font-light max-w-2xl mx-auto text-cream/90">
            Un hotel 4 stelle sospeso tra il blu del Tirreno e la natura selvaggia della Sicilia
            settentrionale.
          </p>
        </div>

        {/* Floating Booking Widget */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-full max-w-5xl px-4">
          <BookingWidget floating />
        </div>
      </section>

      {/* Intro */}
      <section className="pt-40 md:pt-48 pb-16 md:pb-24 container-page">
        <div className="grid md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
              Ospitalità Siciliana
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight text-balance">
              Un rifugio mediterraneo tra il borgo e l'orizzonte
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Situato sul lungomare di Marina di Serralba, lo Zagara Blu è a conduzione familiare:
              ogni dettaglio è pensato per farti sentire a casa, con la cura di un'accoglienza
              autentica e la libertà del mare a pochi passi.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="pb-24 container-page">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {highlights.map((h) => (
            <Link key={h.to} to={h.to} className="group block">
              <div className="relative aspect-[4/5] overflow-hidden mb-5 bg-muted rounded-sm">
                <img
                  src={h.img}
                  alt={h.label}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <h3 className="font-serif text-2xl mb-2">{h.label}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{h.text}</p>
              <span className="text-xs font-bold uppercase tracking-widest border-b-2 border-terracotta pb-1 group-hover:text-terracotta transition-colors">
                {h.cta}
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-sea text-cream py-20 md:py-28">
        <div className="container-page">
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.3em] text-cream/70">Recensioni</span>
            <div className="flex justify-center gap-1 mt-4 mb-3">
              {[0, 1, 2, 3, 4].map((i) => (
                <span key={i} className="text-terracotta text-xl">
                  ★
                </span>
              ))}
            </div>
            <p className="font-serif text-xl italic">Eccellente — 4.8 / 5</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {reviews.map((r, i) => (
              <blockquote key={i} className="bg-cream/5 border border-cream/10 p-8 rounded-sm">
                <p className="font-serif text-lg md:text-xl leading-relaxed italic text-cream/95">
                  "{r.quote}"
                </p>
                <cite className="mt-6 block not-italic text-xs uppercase tracking-[0.2em] text-cream/60">
                  {r.author} — {r.source}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="py-20 md:py-28 container-page">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
              La posizione
            </span>
            <h2 className="mt-4 font-serif text-3xl md:text-5xl leading-tight mb-6">
              Il cuore della Sicilia autentica
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sul lungomare di Marina di Serralba, punto di partenza ideale per esplorare i borghi
              normanni della costa e i parchi dell'entroterra. Sabbia, trekking, borghi medievali:
              la Sicilia più vera.
            </p>
            <Link
              to="/contatti"
              className="inline-flex items-center bg-sea text-cream px-7 py-3.5 text-xs font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
            >
              Come raggiungerci
            </Link>
          </div>
          <div className="aspect-video overflow-hidden rounded-sm">
            <iframe
              title="Mappa della Sicilia"
              src="https://www.openstreetmap.org/export/embed.html?bbox=12.35%2C36.60%2C15.70%2C38.35&layer=mapnik"
              className="w-full h-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </>
  );
}
