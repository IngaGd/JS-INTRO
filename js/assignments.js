console.clear();

// JAVASCRIPT MINI UZDUOTYS

// KINTAMUJU INICIJAVIMAS

/* 
    1. Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/

console.log('KINTAMUJU INICIJAVIMAS 1. uzdavinys: ');

const even = 2;
console.log(even);

const negative = -898;
console.log(negative);

const decimal = 45.789;
console.log(decimal);

const infinity = Infinity;
console.log(infinity);

const undefined = NaN;
console.log(undefined);

/* 
    2. Sukurti 3 kintamuosius su teksto tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/

console.log('KINTAMUJU INICIJAVIMAS 2. uzdavinys: ');

const firstName = 'Tom';
console.log(firstName);

const secondName = "Sojer";
console.log(secondName);

const hello = 'Hello, Mr. Tom';
console.log(hello);

const oddNumbers = '1, 3, 5, 7';
console.log(oddNumbers);

const random = `ntntktldo37599//`;
console.log(random);

/* 
    3. Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/
console.log('KINTAMUJU INICIJAVIMAS 3. uzdavinys: ');


const numbers1 = [124, 56, 5859, -9, -787.8];
console.log(numbers1);

const numbers2 = [22, -23, 0, 1, 2.3];
console.log(numbers2);

const numbers3 = [0, 0.2, 1.23, 23, 4];
console.log(numbers3);

/*
    4. Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
    Po kiekvieno jų inicijavimo, išvesti į console
*/

console.log('KINTAMUJU INICIJAVIMAS 4. uzdavinys: ');

const stringText1 = ['Tom', 'Sam', 'Anna', 'Siri', 'Julia'];
console.log(stringText1);

const stringText2 = ['Basanaviciaus str.', 'Birutes str', 'Laisves avenue', 'Rudninku square', 'Gedimino avenue'];
console.log(stringText2);

const stringText3 = ['phisics', 'math', 'psychology', 'geography', 'art']
console.log(stringText3);

console.log('==============================================================');

//  VEIKSMAI SU KINTAMAISIAIS

/*
    1. Susumuoti visus skaičiaus tipo kintamuosius
    Rezultatą išvesti į console
*/

console.log('VEIKSMAI SU KINTAMAISIAIS 1. uzdavinys: ');

const sum1 = even + negative + decimal;
console.log(sum1);

const sum2 = even + negative + decimal + infinity;
console.log(sum2);

const sum3 = even + negative + decimal + undefined;
console.log(sum3);

const sum4 = even + negative + decimal + undefined + infinity;
console.log(sum4);

/*
    2. Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
    Rezultatą išvesti į console
*/

console.log('VEIKSMAI SU KINTAMAISIAIS 2. uzdavinys: ');

const tekstasSuTarpais = firstName + ' ' + secondName + ' ' + hello  + ' ' + oddNumbers + ' ' + random;
console.log(tekstasSuTarpais);

/*
    3. Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
    a. 1-2+3-4+5
    b. Rezultatą išvesti į console
*/

console.log('VEIKSMAI SU KINTAMAISIAIS 3. uzdavinys: ');

//const numbers1 = [124, 56, 5859, -9, -787.8];
//console.log(numbers1);

//const numbers2 = [22, -23, 0, 1, 2.3];
//console.log(numbers2);

//const numbers3 = [0, 0.2, 1.23, 23, 4];
//console.log(numbers3);

const verteNumbers1 = numbers1[0] - numbers1[1] + numbers1[2] - numbers1[3] + numbers1[4];
console.log(verteNumbers1);

const verteNumbers2 = numbers2[0] - numbers2[1] + numbers2[2] - numbers2[3] + numbers2[4];
console.log(verteNumbers2);

const verteNumbers3 = numbers3[0] - numbers3[1] + numbers3[2] - numbers3[3] + numbers3[4];
console.log(verteNumbers3);

console.log('antas budas:')

let verte1 = 0;
verte1 += numbers1[0];
verte1 -= numbers1[1];
verte1 += numbers1[2];
verte1 -= numbers1[3];
verte1 += numbers1[4];
console.log(verte1);

let verte2 = 0;
verte2 += numbers2[0];
verte2 -= numbers2[1];
verte2 += numbers2[2];
verte2 -= numbers2[3];
verte2 += numbers2[4];
console.log(verte2);

let verte3 = 0;
verte3 += numbers3[0];
verte3 -= numbers3[1];
verte3 += numbers3[2];
verte3 -= numbers3[3];
verte3 += numbers3[4];
console.log(verte3);

/*
    4. Sujungti sąrašų vertes, kurių tipas yra tekstai, 
    nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/

console.log('VEIKSMAI SU KINTAMAISIAIS 4. uzdavinys: ');

/*
const stringText1 = ['Tom', 'Sam', 'Anna', 'Siri', 'Julia'];
console.log(stringText1);

const stringText2 = ['Basanaviciaus str.', 'Birutes str', 'Laisves avenue', 'Rudninku square', 'Gedimino avenue'];
console.log(stringText2);

const stringText3 = ['phisics', 'math', 'psychology', 'geography', 'art']
console.log(stringText3);
*/

let junginys1 = [];
const skirtukas = ', ';

