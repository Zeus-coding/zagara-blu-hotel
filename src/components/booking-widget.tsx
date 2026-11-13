import { useState, type FormEvent } from "react";
import { useNavigate } from "@tanstack/react-router";
import { GUEST_OPTIONS } from "@/lib/booking";

export function BookingWidget({ floating = false }: { floating?: boolean }) {
  const navigate = useNavigate();
  const today = new Date().toISOString().slice(0, 10);
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    // No booking engine in this demo: the request is sent to the contact page,
    // where the form is pre-filled with the chosen dates.
    navigate({ to: "/contatti", search: { checkin, checkout, guests } });
  };

  return (
    <form
      onSubmit={onSubmit}
      className={
        floating
          ? "bg-white shadow-2xl p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-end rounded-sm"
          : "bg-white ring-1 ring-black/5 p-5 md:p-6 grid grid-cols-2 md:grid-cols-4 gap-4 items-end rounded-sm"
      }
    >
      <label className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          Check-in
        </span>
        <input
          type="date"
          required
          min={today}
          value={checkin}
          onChange={(e) => setCheckin(e.target.value)}
          className="border-b border-black/15 py-2 focus:outline-none focus:border-sea text-sm bg-transparent"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          Check-out
        </span>
        <input
          type="date"
          required
          min={checkin || today}
          value={checkout}
          onChange={(e) => setCheckout(e.target.value)}
          className="border-b border-black/15 py-2 focus:outline-none focus:border-sea text-sm bg-transparent"
        />
      </label>
      <label className="flex flex-col gap-1.5">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-bold">
          Ospiti
        </span>
        <select
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          className="border-b border-black/15 py-2 focus:outline-none focus:border-sea text-sm bg-transparent"
        >
          {GUEST_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </label>
      <button
        type="submit"
        className="col-span-2 md:col-span-1 w-full bg-terracotta text-cream py-3.5 font-bold uppercase text-xs tracking-widest hover:brightness-110 transition-all"
      >
        Verifica
      </button>
    </form>
  );
}
