'use strict';

// Задача 1
function numberCube(number) {
    return (number ** 3);
}
let sum = (numberCube(2) + numberCube(3));

console.log(sum);


//Задача 2
function minusPercent() {
    let sallary = prompt('Введите размер вашей зарплаты цифрой', 3000);
    if (isNaN(sallary) || sallary == undefined || sallary == '') {
        alert('Нужно написать число!');
    } else {
        return (sallary * 0.77);
    }
}

// console.log(minusPercent());


//Задача 3
function maxNumber() {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));
    let num3 = Number(prompt('Введите третье число'));
    if (num1 > num2 && num1 > num3) {
        console.log(`Число ${num1} максимальное`);
    } else if (num2 > num1 && num2 > num3) {
        console.log(`Число ${num2} максимальное`);
    } else if (num3 > num1 && num3 > num2) {
        console.log(`Число ${num3} максимальное`);
    } else {
        console.log(`Вы ввели НЕ число`);
    }
}

maxNumber();


//Задача 4
function summa(num1, num2) {
    return (num1 + num2);
}

function difference(num1, num2) {
    if (num1 > num2) {
        return (num1 - num2);
    } else {
        return (num2 - num1);
    }
}

function multiplication(num1, num2) {
    return (num1 * num2);
}

function division(num1, num2) {
    return (num1 / num2);
}

console.log(summa(2, 6));
console.log(difference(2, 6));
console.log(difference(6, 6));
console.log(multiplication(2, 6));
console.log(division(2, 6));