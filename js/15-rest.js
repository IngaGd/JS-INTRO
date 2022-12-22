console.clear();
/*
REST operatorius - surenka likusias nepaimtas reiksmes destrukturizuojant
*/

const marks = [10, 2, 8, 4, 6];
const [first, second, ...visiKiti] = marks;

console.log('marks: ', marks);
console.log('first: ', first); // 0-ine pozicija, spaudina reiksme
console.log('second: ', second); // 1-a pozicija, spausdina reiksme
console.log('visiKiti: ', visiKiti); // likes nepanaudotas sarasas, spausdina masyva


const marks2 = [10, 2];
/// tipiniu atveju taip nebuna, bet:
const [...like] = marks2; // spausdina viska, padaro kopija
const like2 = [...marks2]; // tapatus uzrasymas virsutiniam
console.log('like: ', marks2);
console.log('like: ', like2);


const person = {
    name: 'Petras',
    age: 99,
    isMarried: true,
    favorite: {
        color: 'red',
        number: 13,
        artist: 'Spice Girls'
    }
}

const { age, isMarried, ...other } = person;
console.log('age, isMaried: ', age, isMarried);
console.log('other:', other);

// 2 parametrai
function sum(a, b) {
    console.log('ARGS', a, b, arguments, [...arguments]);
    return a + b;
}

const s1 = sum(7, 5);
console.log('a+b:', s1);

// 1 parametras (array), bet su daug reiksmiu
function arraySum(list) {
    let totalSum = 0;

    for (let i = 0; i < list.length; i++) {
        totalSum += list[i];
    }

    return totalSum;
}

const s2 = arraySum([10, 2, 8, 4, 6]);
console.log('array sum:', s2);

console.log('----------------');

function sudetis(...args) {
    let total = 0;

    for (let i = 0; i < args.length; i++) {
        total += args[i];
    }

    return total;
}

const s3 = sudetis(10, 2, 8, 4, 6);
console.log('sudetis:', s3);

console.log('----------------');

function product() {
    let total = 1;

    for (let i = 0; i < [...arguments].length; i++) {
        total *= [...arguments][i];
    }

    return total;
}

const s4 = product(10, 2, 8, 4, 6);
console.log('sandauga:', s4);