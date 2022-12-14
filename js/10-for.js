console.clear();



let i = 0;

console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);
console.log(i++);

// ispausdinti skaicius nuo 0 iki 5

for (let i=0; i<=5; i++) {
    console.log('dirbu...', i);
} 
console.log ('end');

// ispasdinti skaicius nuo 5 iki 10

for (let i =5; i<=10; i++) {
    console.log('dirbu...', i);
} 

// ispasdinti skaicius nuo -10 iki -5

for (let i = -10; i <= -5; i++) {
    console.log('dirbu...', i);
} 

// ispasdinti skaicius nuo 10 iki 5

for (let i = 10; i >= 5; i--) {
    console.log('dirbu...', i);
} 

console.clear();

const marks = [10, 2, 8, 4, 6, 10, 2, 5];
const count = marks.length;
let sum = 0;

for (let i=0; i < count; i++) {
    sum +=marks[i];
    console.log(i, '-->', marks[i], '=>' , sum); // i-index, or iterator
}

const average = sum / count;
console.log('Pazymiu vidurkis:', average);

const petras = [10, 8, 6];
const count2 = petras.length;
let sum2 = 0;

for (let i = 0; i < count2; i++){
    sum2 += petras[i];
}

console.log('Petro pazymiu vidurkis:', sum2);

const maryte = [10, 8, 6];
const count3 = petras.length;
let sum3 = 0;

for (let i = 0; i < count3; i++){
    sum2 += maryte[i];
}

console.log('Marytes pazymiu vidurkis:', sum3);


function marksAverage(marksArray){
    console.log(marksArray);
    return sum / marksArray.length;
}

const student1 = {
    name: 'Jonas',
    marks: [2, 4, 6]
};

const student2 = {
    name: 'Ona',
    marks: [4, 6, 8, 10]
};

const student3 = {
    name: 'Aloyzas',
    marks: [6, 8, 10, 7, 3]
};

const vidurkis1 = marksAverage(student1.marks);
const vidurkis2 = marksAverage(student2.marks);
const vidurkis3 = marksAverage(student3.marks);

console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis1}`);
console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis2}`);
console.log(`${student1.name} pazymiu vidurkis yra ${vidurkis3}`);

console.log('-------------------------------');

const currency = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 2,
        inStock: 10
    },
];

console.log(`1) ${prekes[i]} `)
