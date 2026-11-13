import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Zagara Blu" },
      { name: "description", content: "Informativa privacy del sito Zagara Blu." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <article className="container-page py-16 md:py-24 max-w-3xl prose-legal">
      <h1 className="font-serif text-4xl md:text-5xl mb-8">Privacy Policy</h1>
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          La presente informativa descrive le modalità di trattamento dei dati personali degli
          utenti che consultano il sito web di Zagara Blu Hotel & Spa.
        </p>
        <h2 className="font-serif text-2xl text-ink mt-8">Titolare del trattamento</h2>
        <p>
          Zagara Blu Hotel & Spa — Lungomare dei Gelsomini 12, Marina di Serralba, Sicilia. Email:
          info@zagarablu.example
        </p>
        <h2 className="font-serif text-2xl text-ink mt-8">Dati raccolti</h2>
        <p>
          Raccogliamo solo i dati strettamente necessari a rispondere alle richieste inviate tramite
          form di contatto (nome, email, messaggio).
        </p>
        <h2 className="font-serif text-2xl text-ink mt-8">Diritti dell'utente</h2>
        <p>
          Puoi in qualsiasi momento richiedere accesso, rettifica o cancellazione dei tuoi dati
          scrivendo a info@zagarablu.example.
        </p>
        <p className="text-sm italic">
          Testo di esempio: questo è un sito dimostrativo per un hotel di fantasia. Il form di
          contatto non invia né salva alcun dato.
        </p>
      </div>
    </article>
  ),
});
