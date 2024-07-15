/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1008(lines) {
  const employeeNumber = parseInt(lines.shift());
  const employeeWorkingHours = parseInt(lines.shift());
  const employeeGainsPerHour = parseFloat(lines.shift());
  const employeeSalary = (employeeGainsPerHour * employeeWorkingHours).toFixed(
    2,
  );
  const message = `NUMBER = ${employeeNumber}\nSALARY = U$ ${employeeSalary}`;
  console.log(message);
  return message;
}
