
// Gas cost calculator
// two parameters: starting odometer reading and ending odometer reading
// Return the cost of gas for this trip at $0.15 per mile
// Bonus: return the cost of gas for the trip using $3.64 per gallon at 28 mpg 
console.log("---------question 1 ------------");
function costCalc (startingMiles, endingMiles) {
        return ((endingMiles - startingMiles) * 0.15);
}

const totalCost = (costCalc(300150, 300215));
console.log("If my miles odometers starts at 300,150 and ends at 300,215 i would pay " + totalCost + " for gas");

console.log("-------question 1 bonus -----------");
//-----Bonus_____//
const iPaid = (gasPump) => {
    return gasPump / 0.15;
}
console.log("If i pay $50 i can drive " + Math.floor(iPaid(50)) + " miles");



// Multiply three numbers
// Three parameters: num1, num2, num3
// Return the product of these 3 numbers
// Bonus: write functions to multiply 4 numbers, 5 numbers, 6 numbers… “till your fingers bleed” - Jiho
console.log("---------question 2 ------------");

const triplet = (num1, num2, num3) => {
    const total = num1 * num2 * num3;
    return total;
}

console.log("If you multiply 10, 23 and 17 together you get the product " + triplet(10,23,17));



// Cone Calculator
// Two parameters: radius and height
// Return the volume of a cone with these conditions
// Formula: https://www.google.com/search?q=volume+of+a+cone
console.log("-------------question 3----------")

const coneArea = (radius, height) => {
    const total = (3.14 * radius^2 ) * height / 3;
    return total;
}

console.log("The area of a cone with the radius of 7 and the height of 12 is "+coneArea(7,12));

// Summation sentence
// Two parameters: num1 and num2
// Print to the console: “The sum of [num1] and [num2] is [result]”
// Bonus: write two versions of this function:
// Use console.log() inside of the function - this function returns nothing
// Challenge - do not use console.log() inside of the function
console.log("-------- question 4 ----------");

const addingThings = (num1, num2) => {
    const total = num1 + num2 ;
    return total;
}

console.log("If you add 46 and 189 together you get the sum " + addingThings(46, 189));

// Remainder Calculator
// Two parameters: numerator and divisor
// Return the remainder from dividing numerator by divisor - NOT THE RESULT
console.log("----------- question 5 -------------");

const remainderCalc = (num1, num2) => {
    const result = num1 % num2;
    return result;
}

console.log("the remainder of 13846782368 and 13 is " + remainderCalc(13846782368, 13));

// Banana Picker
// One parameter: quantity
// Return a string of quantity number of “:banana:”s
// Bonus: write a function with a second parameter
// return a similar string but with the emoji argument
// (try this with a multi-character string too to see how it behaves)
console.log("----------- question 5 ------------");

const result = (quantity =1) => {
    return  "🍌".repeat(quantity);
      }
  
      console.log("The banana picker is broken and is giving everyone a random anout of banana you were lucky enough to get " + result(1 + Math.random()*39));