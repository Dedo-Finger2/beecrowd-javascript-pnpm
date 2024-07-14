/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1001(lines) {
  const a = parseInt(lines.shift());
  const b = parseInt(lines.shift());
  const x = a + b;
  const message = `X = ${x}`;
  console.log(message);
  return message;
}
