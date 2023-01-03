class Shop2 {
    constructor (imone, valiuta){
        this.company = imone;
        this.currency = valiuta;
        this.name = [];
        this.price = [];
        this.productAndPrices = [];
        this.cart = [];
        this.item = [];
    }

    intro(){
        return console.log(`Hi, we are "${this.company}".
        \nUse .items() method to get list of items to purchase.
        \nUse .order() method to get your order details.\n`);
    }

    addItem(names, prices) {
        this.productAndPrices.push({
            names: names,
            prices: prices,
        })

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
    }

    updatePrice(names, otherPrice) {
        this.price.push(otherPrice);

        console.log(`"${this.company}" updated price and sells ${names} for ${parseFloat(otherPrice/100).toFixed(2)} ${this.currency} now!`);
    }

    createCart(owner) {
        this.cart.push({
            owner: owner,
            items: []
        })

        console.log(`"${owner}" have an open cart at "${this.company}"!`);
    }
    
    addItemToCart(customer, itemNo, quantity) {

        for (const {owner, items} of this.cart) {
            if (customer === owner) {
                items.push({
                    id: itemNo, 
                    count: quantity,
                });
                return this.cart;
            } 
        }    
    }
     order(customer){

        for (const {owner, items} of this.cart) {
            if (customer === owner) {
                return {owner, items};
            }
        }
     }
        
}


        

export { Shop2 };