/*
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
*/

function reverseSytring (str) {
    if (typeof str !== 'string') {
        return `ERROR: duok stringa, o ne ${typeof str}!`;
    }
    // if (!str) {
    //     return `ERROR: duok stringa, o ne ${typeof str}!`;
    // }

    let text = '';

    for (let i = 0; i < str.length; i++) {
    const symbol = str[i];
    text = symbol + text;
    }

    return text;
}

console.log(reverseString('sula'), '-->', 'alus');
console.log(reverseString('abcdef'), '-->', 'fedcba');
console.log(reverseString('qwerty'), '-->', 'ytrewq');
