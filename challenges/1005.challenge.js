/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1005(lines) {
  const firstGradeWeight = 3.5;
  const secondGradeWeight = 7.5;
  const firstGrade = parseFloat(lines.shift());
  const secondGrade = parseFloat(lines.shift());
  const gradesWeightSum = firstGradeWeight + secondGradeWeight;
  const media = (
    (firstGrade * firstGradeWeight + secondGrade * secondGradeWeight) /
    gradesWeightSum
  ).toFixed(5);
  const message = `MEDIA = ${media}`;
  console.log(message);
  return message;
}
