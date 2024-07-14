import { challenge1003 } from "./../challenges/1003.challenge.js";

describe("Default - Soma Simples", () => {
  it.each([
    [30, 10, 40],
    [-30, 10, -20],
    [0, 0, 0],
  ])(
    "should return the sum of two given numbers in a string like 'SOMA = {result}'",
    (a, b, expected) => {
      const result = challenge1003([a, b]);

      expect(result).toBe(`SOMA = ${expected}`);
    },
  );
});
