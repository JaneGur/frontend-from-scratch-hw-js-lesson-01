/*
Напишите функцию `doubleEachCharacter`, которая принимает строку и возвращает новую строку, где каждый символ из исходной строки повторяется дважды.

Входные данные:

- **`str`**: Строка, символы которой нужно удвоить.

Выходные данные:

- Новая строка с каждым символом, повторенным дважды.

Пример работы функции: `doubleEachCharacter('hello')` вернёт `'hheelllloo'`
*/

function doubleEachCharacter(str) {
  let allSymbols = str.split("");
  let newString = "";

  for (let i = 0; i < allSymbols.length; i++) {
    if (typeof allSymbols[i] === "string") {
      newString = newString + allSymbols[i] + allSymbols[i];
    }
  }
  return newString;
}

doubleEachCharacter("hello");
