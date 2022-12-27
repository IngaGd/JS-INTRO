console.clear();
console.log('Class...');

// Tinkamai parasytoms funkcijoms kontekstas nesvarbu, svarbu, kad ieinantys duomenys butu teisingo formato
// Klases yra funkciju (kitaip netodu) rinkinys. Jei klaseje yra panasiu logiku, pvz vidurkis, jis gali priklausyti nuo konteksto.
// Klases rasomos is didziosios raides.

// const Student = require('./Student'); // importas, pirmiausia isiimportuoti, tada naudoti. Si sintakse sena, geriau nenaudoti.

import Student from './Student.js'; // reikia pletinio .js ir module package.json
// import Studentas from './Student.js'; esant poreikiui eksportuoti vienaip pavadintus, o importuoti kitaip
// yra globalios klases, pvz "Math" su jau sukurtais metodais, pvz Math.floor, jei sukureme klase "Math", tada neveiks, nebent importuodami pervadinsime i Matematika
import SimpleStudent from './Student2.js';

const petras = new Student('Petras', 2000); // objektas yra kazkas veikiantyis pagal tas instrukcijas,ntai jau pagamintas produktas pagal instrukcijas :)
const maryte = new SimpleStudent('Marte', 1980); // su new kvieciamas klaseje student esantis konstruktorius, parametra "Maryte" padaveme i construktoriu, del to ispausdina

// const petras = new Studentas('Petras', 2000); 
// const maryte = new Studentas('Marte', 1980); 


console.log(petras, petras.name, petras.birthYear, petras.isMarried);
console.log(maryte, maryte.name, maryte.birthYear, maryte.isMarried);


console.log(petras);
console.log(maryte);
console.log(Student);

const suo = {
    vardas: 'Rexas'
}
console.log(suo.vardas);



