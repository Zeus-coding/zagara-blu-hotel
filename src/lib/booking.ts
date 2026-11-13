export type GuestOption = { value: string; label: string };

export const GUEST_OPTIONS: GuestOption[] = [
  { value: "1", label: "1 Adulto" },
  { value: "2", label: "2 Adulti" },
  { value: "3", label: "2 Adulti + 1 Bambino" },
  { value: "4", label: "Famiglia (2+2)" },
  { value: "5", label: "5+ Ospiti" },
];

/** Search params accepted by the contact page (all optional). */
export type BookingSearch = {
  checkin?: string;
  checkout?: string;
  guests?: string;
};

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isIsoDate(value: unknown): value is string {
  return typeof value === "string" && ISO_DATE.test(value) && !Number.isNaN(Date.parse(value));
}

/** Keeps only well-formed booking params from an untrusted URL query. */
export function parseBookingSearch(search: Record<string, unknown>): BookingSearch {
  const result: BookingSearch = {};
  if (isIsoDate(search.checkin)) result.checkin = search.checkin;
  if (isIsoDate(search.checkout)) result.checkout = search.checkout;
  const guests = String(search.guests ?? "");
  if (GUEST_OPTIONS.some((option) => option.value === guests)) result.guests = guests;
  return result;
}

/** Number of nights between two ISO dates, or 0 if the range is not valid. */
export function nightsBetween(checkin: string, checkout: string): number {
  if (!isIsoDate(checkin) || !isIsoDate(checkout)) return 0;
  const ms = Date.parse(checkout) - Date.parse(checkin);
  return ms > 0 ? Math.round(ms / 86_400_000) : 0;
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  return `${day}/${month}/${year}`;
}

/** Pre-filled message for the contact form, built from the booking widget. */
export function bookingMessage({ checkin, checkout, guests }: BookingSearch): string {
  if (!checkin || !checkout) return "";
  const nights = nightsBetween(checkin, checkout);
  if (nights === 0) return "";
  const guestLabel = GUEST_OPTIONS.find((option) => option.value === guests)?.label ?? "2 Adulti";
  const nightsLabel = nights === 1 ? "1 notte" : `${nights} notti`;
  return (
    `Buongiorno, vorrei verificare la disponibilità dal ${formatDate(checkin)} ` +
    `al ${formatDate(checkout)} (${nightsLabel}) per ${guestLabel}. Grazie!`
  );
}
