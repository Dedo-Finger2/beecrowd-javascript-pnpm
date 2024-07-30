import { challenge1010 } from "./../challenges/1010.challenge.js";

describe("Default - Cálculo Simples", () => {
  it.each([
    ["12 1 5.30", "16 2 5.10", 15.5],
    ["13 2 15.30", "161 4 5.20", 51.4],
    ["1 1 15.10", "2 1 15.10", 30.2],
  ])(
    "should return the salary and number of an employee by giving his number, working hours and gains per hour in a string like 'NUMBER = {number}\nSALARY = U$ {salary}'",
    (piece01, piece02, expected) => {
      const result = challenge1010([piece01, piece02]);

      expect(result).toBe(`VALOR A PAGAR: R$ ${expected.toFixed(2)}`);
    },
  );
});
