import { challenge1000 } from "./../challenges/1000.challenge.js";

describe("Default - Hello World", () => {
  it("should return 'Hello World!'", () => {
    const result = challenge1000();

    expect(result).toBe("Hello World!");
  });
});
