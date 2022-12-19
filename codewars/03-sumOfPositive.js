console.clear();

/*

You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.

*/

function sumOfPositive(list) {
    if (!Array.isArray(list)){
        return 'ERROS, array is required fot the input';
    }
    if (list.length < 1) {
        return 'ERROS, arrey list cannot be empty';
    }

    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        if (number > 0) {
            sum += number;
        }
    }

    return sum;

}

console.log(sumOfPositive([1,-4,7,12]));