import { useState, type FormEvent } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/page-hero";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import heroSea from "@/assets/hero-sea.jpg";
import { bookingMessage, parseBookingSearch, type BookingSearch } from "@/lib/booking";

export const Route = createFileRoute("/contatti")({
  head: () => ({
    meta: [
      { title: "Contatti — Zagara Blu Hotel & Spa" },
      {
        name: "description",
        content:
          "Contatta lo Zagara Blu: indirizzo, telefono, email e form di contatto. Sul lungomare di Marina di Serralba, Sicilia.",
      },
      { property: "og:title", content: "Contatti — Zagara Blu" },
      {
        property: "og:description",
        content: "Come raggiungerci e come prenotare a Marina di Serralba.",
      },
    ],
  }),
  validateSearch: (search: Record<string, unknown>): BookingSearch => parseBookingSearch(search),
  component: ContattiPage,
});

function ContattiPage() {
  const search = Route.useSearch();
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(() => bookingMessage(search));

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    if (name.length > 100 || email.length > 255 || message.length > 1000) return;
    // Demo site: there is no backend, so nothing is sent or stored.
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Come raggiungerci"
        title="Contatti"
        description="Siamo a Marina di Serralba, sul lungomare del Mar Tirreno."
        image={heroSea}
      />

      <section className="container-page py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          <div>
            <h2 className="font-serif text-3xl mb-8">Informazioni</h2>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <div className="size-11 shrink-0 border border-black/10 grid place-items-center rounded-full">
                  <MapPin size={18} className="text-sea" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold mb-1">Indirizzo</p>
                  <p className="text-muted-foreground">
                    Lungomare dei Gelsomini 12, Marina di Serralba, Sicilia
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="size-11 shrink-0 border border-black/10 grid place-items-center rounded-full">
                  <Phone size={18} className="text-sea" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold mb-1">Telefono</p>
                  <a
                    href="tel:+390001234567"
                    className="text-muted-foreground hover:text-terracotta"
                  >
                    +39 000 123 4567
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="size-11 shrink-0 border border-black/10 grid place-items-center rounded-full">
                  <Mail size={18} className="text-sea" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold mb-1">Email</p>
                  <a
                    href="mailto:info@zagarablu.example"
                    className="text-muted-foreground hover:text-terracotta"
                  >
                    info@zagarablu.example
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="size-11 shrink-0 border border-black/10 grid place-items-center rounded-full">
                  <Clock size={18} className="text-sea" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-widest font-bold mb-1">Reception</p>
                  <p className="text-muted-foreground">Tutti i giorni · 07:00 — 23:00</p>
                </div>
              </li>
            </ul>

            <div className="aspect-video mt-10 overflow-hidden rounded-sm">
              <iframe
                title="Mappa della Sicilia"
                src="https://www.openstreetmap.org/export/embed.html?bbox=12.35%2C36.60%2C15.70%2C38.35&layer=mapnik"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif text-3xl mb-8">Scrivici</h2>
            {sent ? (
              <div className="p-8 bg-sea text-cream rounded-sm">
                <p className="font-serif text-xl mb-2">Grazie!</p>
                <p className="text-cream/80 text-sm">
                  Ti risponderemo il prima possibile. (Questo è un sito dimostrativo: la richiesta
                  non viene inviata davvero.)
                </p>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-5">
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">
                    Nome
                  </span>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full border-b border-black/15 py-3 focus:outline-none focus:border-sea bg-transparent"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full border-b border-black/15 py-3 focus:outline-none focus:border-sea bg-transparent"
                  />
                </label>
                <label className="block">
                  <span className="text-[11px] uppercase tracking-widest font-bold text-muted-foreground">
                    Messaggio
                  </span>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-2 w-full border-b border-black/15 py-3 focus:outline-none focus:border-sea bg-transparent resize-none"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full bg-sea text-cream py-4 font-bold uppercase text-xs tracking-widest hover:bg-terracotta transition-colors"
                >
                  Invia richiesta
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
