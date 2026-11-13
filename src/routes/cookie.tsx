import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Zagara Blu" },
      { name: "description", content: "Informativa cookie del sito Zagara Blu." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <article className="container-page py-16 md:py-24 max-w-3xl">
      <h1 className="font-serif text-4xl md:text-5xl mb-8">Cookie Policy</h1>
      <div className="space-y-5 text-muted-foreground leading-relaxed">
        <p>
          Il sito Zagara Blu utilizza cookie tecnici necessari al funzionamento delle pagine e
          cookie di terze parti per l'integrazione della mappa.
        </p>
        <h2 className="font-serif text-2xl text-ink mt-8">Cookie tecnici</h2>
        <p>Necessari alla navigazione, non richiedono consenso.</p>
        <h2 className="font-serif text-2xl text-ink mt-8">Cookie di terze parti</h2>
        <p>Possono essere impostati da OpenStreetMap per mostrare la mappa interattiva.</p>
        <p className="text-sm italic">
          Testo di esempio: questo è un sito dimostrativo per un hotel di fantasia.
        </p>
      </div>
    </article>
  ),
});
