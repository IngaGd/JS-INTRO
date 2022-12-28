console.clear();
console.log('Class...');

// Tinkamai parasytoms funkcijoms kontekstas nesvarbu, svarbu, kad ieinantys duomenys butu teisingo formato
// Klases yra funkciju (kitaip netodu) rinkinys. Jei klaseje yra panasiu logiku, pvz vidurkis, jis gali priklausyti nuo konteksto.
// Klases rasomos is didziosios raides.

// const Student = require('./Student'); // importas, pirmiausia isiimportuoti, tada naudoti. Si sintakse sena, geriau nenaudoti.

// import Student from './Student.js'; // reikia pletinio .js ir "module" package.jsone
// import Studentas from './Student.js'; esant poreikiui eksportuoti vienaip pavadintus, o importuoti kitaip
// yra globalios klases, pvz "Math" su jau sukurtais metodais, pvz Math.floor, jei sukureme klase "Math", tada neveiks, nebent importuodami pervadinsime i Matematika
// import SimpleStudent from './Student2.js';
// import { Student, Teacher, Math as Matieka } from './Student.js'; // tokiu importu isvengiam misstype
// import * as viskas from './Student.js'; importuoja viska is Student.js, 
// console.log(viskas);
// console.log(viskas.petras);
// console.log(viskas.maryte);
// console.log(viskas.Teacher);
// console.log(viskas.Matieka);

import { Student } from "./Student.js";

const petras = new Student('Petras', 2000); // objektas yra kazkas veikiantyis pagal tas instrukcijas,ntai jau pagamintas produktas pagal instrukcijas :)
// const maryte = new SimpleStudent('Marte', 1980); // su new kvieciamas klaseje student esantis konstruktorius, parametra "Maryte" padaveme i construktoriu, del to ispausdina
const maryte = new Student('Marte', 1980);
const jonas = new Student('Jonas', 1990); 
// const chuck = new Teacher('Chuck', 1960);

// const petras = new Studentas('Petras', 2000); 
// const maryte = new Studentas('Marte', 1980); 

petras.addMark(10);
petras.addMark(3.14);
petras.addMark(0);
petras.addMark(2);
petras.addMark(8);
petras.addMark(4);
petras.addMark(6);

maryte.addMark(9);
maryte.addMark(6);

console.log(petras.name, petras.marks);
console.log(maryte.name, maryte.marks);

console.log(petras.name, petras.marksAverage());
console.log(maryte.name, maryte.marksAverage());
console.log(jonas.name, jonas.marksAverage());


// console.log(petras);
// console.log(maryte);
// console.log(Student);
// console.log(Teacher);
// console.log(Matieka);

/*
const suo = {
    vardas: 'Rexas'
}
console.log(suo.vardas);*/



