/**
 * @param { Array<number | string> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1010(lines) {
  const space = " ";
  const [code01, quantity01, unitPrice01] = lines.shift().split(space);
  const [code02, quantity02, unitPrice02] = lines.shift().split(space);
  const piece01Total = Number(quantity01) * parseFloat(unitPrice01);
  const piece02Total = Number(quantity02) * parseFloat(unitPrice02);
  const result = (piece01Total + piece02Total).toFixed(2);
  const message = `VALOR A PAGAR: R$ ${result}`;
  console.log(message);
  return message;
}
