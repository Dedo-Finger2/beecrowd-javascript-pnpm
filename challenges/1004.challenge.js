/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1004(lines) {
  const a = parseInt(lines.shift());
  const b = parseInt(lines.shift());
  const prod = parseInt(a * b);
  const message = `PROD = ${prod}`;
  console.log(message);
  return message;
}
