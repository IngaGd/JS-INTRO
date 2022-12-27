class Student { // klase yra receptura, arba instrikciju rinkinys
    constructor(vardas, gimimoMetai) { // studento klases pagrindinis metodas, kuri kvieciame, "vardas" cia yra
        this.name = vardas; // this.name yra tas vardas, kuri matau is paduotu parametru "Petras" ir "Maryte"
        this.birthYear = gimimoMetai;
        this.isMarried = false; // reiksme galime kurti ir metode
        this.shoes = 40;
        this.marks = []; // studentas tures pazymius, bet jis is poradziu yra tuscias sarasas
        console.log('>>>>', vardas);
    } 
}

// jei index html nori naudoti Student, vadinasi index turi importuoti tai, ka ekspprtuoja Student. Pirmiausia Student turi eksportuoti, 
// tada index importuoti. Turi buti dvipusiais mainai.

// module.exports = Student; nebenaudoti
export default Student; // exportuoja Student reseptura
