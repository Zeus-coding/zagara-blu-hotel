import { Link } from "@tanstack/react-router";
import { Instagram, Facebook } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-black/5 pt-16 md:pt-20 pb-10 mt-24">
      <div className="container-page">
        <div className="grid md:grid-cols-4 gap-10 md:gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="text-2xl font-serif font-bold tracking-tight text-sea mb-4">
              ZAGARA BLU
            </div>
            <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
              L'ospitalità siciliana autentica sul lungomare di Marina di Serralba, tra il blu del
              Tirreno e la macchia mediterranea.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="size-9 border border-black/10 rounded-full grid place-items-center hover:bg-sea hover:text-cream hover:border-sea transition-colors"
              >
                <Instagram size={16} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="size-9 border border-black/10 rounded-full grid place-items-center hover:bg-sea hover:text-cream hover:border-sea transition-colors"
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-5">Hotel</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/camere" className="hover:text-terracotta">
                  Camere
                </Link>
              </li>
              <li>
                <Link to="/appartamenti" className="hover:text-terracotta">
                  Appartamenti
                </Link>
              </li>
              <li>
                <Link to="/spa" className="hover:text-terracotta">
                  Spa & Benessere
                </Link>
              </li>
              <li>
                <Link to="/servizi" className="hover:text-terracotta">
                  Servizi
                </Link>
              </li>
              <li>
                <Link to="/esperienze" className="hover:text-terracotta">
                  Esperienze
                </Link>
              </li>
              <li>
                <Link to="/offerte" className="hover:text-terracotta">
                  Offerte
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold uppercase text-xs tracking-[0.2em] mb-5">Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link to="/contatti" className="hover:text-terracotta">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-terracotta">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookie" className="hover:text-terracotta">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/note-legali" className="hover:text-terracotta">
                  Termini e Condizioni
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between gap-4 text-[11px] uppercase tracking-widest text-muted-foreground">
          <p>© {new Date().getFullYear()} Zagara Blu Hotel & Spa — Progetto dimostrativo</p>
          <p>Hotel di fantasia · Marina di Serralba, Sicilia</p>
        </div>
      </div>
    </footer>
  );
}
