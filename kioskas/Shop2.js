class Shop2 {
    constructor (imone, valiuta){
        this.company = imone;
        this.currency = valiuta;
        this.name = [];
        this.price = [];
        this.customer = [];
    }

    intro(){
        return console.log(`Hi, we are "${this.company}".
        \nUse .items() method to get list of items to purchase.
        \nUse .order() method to get your order details.\n`);
    }

    addItem(names, prices) {
        // let newName = imone.toLowercase;
        this.name.push(names);
        this.price.push(prices);

        console.log(`"${this.company}" sells ${names} for ${parseFloat(prices/100).toFixed(2)} ${this.currency} now!`);
    }

    items() {
        let itemNo = 0;
        console.log(`\nItems for sale at "${this.company}":\n====================`);

        for (let i = 0; i < this.name.length; i++) {
            itemNo = i + 1;
            console.log(
            `${itemNo}) ${this.name[i]} - ${parseFloat(this.price[i]).toFixed(2)} ${this.currency};`);
        }
        console.log(`====================`);
    }

    updatePrice(names, otherPrice) {
        this.price.push(otherPrice);

        console.log(`"${this.company}" updated price and sells ${names} for ${parseFloat(otherPrice/100).toFixed(2)} ${this.currency} now!`);
    }

    createCart(customers) {
        this.customer.push(customers);

        console.log(`"${customers}" have an open cart at "${this.company}"!`);
    }

}

export { Shop2 };