import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/note-legali")({
  head: () => ({
    meta: [
      { title: "Termini e Condizioni — Zagara Blu" },
      { name: "description", content: "Termini, condizioni e note legali del sito Zagara Blu." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <article className="container-page py-16 md:py-24 max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl mb-8">Termini e Condizioni</h1>
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          L'utilizzo del sito Zagara Blu implica l'accettazione dei presenti termini e condizioni.
        </p>
        <h2 className="font-serif text-2xl text-ink mt-8">Prenotazioni</h2>
        <p>
          In questa versione dimostrativa le richieste di disponibilità vengono raccolte tramite il
          form di contatto e non costituiscono una prenotazione.
        </p>
        <h2 className="font-serif text-2xl text-ink mt-8">Proprietà intellettuale</h2>
        <p>
          Testi, immagini e contenuti del sito sono di proprietà di Zagara Blu Hotel & Spa e non
          possono essere riprodotti senza autorizzazione.
        </p>
        <p className="text-sm italic">
          Testo di esempio: questo è un sito dimostrativo per un hotel di fantasia.
        </p>
      </div>
    </article>
  ),
});
