/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

function listAverage(list) {
    if (!Array.isArray(list)){
        return 'ERROS, array is required fot the input';
    }
    if (list.length < 1) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
            sum += number;
    }

    return sum / list.length;

}

console.log(listAverage([1,-4,7,12]));
console.log(listAverage([]));
