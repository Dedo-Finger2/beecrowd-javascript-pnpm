import { challenge1009 } from "./../challenges/1009.challenge.js";

describe("Default - Salário com Bônus", () => {
  it.each([
    ["JOAO", 500.0, 1230.3, 684.54],
    ["PEDRO", 700.0, 0.0, 700.0],
    ["MANGOJATA", 1700.0, 1230.5, 1884.58],
  ])(
    "should return the salary and number of an employee by giving his number, working hours and gains per hour in a string like 'NUMBER = {number}\nSALARY = U$ {salary}'",
    (name, fixedSalary, totalSellsOnMonth, expected) => {
      const result = challenge1009([name, fixedSalary, totalSellsOnMonth]);

      expect(result).toBe(`TOTAL = R$ ${expected.toFixed(2)}`);
    },
  );
});
