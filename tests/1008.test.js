import { challenge1008 } from "./../challenges/1008.challenge.js";

describe("Default - Salário", () => {
  it.each([
    [25, 100, 5.5, 550.0],
    [1, 200, 20.5, 4100.0],
    [6, 145, 15.55, 2254.75],
  ])(
    "should return the salary and number of an employee by giving his number, working hours and gains per hour in a string like 'NUMBER = {number}\nSALARY = U$ {salary}'",
    (number, workingHours, gainsPerHour, salary) => {
      const result = challenge1008([number, workingHours, gainsPerHour]);

      expect(result).toBe(
        `NUMBER = ${number}\nSALARY = U$ ${salary.toFixed(2)}`,
      );
    },
  );
});
