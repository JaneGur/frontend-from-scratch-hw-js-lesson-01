/*
 * Напишите код, который будет определять оценку студента (grade) в зависимости от балла (score).
 * Балл может быть целым числом от 0 до 100, а оценки 'F' (0 - 49), 'D' (50 - 69), 'C' (70-79), 'B' (80 - 89), 'A' (90 - 100)
 * Результат сохраните в переменной grade.
 */

const score = 70; // тестовое значение, можно изменять
let grade;
let isgradeA = score >= 90 && score <= 100;
let isgradeB = score >= 80 && score <= 89;
let isgradeC = score >= 70 && score <= 79;
let isgradeD = score >= 50 && score <= 69;
let isgradeF = score >= 0 && score <= 49;

console.log(isgradeA);
console.log(isgradeB);
console.log(isgradeC);
console.log(isgradeD);
console.log(isgradeF);

if (isgradeA) {
  grade = "A";
  alert(`Ваша оценка ${grade}`);
} else if (isgradeB) {
  grade = "B";
  alert(`Ваша оценка ${grade}`);
} else if (isgradeC) {
  grade = "C";
  alert(`Ваша оценка ${grade}`);
} else if (isgradeD) {
  grade = "D";
  alert(`Ваша оценка ${grade}`);
} else if (isgradeF) {
  grade = "F";
  alert(`Ваша оценка ${grade}`);
} else {
  alert("Ни одно из значений");
}
