import { challenge1004 } from "./../challenges/1004.challenge.js";

describe("Default - Produto Simples", () => {
  it.each([
    [3, 9, 27],
    [-30, 10, -300],
    [0, 9, 0],
  ])(
    "should return the prod of two given numbers in a string like 'PROD = {result}'",
    (a, b, expected) => {
      const result = challenge1004([a, b]);

      expect(result).toBe(`PROD = ${expected}`);
    },
  );
});
