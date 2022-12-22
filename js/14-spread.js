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
console.log('marks:', marks);
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
// SPREAD - israsymas/iskopijavimas

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

console.clear();

const a = ['a', 'ab'];
const b = ['b', 'bb'];
const c = ['c', 'cc'];

const doubleABC = [...a, ...b, ...c];
const doubleCBA = [...c, ...b, 222, ...a];
console.log(doubleABC);
console.log(doubleCBA);

const oa = { a: 'a', aa: 'aa' };
const ob = { b: 'b', bb: 'bb' };
const oc = { c: 'c', cc: 'cc' };

const oABC1 = {...oa, ...ob, ...oc };
const oABC = { ...oa, ...oc, gg: 'gg', ...ob, cc: 'nebe CC' }; // itrauktos papildomai reiksmes 'gg' ir cc reiksme pakeista i 'nebe cc', 
//objetktas negali tureti dvieju vienmodu raktazodziu, laimi paskutinis:
const oABC2 = { ...oa, ...oc, gg: 'gg', ...ob, cc: 'nebe CC', cc: 'nebe CCCC' };

console.log('oABC1:', oABC1);
console.log('oABC:', oABC);
console.log('oABC2:', oABC2);
console.log('oABC.cc:', oABC.cc); // paima tik objekto reiksme cc
console.log('oABC.gg:', oABC.gg); // paima tik objekto reiksme gg

const user = {
    name: 'Username',
    password: 'pasword12',
};
console.log('user:', user);

const user2 = { ...user, name: 'Petras' }; // ...user - padaroma objekto user kopija, username oweridintas su vardu Petras
console.log('user2:', user2);
console.log(user2.name); // istraukiama reksme is objekto

