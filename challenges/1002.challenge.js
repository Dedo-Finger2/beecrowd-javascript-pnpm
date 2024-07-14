/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1002(lines) {
  const n = 3.14159;
  const raio = parseFloat(lines.shift());
  const area = parseFloat((n * raio ** 2).toFixed(4));
  const message = `A=${area}`;
  console.log(message);
  return message;
}
