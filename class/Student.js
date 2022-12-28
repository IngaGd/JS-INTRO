class Student { // klase yra receptura, arba instrikciju rinkinys
    constructor(vardas, gimimoMetai) { // studento klases pagrindinis metodas, kuri kvieciame, "vardas" cia yra
        this.name = vardas; // this.name yra tas vardas, kuri matau is paduotu parametru "Petras" ir "Maryte"
        this.birthYear = gimimoMetai;
        this.isMarried = false; // reiksme galime kurti ir metode
        this.shoes = 40;
        this.marks = []; // studentas tures pazymius, bet jis is poradziu yra tuscias sarasas
        console.log('>>>>', vardas);
    }
    //metodas - itraukti nauja pazymi
    // pirma gynybos linija yra pushinant pazhymius, neturi patekti neteusingi

    //surasome pasikartojancias logikas
    isValidMark(msark) {
        if (typeof mark !== 'number'
            || !isFinite(mark) 
            || mark < 1
            || mark > 10
            || mark % 1 !== 0) {
            return false;
        }
        return true;
    }

    addMark(mark) {
        // this.marks.push(mark); pirmas var
        // geresnis:
        /*if (typeof mark !== 'number'
        || !isFinite(mark) // patikrinimas del Infinity ir NaN 
        || mark < 1
        || mark > 10
        || mark % 1 !== 0){ // Infinity ir NaN realiai nepraeina del sio patikrinimo
            return 'ERROR';
        }*/

        // vietoj pasikartojancios auksciau esancios validacijos, iskvieciame metoda isValidMark,
        // duodame ta pati "mark", kuri norime patikrinti
        if (!this.isValidMark(mark)) {
            return 'ERROR';
        }

        this.marks.push(mark);

        return 'OK';

    } 

    addMarks(...marks){ // rest operatorius, addMarks metodas sukurtas sitam petriukui "petras.addMarks(10, 0, 2, 22);" 
        console.log(marks);
        // console.log(arguments); dar vienas uzrasymo var
        for (const mark of marks) {
            if (/*typeof mark !== 'number'
            || !isFinite(mark) 
            || mark < 1
            || mark > 10
            || mark % 1 !== 0*/
            !this.isValidMark(mark)){
                continue; // praskipinam neteisingus inputus
            }
            this.marks.push(mark);
        }
    }

    marksAverage(){
        if (this.marks.length === 0) {
            return 'neiskaita';
        }

        return this.marks.reduce((t, m) => t + m, 0) / this.marks.length;
    }

    marksAverage1(){
        /*const correctMarks = this.marks
        .filter(m => m >= 1)
        .filter(m => m <= 10)
        .filter(m => m % 1 === 0);*/

        //const correctMarks = this.marks
        //    .filter(m => m >= 1 && m <= 10 && m % 1 === 0); // si logika efektyvesne, nei auksciau pateikta
        
        // koreguota su isValidMark
        const correctMarks = this.marks
        .filter(this.isValidMark);

        if (correctMarks.length === 0){
            return 'neiskaita';
        }

        return correctMarks.reduce((t, m) => t + m, 0) / correctMarks.length;
    }

    marksAverage2(){
        let sum = 0;
        let correct = 0;
        for (const mark of this.marks) {
            /*if (mark >= 1 && mark <= 10 && mark % 1 === 0) perrassyta zemiau su IsValidMark*/ 
            if (this.isValidMark) {
                sum += mark;
                correct++;   
            }    
        } 
        if (correct === 0) {
            return 'neiskaita';
        }
        return sum / correct;
    }
}

// jei index html nori naudoti Student, vadinasi index turi importuoti tai, ka ekspprtuoja Student. Pirmiausia Student turi eksportuoti, 
// tada index importuoti. Turi buti dvipusiais mainai.

// module.exports = Student; nebenaudoti
// export default Student; // exportuoja Student receptura, t.y. logika
/*
class Teacher { // klase yra receptura, arba instrikciju rinkinys
    constructor(vardas, gimimoMetai) { // studento klases pagrindinis metodas, kuri kvieciame, "vardas" cia yra
        this.name = vardas; // this.name yra tas vardas, kuri matau is paduotu parametru "Petras" ir "Maryte"
        this.birthYear = gimimoMetai;
        this.isMarried = false; // reiksme galime kurti ir metode
    } 
}

class Math {

}*/

// export {Student, Teacher, Math}; eksportuoja konkrecia klase su konkreciu pavadinimu

export {Student};

// "This" reiskia objekta, su kuriuo tuo metu dirbi.

