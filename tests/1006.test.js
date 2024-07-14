import { challenge1006 } from "./../challenges/1006.challenge.js";

describe("Default - Média 2", () => {
  it.each([
    [5.0, 6.0, 7.0, 6.3],
    [10.0, 10.0, 5.0, 7.5],
  ])(
    "should return the media of three given grades in a string like 'MEDIA = {result}'",
    (a, b, c, expected) => {
      const result = challenge1006([a, b, c]);

      expect(result).toBe(`MEDIA = ${expected}`);
    },
  );
});
