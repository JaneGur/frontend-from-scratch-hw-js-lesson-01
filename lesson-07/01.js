/*
  Нужно написать функцию capitalizeWords, которая принимает строку и делает так, чтобы каждое слово начиналось с заглавной буквы.
  Например, если передать строку "hello world from javascript", функция должна вернуть "Hello World From JavaScript".

  🧙‍♂️Эту задачу можно решить при помощь цикла for. Рекомендуем реализовать этот вариант решения, как самый эффективный.
  Другой вариант - использовать метод split строк, и метод массива join.
*/

function capitalizeWords(str) {
  const array = str.split(" ");
  const changeArray = array.map((item) => {
    const bigLetter = item.slice(0, 1).toUpperCase();
    return bigLetter + item.slice(1);
  });
  let newString = "";
  changeArray.forEach((item) => {
    return (newString += item + " ");
  });
  return newString.trim();
}
capitalizeWords("hello world from javascript");
