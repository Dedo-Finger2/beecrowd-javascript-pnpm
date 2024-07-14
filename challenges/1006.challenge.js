/**
 * @param { Array<number> } lines - Variable with all data provided in order
 * @returns { string }
 */
export function challenge1006(lines) {
  const firstGradeWeight = 2;
  const secondGradeWeight = 3;
  const thirdGradeWeight = 5;
  const firstGrade = parseFloat(lines.shift());
  const secondGrade = parseFloat(lines.shift());
  const thirdGrade = parseFloat(lines.shift());
  const gradesWeightSum =
    firstGradeWeight + secondGradeWeight + thirdGradeWeight;
  const media = (
    (firstGrade * firstGradeWeight +
      secondGrade * secondGradeWeight +
      thirdGrade * thirdGradeWeight) /
    gradesWeightSum
  ).toFixed(1);
  const message = `MEDIA = ${media}`;
  console.log(message);
  return message;
}
