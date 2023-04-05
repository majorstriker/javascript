'use strict';

// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
// for (let i = 0; i < 11; i++) {
//     if (i === 0) {
//         console.log(`${i} - это ноль`);
//     } else if (i % 2 == 0) {
//         console.log(`${i} - четное число`);
//     } else if (i % 2 != 0) {
//         console.log(`${i} - нечетное число`);
//     }
// }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.splice(3, 2);
// console.log(arr);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
// 1. Рассчитать сумму элементов этого массива
// 2. Найти минимальное число
// 3. Найти есть ли в этом массиве число 3

function generateArray(length) {
    const array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 9));
    }
    return array;

}
// #1
const newArray = generateArray(5);
console.log(newArray);
// let sum = 0;
// for (let i = 0; i < newArray.length; i++) {
//     sum += newArray[i];
// }
// console.log(sum);

// #2
let minimum = newArray[0];
for (const item of newArray) {
    if (item < minimum) {
        minimum = item;
    }
}
console.log(minimum);

// #3
// for (let i = 0; i < newArray.length; i++) {
//     if (newArray[i] === 3) {
//         console.log(`В массиве есть число 3`);
//     }
// }