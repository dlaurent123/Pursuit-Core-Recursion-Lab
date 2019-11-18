// # Recursion Exercises

// - ### Sum of all from 1 to n

// Write a function that takes in a number as input and recursively finds the sum of all numbers up to and including that number.

// ```js
// input: 6
// output: 21

// //21 = 6 + 5 + 4 + 3 + 2 + 1
// ```

const sumUpToNum = num => {
    if(num <= 0) return 0;
    if(num === 1) return 1;
    return num + sumUpToNum(num-1);
}
console.log(sumUpToNum(-5))

// - ### Multiply array

// Write a function called `multArr` that takes in an array of numbers as an argument and recursively multiplies together all of the values in the array.

// ```js
// multArr([2, 3, 5]); // returns 30
// multArr([5, 5, 1, 2]); //returns 50
// ```

const multArr = arr => {
    if(arr.length === 0) return 1;
    let el = arr.pop();
    return multArr(arr) * el;
}
console.log(multArr([1,2,3,4]));

// - ### Concatenate array

// Write a function called `concatArr` that takes in an array of strings as an argument and recursively concatenates the strings together into a single string, with spaces between each original string.

// ```js
// concatArr(['is', 'it', 'tomorrow']); // returns 'is it tomorrow'
// concatArr(['or', 'just', 'the', 'end', 'of', 'time']); //returns 'or just the end of time'
// ```
const concatArr = arr => {
    if(arr.length === 0) return "array is empty";
    if(arr.length <= 1) return arr[0];
    let el = arr.pop();
    return `${concatArr(arr)} ${el}`;
}
console.log(concatArr(['is', 'it', 'tomorrow']));
console.log(concatArr(['or', 'just', 'the', 'end', 'of', 'time']));
console.log(concatArr([]));


// - ### Sum evens

// Write a function called `sumEvens` that takes in an array of numbers as an argument and recursively sums only the even numbers in the array.

// ```js
// sumEvens([2, 3, 5, 6]); // returns 8
// sumEvens([10, 5, 1, 2, 12]); //returns 24
// ```
const sumEvens = arr => {
    if(arr.length === 0) return 0;
    let el = arr.pop();
    if(el % 2 === 0){
        return sumEvens(arr) + el;
    } else {
        return sumEvens(arr);
    }
}
console.log(sumEvens([2, 3, 5 ,6]))
console.log(sumEvens([10, 5, 1, 2, 12]));

// - ### Recursive range

// Write a function called `range` which takes in two numbers (num1, num2) as arguments. The function should return an array of numbers between num1 and num2.

// ```js
// range(2,10); // returns [2, 3, 4, 5, 6, 7, 8, 9, 10]
// range(17,20); // returns [17, 18, 19, 20]
// ```
const range = (num1, num2, arr = []) => {
    if(num1 === num2){
        arr.unshift(num1);
        return arr;
    }
    arr.unshift(num2);
    num2--;
    return range(num1,num2,arr);
}
console.log(range(2,10));
console.log(range(17,20));

// - ### Triple Step

// A child is running up a staircase with n steps and can hop either 1 step 2 steps or 3 steps at a time. Write a function called 'tripleStep', that takes in an argument `n` that represents the number of steps in the staircase, and returns a count of how many possible ways the child can run up the stairs.

// ```js
// tripleStep(3); //returns 4
// tripleStep(4); //returns 7
// tripleStep(5); //returns 13
// tripleStep(10); //returns 274
// ```
const tripleStep = n => {
    if(n === 1 || n === 0) return 1;
    else if(n === 2) return 2;
    else {
        return tripleStep(n-3) + tripleStep(n-2) + tripleStep(n-1);
    }
}
console.log(tripleStep(3)); //returns 4
console.log(tripleStep(4)); //returns 7
console.log(tripleStep(5)); //returns 13
console.log(tripleStep(10)); //returns 274

// Source: Cracking the Coding Interview

// - ### Coin Combos

// Given an infinite number of quarters, dimes, nickels, and pennies, write code to calculate the number of possible ways of giving exact change for `n` cents.

// In other words, write a function called `coinCombos` that takes in one argument: `n`, which represents the total amount of money (in cents) that you need to make change for. Your function should return the amount of possible combinations you can make to return that exact amount of change.

// For example:
// ```js
// coinCombos(5); //returns 2
// coinCombos(10); //returns 4
// coinCombos(25); //returns 13
// coinCombos(60); //returns 73
// ```
const coinCombos = (n, start = 0) => {
    let coinTypes = [1,5,10,25]
    let numCoins = 0;
    if(n === 0) return 1;
    else if(n < 0) return 0;
    else{
        for(let i = start; i < coinTypes.length; i++){
            numCoins += coinCombos(n - coinTypes[i], i);
        }
        return numCoins;
    }
}
console.log(coinCombos(5));  //returns 2
console.log(coinCombos(10)); //returns 4
console.log(coinCombos(25)); //returns 13
console.log(coinCombos(60)); //returns 73
// Source: CTCI

// # Resources
// - [JavaScript Recursion Exercises](http://www.w3resource.com/javascript-exercises/javascript-recursion-functions-exercises.php)
// - [Swift Recursion Exercises](https://www.weheartswift.com/recursion/)