junginys1 += stringText1[0] + skirtukas;
junginys1 += stringText1[1] + skirtukas;
junginys1 += stringText1[2] + skirtukas;
junginys1 += stringText1[3] + skirtukas;
junginys1 += stringText1[4] + skirtukas;

console.log(junginys1);

let junginys2 = [];

junginys2 += stringText2[0] + skirtukas;
junginys2 += stringText2[1] + skirtukas;
junginys2 += stringText2[2] + skirtukas;
junginys2 += stringText2[3] + skirtukas;
junginys2 += stringText2[4] + skirtukas;

console.log(junginys2);

let junginys3 = [];

junginys3 += stringText3[0] + skirtukas;
junginys3 += stringText3[1] + skirtukas;
junginys3 += stringText3[2] + skirtukas;
junginys3 += stringText3[3] + skirtukas;
junginys3 += stringText3[4] + skirtukas;

console.log(junginys3);


// KINTAMUJU PALYGINIMAS

// Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, 
// o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą."

/*
    1. Tarpusavyje palyginti skaičiaus tipo kintamuosius:
    a. kuris didesnis
    b. kuris mažesnis
    c. ar jie lygūs
    d. ar jie nelygūs
    e. kuris didesnis arba lygus
    f. kuris mažesnis arba lygus
*/
console.log('-------------------------------------')
console.log('KINTAMUJU PALYGINIMAS 1. uzdavinys: ');

const a = -23;
const b = 188;
const c = 0;

console.log('a. kuris didesnis?');

if (a > b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('b. kuris mažesnis');

if (a < b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('c. ar jie lygūs?');

if (a === b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('d. ar jie nelygūs?');

if (a !== b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('e. kuris didesnis arba lygus');

if (a >= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('f. kuris mažesnis arba lygus');

if (a <= b) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

/*
    Išvesti teksto tipo kintamųjų ilgius
*/
console.log('-------------------------------------')
console.log('KINTAMUJU PALYGINIMAS 2. uzdavinys: ');

/*
const firstName = 'Tom';
console.log(firstName);

const secondName = "Sojer";
console.log(secondName);

const hello = 'Hello, Mr. Tom';
console.log(hello);
*/
const d = firstName.length;
console.log('firstName length = ', d);

const e = secondName.length;
console.log('secondName length = ', e);

const f = hello.length;
console.log('word "hello" length = ', f);

/*
    3. Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
        a. kuris didesnis
        b. kuris mažesnis
        c. ar jie lygūs
        d. ar jie nelygūs
        e. kuris didesnis arba lygus
        f. kuris mažesnis arba lygus
*/

console.log('-------------------------------------')
console.log('KINTAMUJU PALYGINIMAS 3. uzdavinys: ');
console.log('Duoti skaiciai:', d, e, f);

console.log('a. kuris didesnis?');

if ((d > e) && (d > f))  {
    console.log('Pomidoras', d);
} else if  ((e > d) && (e > f)) {
    console.log('Pomidoras', e);
} else if ((f > d) && (f > e)) {
    console.log('Pomidoras', f);
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('b. kuris mažesnis');

if ((d < e) && (d < f))  {
    console.log('Pomidoras', d);
} else if  ((e < d) && (e < f)) {
    console.log('Pomidoras', e);
} else if ((f < d) && (f < e)) {
    console.log('Pomidoras', f);
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('c. ar jie lygūs?');

if ((d === e) && (d === f))  {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('d. ar jie nelygūs?');

if ((d !== e) && (d !== f)) {
    console.log('Pomidoras');
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('e. kuris didesnis arba lygus');

if ((d >= e) && (d >= f))  {
    console.log('Pomidoras', d);
} else if  ((e >= d) && (e >= f)) {
    console.log('Pomidoras', e);
} else if ((f >= d) && (f >= e)) {
    console.log('Pomidoras', f);
} else {
    console.log('Bandykite kitą kartą.');
};

console.log('f. kuris mažesnis arba lygus');

if ((d <= e) && (d <= f))  {
    console.log('Pomidoras', d);
} else if  ((e <= d) && (e <= f)) {
    console.log('Pomidoras', e);
} else if ((f <= d) && (f <= e)) {
    console.log('Pomidoras', f);
} else {
    console.log('Bandykite kitą kartą.');
};



// FUNKCIJOS

/*
    1. Funkcija pavadinimu “tusciaFunkcija”:
        a. nepriima jokių kintamųjų
        b. neatlieka jokios vidinės logikos
        c. gražina boolean tipo reikšmę “false”
        d. TESTAS:
            i. console.log( tusciaFunkcija() );
            ii. rezultatas: false
*/

console.log('-------------------------------------')
console.log('FUNKCIJOS 1. uzdavinys: ');

/*
const even = 2;
console.log(even);

const negative = -898;
console.log(negative);
*/

console.log('a.:');

function tusciaFunkcija () {
};
console.log(tusciaFunkcija());


console.log('b.:');

function tusciaFunkcija (even, negative) {
};
console.log(tusciaFunkcija());


console.log('c.:');

function tusciaFunkcija (even, negative) {
    if (even < negative) {
        return true;
    } else {
        return false;
    } 
};

console.log(tusciaFunkcija());

