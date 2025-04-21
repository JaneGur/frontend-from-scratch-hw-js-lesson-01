/*
Напишите функцию `findUniqueElements`, которая принимает массив и возвращает новый массив, содержащий только уникальные элементы из исходного массива.

**Входные данные:**

- **`array`**: Массив, который может содержать повторяющиеся элементы.

**Выходные данные:**

- Массив, содержащий только уникальные элементы из исходного массива.

**Пример использования:**
`findUniqueElements([1, 2, 3, 2, 1, 4])` вернёт `[1, 2, 3, 4]`.

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

// includesElement([1, 2, 3], 2);

function findUniqueElements(array) {
  let newArray = [array[0]];
  for (let i = 1; i < array.length; i++) {
    let isRepeat = includesElement(newArray, array[i]);
    if (!isRepeat) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

findUniqueElements([1, 2, 3, 2, 1, 4]);
