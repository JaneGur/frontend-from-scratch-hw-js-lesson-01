/*
Попробуйте написать свою версию метода `map`. Ваша задача — создать функцию `map`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна иметь возможность принимать следующие параметры:

- `element` (текущий элемент массива),
- `index` (индекс текущего элемента),

Ваша функция `map` должна возвращать новый массив, где каждый элемент является результатом вызова функции `callback` на каждом элементе исходного массива.
*/

/*
Пример использования вашей функции:

const numbers = [1, 2, 3, 4, 5]

const doubledNumbers = map(numbers, (element, index) => {
  return element * 2
})

console.log(doubledNumbers) // Должен вывести: [2, 4, 6, 8, 10]
*/

const map = () => {}
/*
Напишите свою версию метода `filter`.
Ваша задача — создать функцию `filter`, которая принимает два параметра:

- `array` (массив, над которым выполняется операция),
- `callback` (функция, которая вызывается для каждого элемента массива).

Функция `callback` должна принимать два параметра:

- `element` (текущий элемент массива)
- `index` (индекс текущего элемента)

Функция `filter` должна возвращать новый массив, содержащий только те элементы `array`, для которых `callback` возвращает `true`.
*/

/* Пример использования:
const numbers = [1, 2, 3, 4, 5]

const oddNumbers = filter(numbers, (element, index) => {
  return element % 2 !== 0
});

console.log(oddNumbers) // Должен вывести: [1, 3, 5]
*/

function filter(array, callback) {
  let newArray = [];
  array.forEach((element, index) => {
    callback(element, index);
    if (callback(element, index) === true) {
      newArray.push(element);
    }
  });
  return newArray;
}
