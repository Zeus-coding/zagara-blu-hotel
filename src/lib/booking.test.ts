import { describe, expect, it } from "vitest";
import { bookingMessage, nightsBetween, parseBookingSearch } from "./booking";

describe("parseBookingSearch", () => {
  it("keeps valid dates and guest values", () => {
    expect(
      parseBookingSearch({ checkin: "2027-07-01", checkout: "2027-07-08", guests: "4" }),
    ).toEqual({ checkin: "2027-07-01", checkout: "2027-07-08", guests: "4" });
  });

  it("drops malformed or unknown values", () => {
    expect(
      parseBookingSearch({ checkin: "01/07/2027", checkout: "<script>", guests: "99" }),
    ).toEqual({});
  });

  it("accepts guests passed as a number", () => {
    expect(parseBookingSearch({ guests: 2 })).toEqual({ guests: "2" });
  });
});

describe("nightsBetween", () => {
  it("counts the nights of a stay", () => {
    expect(nightsBetween("2027-07-01", "2027-07-08")).toBe(7);
  });

  it("returns 0 when checkout is not after checkin", () => {
    expect(nightsBetween("2027-07-08", "2027-07-01")).toBe(0);
    expect(nightsBetween("2027-07-01", "2027-07-01")).toBe(0);
  });
});

describe("bookingMessage", () => {
  it("builds a readable Italian request", () => {
    expect(bookingMessage({ checkin: "2027-07-01", checkout: "2027-07-02", guests: "2" })).toBe(
      "Buongiorno, vorrei verificare la disponibilità dal 01/07/2027 al 02/07/2027 (1 notte) per 2 Adulti. Grazie!",
    );
  });

  it("uses the plural for longer stays", () => {
    expect(
      bookingMessage({ checkin: "2027-07-01", checkout: "2027-07-04", guests: "4" }),
    ).toContain("(3 notti) per Famiglia (2+2)");
  });

  it("returns an empty string without a valid range", () => {
    expect(bookingMessage({})).toBe("");
    expect(bookingMessage({ checkin: "2027-07-04", checkout: "2027-07-01" })).toBe("");
  });
});
