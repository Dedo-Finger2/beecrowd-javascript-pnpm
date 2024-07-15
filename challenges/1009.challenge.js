/**
 * @param { Array<number | string> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1009(lines) {
  const employeeName = lines.shift();
  const employeeFixedSalary = parseFloat(lines.shift());
  const employeeTotalSellsOnMonth = parseFloat(lines.shift());
  const bonusPercent = 0.15;
  const bonusMoney = employeeTotalSellsOnMonth * bonusPercent;
  const employeeFinalSalary = (employeeFixedSalary + bonusMoney).toFixed(2);
  const message = `TOTAL = R$ ${employeeFinalSalary}`;
  console.log(message);
  return message;
}
