



const n = 999; // number
const nan = NaN; // number
const s = ''; // string
const b = false; // boolean

const nType = typeof n;
const nanType = typeof nan;
const sType = typeof s;
const bType = typeof b;

console.log(n, nType);
console.log(nan, nanType);
console.log(s, sType);
console.log(b, bType);

console.log(typeof Infinity);

const marks = [10, 2, 8];
const marksType = typeof marks;
console.log(marks, marksType);

console.log(typeof []);
console.log(typeof ['', true, 5]);
console.log(typeof [1, -2]);

console.log({}, typeof{});
console.log({age: 55}, typeof{age: 55});

console.log('----------------------');

const x = '' + 5;
console.log(typeof x);

const y = typeof ('' + 5);
console.log(y);

