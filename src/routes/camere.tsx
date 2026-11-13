import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { Gallery } from "@/components/gallery";
import { BookingWidget } from "@/components/booking-widget";
import { Waves, Bath, Wifi, Snowflake, Tv, Lock } from "lucide-react";
import roomImg from "@/assets/room.jpg";
import room2 from "@/assets/room-2.jpg";

export const Route = createFileRoute("/camere")({
  head: () => ({
    meta: [
      { title: "Camere Vista Mare — Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "32 camere 4 stelle a Marina di Serralba: arredamento moderno, quasi tutte vista mare, doppio guanciale, bagno con vasca o doccia, aria condizionata, Wi-Fi.",
      },
      { property: "og:title", content: "Camere Vista Mare — Zagara Blu" },
      {
        property: "og:description",
        content: "32 camere dal design contemporaneo, quasi tutte vista mare.",
      },
    ],
  }),
  component: CamerePage,
});

const roomTypes = [
  {
    name: "Camera Classic",
    subtitle: "Vista giardino · 20 mq",
    img: room2,
    description:
      "Accogliente e luminosa, arredata con essenzialità mediterranea. Bagno con doccia, doppio guanciale, tutti i comfort di un 4 stelle.",
  },
  {
    name: "Camera Vista Mare",
    subtitle: "Balcone fronte mare · 24 mq",
    img: roomImg,
    description:
      "La nostra tipologia più richiesta: risveglio con il suono delle onde e balcone privato affacciato sul Tirreno.",
  },
  {
    name: "Suite Deluxe",
    subtitle: "Vista mare panoramica · 32 mq",
    img: room2,
    description:
      "Ambiente più ampio con zona relax, vasca da bagno e vista panoramica sulla costa di Marina di Serralba.",
  },
];

const amenities = [
  { icon: Waves, label: "Vista mare" },
  { icon: Bath, label: "Vasca o doccia" },
  { icon: Snowflake, label: "Aria condizionata" },
  { icon: Tv, label: "TV LCD" },
  { icon: Wifi, label: "Wi-Fi gratuito" },
  { icon: Lock, label: "Cassaforte & frigobar" },
];

function CamerePage() {
  return (
    <>
      <PageHero
        eyebrow="32 camere · Vista mare"
        title="Camere & Suite"
        description="Design contemporaneo, materiali naturali e il Tirreno come sfondo costante."
        image={roomImg}
      />

      <section className="container-page py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Le nostre 32 camere sono arredate con gusto sobrio e moderno. Ognuna dispone di doppio
            guanciale, aria condizionata, TV LCD, frigobar, cassaforte e Wi-Fi. La maggior parte
            gode di vista mare diretta.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-8 mt-12 md:mt-16">
          {amenities.map(({ icon: Icon, label }) => (
            <div key={label} className="flex flex-col items-center text-center gap-3">
              <div className="size-12 border border-black/10 grid place-items-center rounded-full">
                <Icon size={20} className="text-sea" />
              </div>
              <span className="text-xs uppercase tracking-widest">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="container-page pb-16 md:pb-24 space-y-16 md:space-y-24">
        {roomTypes.map((room, i) => (
          <article
            key={room.name}
            className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm bg-muted">
              <img
                src={room.img}
                alt={room.name}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="text-[11px] uppercase tracking-[0.3em] text-terracotta font-medium">
                {room.subtitle}
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl mb-5">{room.name}</h2>
              <p className="text-muted-foreground leading-relaxed">{room.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-white/50 py-16 md:py-24">
        <div className="container-page">
          <h2 className="font-serif text-3xl md:text-4xl mb-10">Galleria camere</h2>
          <Gallery
            columns={3}
            images={[
              { src: roomImg, alt: "Camera vista mare", caption: "Vista Mare" },
              { src: room2, alt: "Bagno con vasca", caption: "Bagno con vasca" },
              { src: roomImg, alt: "Balcone camera", caption: "Balcone privato" },
              { src: room2, alt: "Suite Deluxe", caption: "Suite Deluxe" },
              { src: roomImg, alt: "Camera classic", caption: "Camera Classic" },
              { src: room2, alt: "Dettaglio camera", caption: "Dettagli" },
            ]}
          />
        </div>
      </section>

      <section className="container-page py-16 md:py-20">
        <h2 className="font-serif text-3xl md:text-4xl mb-8 text-center">Verifica disponibilità</h2>
        <div className="max-w-4xl mx-auto">
          <BookingWidget />
        </div>
      </section>
    </>
  );
}
