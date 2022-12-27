class SimpleStudent { // klase yra receptura, arba instrikciju rinkinys
    constructor(vardas, gimimoMetai) { // studento klases pagrindinis metodas, kuri kvieciame, "vardas" cia yra
        this.name = vardas; // this.name yra tas vardas, kuri matau is paduotu parametru "Petras" ir "Maryte"
        this.birthYear = gimimoMetai;
        console.log('>>>>', vardas);
    } 
}

export default SimpleStudent;