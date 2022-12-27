console.clear();

/**
    REDUCE - sutraukti/sumazinti
    procedura, kaip is saraso reiksmiu gauti viena galutine reiksme
    daugiskaita -> vienaskaita
 */

const numbers = [10, 2, 8, 4, 6];

// iprastas ciklas
let sum = 0;

for (const number of numbers) {
    sum += number;
}
console.log('FOR SUM:', sum);

// paprastas reduce - logika vietoje
const reduceSum = numbers.reduce((sum, number) => sum + number); // lygybe (+=) nerekomenduotina
console.log('REDUCE SUM:', reduceSum);

console.log('------------------------------------------------------')

function calcSum(sum, number) {
    return sum + number;
}

// paprastas reduce - logika isorineje funkcijoje
const reduceSum2 = numbers.reduce(calcSum);
console.log('REDUCE SUM:', reduceSum2);

console.log('------------------------------------------------------')

// kiti paprasti pavyzdziai
const reduceMinus = numbers.reduce((total, number) => total - number);
console.log('REDUCE SUM:', reduceMinus);

const reduceMulti = numbers.reduce((total, number) => total * number);
console.log('REDUCE MULTIPLY:', reduceMulti);

const reduceDiv = numbers.reduce((total, number) => total / number); //pirmas skaicius dalinamas is kitu 10 / 2 / 8 / 4 / 6
console.log('REDUCE SUM:', reduceDiv);

console.log('------------------------------------------------------')

// reduce su nurodyta pradine akumuliatoriaus reiksme

const reduceSum3 = numbers.reduce((t, n) => t + n, 0); // su skaiciu po kableliu pasakome, kam yra lygus total'as 0 + 10 + 2 + 8 + 4 + 6
console.log('REDUCE SUM:', reduceSum3);

const reduceMinus2 = numbers.reduce((t, n) => t - n, 0);
console.log('REDUCE SUM:', reduceMinus2);

const reduceMulti2 = numbers.reduce((t, n) => t * n, 1);
console.log('REDUCE MULTIPLY:', reduceMulti2);

const reduceDiv2 = numbers.reduce((t, n) => t / n, 1);  // su skaiciu po kableliu pasakome, kam yra lygus total'as 1 / 10 / 2 / 8 / 4 / 6, dalyba praktiskai su reduce nlb naudojama
console.log('REDUCE SUM:', reduceDiv2);

console.log('------------------------------------------------------')

// Patikriname, ar iki galo isdalinome duot1 skaiciu "maziausiais" dalikliais

const atsGoods = [2, 2, 5, 5].reduce((t, n) => t / n, 100);
console.log(atsGoods);

const atsGoods2 = [2, 2, 2, 2, 2, 2, 2].reduce((t, n) => t / n, 128);
console.log(atsGoods2);

console.log('------------------------------------------------------')

const students = [
    { name: 'Petras', age: 99, isMarried: true },
    { name: 'Maryte', age: 88, isMarried: false },
    { name: 'Jonas', age: 77, isMarried: false },
    { name: 'Ona', age: 66, isMarried: true },
    { name: 'Simon', age: 7, isMarried: false },
    { name: 'Itoleta', age: 17, isMarried: true },
    { name: 'Alas', age: 47, isMarried: true },
    { name: 'Eliza', age: 2, isMarried: false },
];

const averageAge = students.reduce((t, s) => t + s.age, 0) / students.length;
console.log('Students:', averageAge.toFixed(2)); // toFixed siame kontekste grazina stringa
console.log('Students:', +averageAge.toFixed(2)); // + konvertuoja i skaiciu
console.log('Students:', parseInt(averageAge.toFixed(2))); // konvertuoja i integer skaiciu
console.log('Students:', parseFloat(averageAge.toFixed(2))); // konvertuoja i float skaiciu

console.log(+'5', parseInt('5'), parseFloat('5'));
console.log(+'3.1415', parseInt('3.1415'), parseFloat('3.1415'));
console.log(+'labas', parseInt('labas'), parseFloat('labas'));
console.log(+'labas3.1415', parseInt('labas3.1415'), parseFloat('labas3.1415'));
console.log(+'3.1415labas', parseInt('3.1415labas'), parseFloat('3.1415labas'));
console.log(+'3.1415labas3.1415', parseInt('3.1415labas3.1415'), parseFloat('3.1415labas3.1415'));