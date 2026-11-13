import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/camere", label: "Camere" },
  { to: "/appartamenti", label: "Appartamenti" },
  { to: "/spa", label: "Spa" },
  { to: "/servizi", label: "Servizi" },
  { to: "/esperienze", label: "Esperienze" },
  { to: "/offerte", label: "Offerte" },
  { to: "/contatti", label: "Contatti" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/5">
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="font-serif text-xl md:text-2xl font-bold tracking-tight text-sea">
          ZAGARA BLU
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium uppercase tracking-widest">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-ink/80 hover:text-terracotta transition-colors"
              activeProps={{ className: "text-terracotta" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/contatti"
            className="hidden sm:inline-flex items-center bg-sea text-cream px-5 md:px-6 py-2.5 rounded-sm text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-terracotta transition-colors"
          >
            Prenota
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2 -mr-2 text-ink"
            aria-label={open ? "Chiudi menu" : "Apri menu"}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden fixed inset-x-0 top-16 bottom-0 bg-cream z-40 overflow-y-auto">
          <nav className="container-page py-8 flex flex-col gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-4 border-b border-black/5 font-serif text-2xl text-ink"
                activeProps={{ className: "text-terracotta" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contatti"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex justify-center items-center bg-sea text-cream px-6 py-4 rounded-sm text-sm font-bold uppercase tracking-widest"
            >
              Prenota Ora
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
