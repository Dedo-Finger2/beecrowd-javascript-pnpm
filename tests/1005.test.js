import { challenge1005 } from "./../challenges/1005.challenge.js";

describe("Default - Média 1", () => {
  it.each([
    [5.0, 7.1, 6.43182],
    [0.0, 7.1, 4.84091],
  ])(
    "should return the media of two given grades in a string like 'MEDIA = {result}'",
    (a, b, expected) => {
      const result = challenge1005([a, b]);

      expect(result).toBe(`MEDIA = ${expected}`);
    },
  );
});
