// function sum(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     } 
//    return sum;
// }

// console.log(sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

function arithmeticMean(numbers) {

    if (numbers.length == 0) {
        return 0;
    }

    let sum = 0;

    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    const mean = sum / numbers.length;
    return mean;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = arithmeticMean(numbers);
console.log(result);