/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1007(lines) {
  const a = parseInt(lines.shift());
  const b = parseInt(lines.shift());
  const c = parseInt(lines.shift());
  const d = parseInt(lines.shift());
  const prodAB = a * b;
  const prodCD = c * d;
  const difference = prodAB - prodCD;
  const message = `DIFERENCA = ${difference}`;
  console.log(message);
  return message;
}
