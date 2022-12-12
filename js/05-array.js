/*

    ARRAY (list, sarasas, matrix, matrica, masyvas)

*/


const emptyArray = [];
console.log(emptyArray);

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const usersNames = ['Petras', 'Maryte', 'Jonas'];
console.log(usersNames);

const boolList = [true, false, false, true, true];
console.log(boolList);

//LABAI NEREKOMENDUOTINA MIKSUOTI SKIRTINGO TIPO REIMSKAS MASYBE
//NEBET ZINOT, KA DAROT, IR NORIT TAUPYTI VIETA (RAM)
//[vardas, amzius, ar vedes]
const combo1 = ['Jonas', 99, true];
console.log(combo1);

const marksCount = marks.length;
console.log(marksCount);

const userCount = usersNames.length;
console.log(userCount);

const boolCount = boolList.length;
console.log(boolCount);

const comboCount = combo1.length;
console.log(comboCount);

const emptySize = emptyArray.length;
console.log(emptySize);


// pozicijos indeksas:
//              0, 1, 2, 3
const money = [5, 10, 20, 5];
let wallet = 0;

// wallet = wallet + money[0];
// arba
wallet += money[0];
// ir tesiant:
wallet += money[1];
wallet += money[2];
wallet += money[3];
console.log('Wallet:', wallet,'pinigu');

const marks2 = [10, 2, 8, 4, 6];

let marksSum = 0;
marksSum += marks2[0];
marksSum += marks2[1];
marksSum += marks2[2];
marksSum += marks2[3];
marksSum += marks2[4];

// console.log('Marks sum:', marksSum);
// confirm.log(marks2[5]); ats undefined

// const x = 20 + undefined;
// console.log(x); ats NaN

const abc = ['a', 'b', 'c', 'd', 'e', 'f'];

// Abecele: a, b, c, d, e, f.
let abcString = 'Abecele: ';

abcString += abc[0] + ',';
abcString += abc[1] + ',';
abcString += abc[2] + ',';
abcString += abc[3] + ',';
abcString += abc[4] + ',';
abcString += abc[5];
abcString += '.';

console.log(abcString);

let abcString2 = 'Abecele2: ';

const seperator = ';';
const ending = '.';

abcString2 += abc[0] + seperator;
abcString2 += abc[1] + seperator;
abcString2 += abc[2] + seperator;
abcString2 += abc[3] + seperator;
abcString2 += abc[4] + seperator;
abcString2 += abc[5] + ending;

console.log(abcString2);