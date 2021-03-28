// Challenge 1: Print Values and Sum

// Print each array value and the sum so far
// The expected output will be:

var testArr = [6, 3, 5, 1, 2, 4];
var j = 0;
for (var i = 0; testArr.length > i; i++) {

    j = testArr[i] + j;
    console.log("Sum:" + testArr[i] + " Sum:" + j)

}

// Challenge 2: Value * Position

// Multiply each value in the array by its array position
// The expected output will be:

var testArr = [6, 3, 5, 1, 2, 4];
var j = 0;
for (var i = 0; testArr.length > i; i++) {

    j = testArr[i] * i;
    testArr[i] = j;
}
console.log(testArr);