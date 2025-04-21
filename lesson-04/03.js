/*
Напишите функцию `findCommonElements`, которая принимает два массива и возвращает массив, содержащий общие элементы из обоих массивов.

Входные данные:

- `array1`: Первый массив, содержащий любые типы данных.
- `array2`: Второй массив, содержащий любые типы данных.

Выходные данные:

- Массив, содержащий элементы, которые присутствуют в обоих исходных массивах.
- Если общих элементов нет, должен вернуться пустой массив

Пример использования:
findCommonElements([1, 2, 3], [2, 3, 4]) // [2, 3]

Подсказка: можно использовать функцию `includesElement`, которую мы написали ранее. Переписывать её не нужно, она доступна по всему проекту за счёт hoisting.
*/

function includesElement(array, element) {
  let isInclude = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === element) {
      isInclude = true;
    }
  }
  return isInclude;
}

function findCommonElements(array1, array2) {
  let newArray = [];
  for (let i = 0; i < array2.length; i++) {
    if (includesElement(array1, array2[i])) {
      console.log(array2[i]);
      newArray.push(array2[i]);
    }
  }
  return newArray;
}

findCommonElements([1, 2, 3], [2, 3, 4]); // [2, 3]);
