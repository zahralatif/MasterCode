//! 8800

function sayHelloToPython() {
    console.log("Hello, Python!");
}

sayHelloToPython();

//! 8801

function readInt(num) {
    const n = parseInt(num);
    return n;
}

function nextInt() {
    //recomment 18th line for chechking 8801st task
    // const input = prompt("Enter your int: ");
    const int = readInt(input);

    if (int) {
        const nextInt = int + 1;
        console.log("The next int is: ", nextInt);
    } else {
        console.log("Invalid input");
    }
} nextInt();

//! 8802

function readInteger(num) {
    const n = parseInt(num);
    return n;
}

function previousInt() {
    //recomment 37th line for chechking 8802nd task
    // const input = prompt("Enter your int: ");
    const int = readInteger(input);

    if (int) {
        const previousInt = int - 1;
        console.log("The previous int is: ", previousInt);
    } else {
        console.log("Invalid input");
    }
} previousInt();

//! 8803 - same as 8801

//! 8804 

function calculateSum(a, b) {
    const num1 = parseInt(a);
    const num2 = parseInt(b);

    const sum = num1 + num2;
    return sum;
}

const input1 = prompt("Enter your first num: ");
const input2 = prompt("Enter your second num: ");

let result = calculateSum(input1, input2);

console.log("The sum of these nums: ", result);

//! 8805 - same as 8804

//! 8806 - same as 8804

//! 8807

function oppositeInt(num) {
    const input = parseInt(num);

    const opposite = -input;

    console.log("The opposite integer is: ", opposite)
} oppositeInt();

//!8808

function calculateDifference(c, d) {
    const num1 = parseInt(c);
    const num2 = parseInt(d);

    if (c > d) {
        const difference = num1 - num2;
        return difference;
    } else if (c < d) {
        const difference = num2 - num1;
        return difference;
    }
}
const number1 = prompt("Enter your first num: ");
const number2 = prompt("Enter your second num: ");

let output = calculateDifference(number1, number2);

console.log("The difference of these nums: ", output);


//! 8809 - same as calculateDifference

//! 8810

function total(person1, person2, person3) {
    person1 = parseInt(person1);
    person2 = parseInt(person2);
    person3 = parseInt(person3);

    const total = (person1 + person2) - person3;
    return total;
}

const totalStudents = total(person1, person2, person3);

console.log("Total students: ", totalStudents);

//! 8811

function productNums(m, n) {
    m = parseInt(m);
    n = parseInt(n);

    const product = m * n;
    return product;
}

const productOfNums = productNums(m, n);
console.log("Product of numbers: ", productOfNums);

//! 8812

function rectangle(length, width) {
    length = parseInt(length);
    width = parseInt(width);

    const perimeter = (width + length) * 2;
    const area = length * width;
    return [perimeter, area];
}

//! 8813

function parallelepiped(l, w, h) {
    l = parseInt(l);
    w = parseInt(w);
    h = parseInt(h);

    const surfaceArea = 2 * (l * w + w * h + h * l);
    const volume = l * w * h;
    return [surfaceArea, volume]
}

//! 8814

function square(side) {
    side = parseInt(side);

    const p = 4 * side;
    const a = side * side;
    return [p, a];
}

//! 8815

function cube(side) {
    side = parseInt(side);

    const perimetr = 6 * side * side;
    const areaCube = side * side * side;
    return [perimetr, areaCube];
}

//! 8816

function calculatePower(a, n) {
    a = parseInt(a);
    n = parseInt(n);

    const power = Math.pow(a, n);
    return power;
}

//! 8817 
//? did not get task

//! 8818
//? couldn't

//! 8819
//? couldn't

//! 8820 - same as 8818

//! 8821 - same as 8819

//! 8822 