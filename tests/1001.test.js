import { challenge1001 } from "./../challenges/1001.challenge.js";

describe("Default - Extremamente Básico", () => {
  it.each([
    [10, 9, 19],
    [-10, 4, -6],
    [15, -7, 8],
  ])("should return the sum of two given integers", (a, b, expected) => {
    const result = challenge1001([a, b]);

    expect(result).toBe(`X = ${expected}`);
  });
});
