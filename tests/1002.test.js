import { challenge1002 } from "./../challenges/1002.challenge.js";

describe("Default - Área do Círculo", () => {
  it.each([
    [2.0, 12.5664],
    [100.64, 31819.3103],
    [150.0, 70685.775],
  ])(
    "should return the area of a circle with a given radius of a circle",
    (raio, expected) => {
      const result = challenge1002([raio]);

      expect(result).toBe(`A=${expected}`);
    },
  );
});
