
// MUSU PARDUOTUVE:
// ----------------
// 1) Bananas kainuoja 2.00 EUR ir turime ju 10 vienetu.
// 2) Agurkas kainuoja 3.00 EUR ir turime ju 10 vienetu.
// 3) Pomidoras kainuoja 1.57 EUR ir turime ju 30 vienetu.
// ----------------
// Viso asortimento kaina: 97.10 EUR.

console.clear();

const valiuta = 'EUR';
const prekes = [
    {
        name: 'Bananas',
        price: 2,
        inStock: 10
    },
    {
        name: 'Agurkas',
        price: 3,
        inStock: 10
    },
    {
        name: 'Pomidoras',
        price: 1.57,
        inStock: 30
    },
];

console.log('MUSU PARDUOTUVE:');
console.log('----------------');

function shop(goods, currency){

    let sum = 0;

    for (let i = 0; i < 3; i++) {
        sum += prekes[i].price * prekes[i].inStock;
    };

    return sum;

}

let pozicija = 0;



for (let i = 0; i < 3; i++) {
    pozicija = i + 1;
    console.log(`${pozicija}) ${prekes[i].name} kainuoja ${parseFloat(prekes[i].price).toFixed(2)} EUR ir turime ju ${prekes[i].inStock} vienetu`);
}

console.log('----------------');
console.log('Viso asortimento kaina:', parseFloat(shop(prekes, valiuta)).toFixed(2));
