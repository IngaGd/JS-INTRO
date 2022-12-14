console.clear();

/*
    IF - reiksmiu palyginimas; salyga tenkina/netenkina?
    Palyginimo operatoriai:
    visi: >, <, >=, <=, ==, !=, ===, !==
    naudotini: >, <, >=, <=, ===, !==
    NEnaudotini: ==, !=



    Sablonai:
    if () {}
    if () {} else {}
    if () {} else if () {}
    if () {} else if () {} else {}
    if () {} else if () {} ...  else if () {}
    if () {} else if () {} ...  else if () {} else {}
*/

const a = 7;
const b = 7;

// jeigu A daugiau B, tai spausdiname 'A daugiau uz B'
// jeigu A nera daugiau B, tai spausdiname 'A nera daugiau uz B'

console.log('start');

if (a > b) {
    console.log(`${a} daugiau uz ${b}`);
} else {
    console.log(`${a} nera daugiau uz ${b}`);
    console.log(`${a} maziau arba lygu uz ${b}`);
}

if (a == b) {
    console.log(`${a} yra lygu ${b}`);
} else {
    console.log(`${a} nera lygu ${b}`);
}

if (a <= b) {
    console.log(`${a} maziau arba lygu uz ${b}`);
} else {
    console.log(`${a} nera maziau arba lygu uz ${b}`);
}

if (a != b) {
    console.log(`${a} ne lygu ${b}`);
} else {
    console.log(`${a} lygu ${b}`);
}

console.log('------');
const c = 11;
const d = 13;
if (c > d) {
    console.log('C daugiau uz D');
} else if (c < d) {
    console.log('C maziau uz D');
} else if (c == d) {
    console.log('C lygu D');
} else {
    console.log('kazkas neaiskaus su C ir D');
}

console.log('------');
if (c > d) {
    console.log('C daugiau uz D');
} else {
    console.log('C ne daugiau uz D');
}
if (c < d) {
    console.log('C maziau uz D');
} else {
    console.log('C ne maziau uz D');
}
if (c == d) {
    console.log('C lygu D');
} else {
    console.log('C ne lygu D');
}

console.log('end');

const petras = [10, 2, 8, 4];
const maryte = [8, 4, 6];

if (petras.length >= maryte.length) {
    console.log('Petras turi daugiau ar vienodai su Maryte pazymiu');
} else {
    console.log('Maryte turi daugiau pazymiu uz Petra');
}

console.log('--- griezai ---');

if (5 === 5) {
    console.log('taip');
}

if (5 !== 3) {
    console.log('taip');
}

console.log('-----------------');

if (false == '') {
    console.log('vienodi');
} else {
    console.log('skirtingi');
}

const suma = Infinity;

if (typeof suma === 'number') { // jei tikriname lygybe, geriau visada rasyti tris, isvengsim kodo klaidu
    console.log('Darau pavedima ;)');
} else {
    console.log('Jokio pavedimo nebus!!!!');
}

console.log('aaaaa' / 5);

if (NaN === NaN) {
    console.log('NAN lygus'); // dvi nesamones niekad nera tarpusavyje lygios:)
} else {
    console.log('NAN nelygus');
}

console.log(5 / 0);
console.log(0 / 0); // nesamone
console.log('hsgsg' / 5); // nesamone
console.log('hsgsg' / 'jroa'); // nesamone

// js kai vykdo logika, pirmiausia vykdo funkcijas, tada antru pravaziavimu is eiles viska nuskaito (likusia kodo dali)

console.clear();
console.log('CLEAR: 133');


// code nesting

const day = 8;

if (day === 1) {
    console.log('pirmadienis');
} else {
    if (day === 2) {
        console.log('antradienis');
    } else {
        if (day === 3) {
            console.log('treciadienis');
    } else {
        if (day === 4) {
            console.log('ketvirtadienis');
        } else {
            if (day === 5) {
                console.log('penktadienis');
            } else {
                    if (day === 6) {
                        console.log('sestadienis');
                    }  else {
                        if (day === 7) {
                            console.log('sekmadienis');
                        }  else {
                                console.log('tokia diena savaiteje neegzistuoja');
                            }
                        }
                    }
                }
            }
        }
    }


    // Atrakcionu parkas

const parkasDirba = true;
const bijauAukscio = false;

if (parkasDirba) {
    if (bijauAukscio) {
        console.log ('Mamaaaaa!');
    } else {
        console.log('Einu i parka, bus smagu');
    }    
} else {
    if (bijauAukscio){
        console.log('Parkas nedirba - man pasiseke, liksiu sausom kelnem. :)');
    } else {
        console.log ('Parkas nedirba. Man liudna, nes norejau nueiti.');
    }
}

if (parkasDirba && bijauAukscio) {
    console.log ('Mamaaaaaa!');
} else if (parkasDirba &&! bijauAukscio){
    console.log('Einu i parka, bus smagu');
} else if (!parkasDirba && bijauAukscio) {
    console.log('Parkas nedirba - man pasiseke, liksiu sausom kelnem. :)');
} else if (!parkasDirba && !bijauAukscio) {
    console.log ('Parkas nedirba. Man liudna, nes norejau nueiti.');
}
