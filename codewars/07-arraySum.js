console.clear();
/*  nebaigtas
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 
0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.

Example
For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/

console.clear();

function countPositivesSumNegatives(input) {

    if ((input[0] === null) || (input.length === 0) || (input.length === 1 && input[0] === 0)) {
        return [];
    }

    let result = [];
    let positiveNumbers = [];
    let negativeNumbers = [];
    let countPositives = 0;
    let sumOfNegatives = 0;

    positiveNumbers = input.filter(n => n > 0);
    countPositives = positiveNumbers.length;

    result[0] = countPositives;

    negativeNumbers = input.filter(n => n < 0);

    for (const negativeNumber of negativeNumbers) {
        sumOfNegatives += negativeNumber;
        result[1] = sumOfNegatives;
    }


    return result;

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]));
console.log(countPositivesSumNegatives([]));
console.log(countPositivesSumNegatives([null]));
