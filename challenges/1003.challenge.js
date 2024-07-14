/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1003(lines) {
  const a = parseInt(lines.shift());
  const b = parseInt(lines.shift());
  const soma = parseInt(a + b);
  const message = `SOMA = ${soma}`;
  console.log(message);
  return message;
}
