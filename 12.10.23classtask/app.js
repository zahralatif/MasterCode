//! 906

function productOfDigits(a) {
    a = parseInt(a);

    let firstNumber = parseInt(a / 100);
    // console.log(firstNumber);
    let lastNumber = parseInt(a % 10);
    // console.log(lastNumber);
    let middleNumber = parseInt((a / 10) % 10);
    // console.log(middleNumber);

    const output = firstNumber * middleNumber * lastNumber;
    return output;
}

//! 1606

function sumOfFirstAndLastNum(a) {
    a = parseInt(a);

    let firstNumber = findFirstNumber(a);
    // console.log(firstNumber);
    let lastNumber = parseInt(a % 10);
    // console.log(lastNumber);
    const output = firstNumber + lastNumber;
    return output;
}

function findFirstNumber(a) {
    if (a < 9) {
        return a;
    }
    while (a > 9) {
        a = parseInt(a / 10);
    }
    return a;
}

//! 8254

function hotel(n, m) {
    return (n - 1) * m * 3;
}

//! 8601

function swapNum(a) {
    a = parseInt(a);
    let first = parseInt(a / 10);
    // console.log(firstNumber);
    let last = parseInt(a % 10);
    // console.log(lastNumber);

    return last * 10 + first;
}

//! 8602

function thirdDigitFromRight(a) {
    let string = a.toString();

    return string[string.length - 3];
}

//! 8817

function countNumber(number) {
    let count = 0;
    for (let i = Math.pow(10, number - 1); i <= Math.pow(10, number); i++) {
        count++;
    }
    return count;
}

//! 8892

function checkNum(num) {
    num = parseInt(num);
    if ((num % 2 !== 0) || (num >= 100 && num < 1000)) {
        return "YES";
    } else {
        return "NO";
    }
}

//! 8911

function minusNums(arr) {
    let counter = 0;
    arr.forEach((number) => {
      if (number < 0) {
        counter++;
      }
    });
  
    return counter;
  }
  
  // console.log(minusNums([7, -1, 4, -6, , -2, -4, 8, 10, 0]));