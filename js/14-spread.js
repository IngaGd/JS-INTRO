console.clear();

// destrukturizavimas - destructuring

const pazymiai = [10, 9, 8, 7, 6];
const pirmas = pazymiai[0];
const antras = pazymiai[1];

console.log(pirmas);
console.log(antras);

console.log('----');
const marks = [10, 2, 8, 4, 6];
const [first, second] = marks; // ima masyvo reiksmes is eles nuo 0-ines reiksmes iki length - 1,
//cia 0-ine reiksme pavadinta "first", 1-oji - "second"

console.log(first);
console.log(second);
console.log('----');

const petras = ['Petras', 99, true];
const vardas = petras[0];
const amzius = petras[1];
const arVedes = petras[2];
console.log(vardas, amzius, arVedes);

const ona = ['Ona', 87, false];
const [name, age, isMarried] = ona;
console.log(name, age, isMarried);

const car = {
    brand: 'Tesla',
    model: 'S',
    color: 'red'
}
const { color, model } = car;
console.log(color, model); // galime pasirinti kvietimo seka

// SPREAD

const numbers = [1, 2, 3];
const numbers2 = [...numbers, 4]; // iterpiam reiksme '4', 'spread' iskleidzia masyvo numbers reiksmes
// ir vietoj jo gaunam [1, 2, 3, plius 4]
const numbers3 = [...numbers, ...numbers];
const numbers4 = [...numbers2, 999, ...numbers2];

console.log(numbers);
console.log(numbers2);
console.log(numbers3);
console.log(numbers4);

// analogiskai veikia su objektais

const person = {
    name: 'Maryte',
    age: 88,
    isMarried: true,
    childrenCount: 5,
    phone: 2148562548,
    address: 'Gatves g 5, Miestas',
    favoriteColor: 'yellow',
    height: 200,
    eyes: '👀'
}
console.log(person);

const person2 = {
    ...person,
    car: {
        ...car,
        price: 100000
    },
    happy: true,
}

console.log(person2);
console.log(person2.car.brand);

const { childrenCount, happy, favoriteColor } = person2;
console.log(childrenCount, happy, favoriteColor);

