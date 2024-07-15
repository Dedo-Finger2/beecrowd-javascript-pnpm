import { challenge1007 } from "./../challenges/1007.challenge.js";

describe("Default - Diferença", () => {
  it.each([
    [5, 6, 7, 8, -26],
    [0, 0, 7, 8, -56],
    [5, 6, -7, 8, 86],
  ])(
    "should return the difference of the product of four given integers in a string like 'DIFERENCA = {result}'",
    (a, b, c, d, expected) => {
      const result = challenge1007([a, b, c, d]);

      expect(result).toBe(`DIFERENCA = ${expected}`);
    },
  );
});
