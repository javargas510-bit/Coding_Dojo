
// 1. Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
// 2. Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
// 3. Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000.(e.g. 1 + 3 + 5 +...+4997 + 4999).
// 4. Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1, 2, 5] returns 8.[-5, 2, 5, 12] returns 14).
// 5. Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g.for[-3, 3, 5, 7] max is 7)
// 6. Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g.for[1, 3, 5, 7, 20] average is 7.2)
// 7. Array odd - Write a function that would return an array of all the odd numbers between 1 to 50.(ex. [1, 3, 5, .... , 47, 49]).Hint: Use 'push' method.
// 8. Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y.For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2.(There are two values in the array greater than 3, which are 5, 7).
// 9. Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1, 5, 10, -2] will become[1, 25, 100, 4])
// 10. Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1, 5, 10, -2] will become[1, 5, 10, 0])
// 11. Max / Min / Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1, 5, 10, -2] will return [10, -2, 3.5])
// 12. Swap Values - Write a function that will swap the first and last values of any given array.The default minimum length of the array is 2.(e.g. [1, 5, 10, -2] will become[-2, 5, 10, 1]).
// 13. Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'.For example if array = [-1, -3, 2], your function will return ['Dojo', 'Dojo', 2].



function get_array() {
    var arr = [];
    for (var i = 1; i < 256; i++) {
        arr.push(i);
    }
    return arr;
}
var test = [];
test = get_array();
console.log(test);


function sum_even_numbers() {
    var sum = 0;
    for (var i = 1; i < 1001; i++) {
        if (i % 2 == 0) {
            sum = sum + i
        }
    }
    return sum;
}
console.log(sum_even_numbers());

function sum_odd_5000() {
    var sum = 0;
    for (var i = 1; i < 5001; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum = sum + i;
        }
    }
    return sum;
}

console.log(sum_odd_5000())

function iterArr(arr) {
    //your code here 
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function findMax(arr) {
    //your code here 
    var sum = 0;
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];

            console.log(max);
        }

    }
    return max;
}

function findAvg(arr) {
    //your code here 
    var sum = 0;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];



    }
    avg = sum / arr.length;
    return avg;
}

function oddNumbers() {
    var arr = [];
    //your code here 
    for (var i = 0; i < 50; i++) {
        if (i % 2 == 1) {
            arr.push(i);

        }



    }


    return arr;
}

function greaterY(arr, Y) {
    //your code here
    var count1 = [];
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count1.push(arr[i]);
            console.log(arr[i])
        }



    }
    count = count1.length;
    return count;
}

function squareVal(arr) {
    //your code here 
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        count = arr[i];
        count = count * count
        arr[i] = count;



    }
    return arr;
}

function noNeg(arr) {
    //your code here 
    var numZero = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {

            arr[i] = numZero;
        }


    }
    return arr;
}

function maxMinAvg(arr) {
    //your code here 

    var sum = 0;
    var max = arr[0];
    var min = arr[0];
    var arrnew = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {

            max = arr[i];
        }
        else if (arr[i] < min) {
            min = arr[i];
        }

        sum = sum + arr[i];

    }
    sum = sum / arr.length;
    arrnew.push(max);
    arrnew.push(min);
    arrnew.push(sum);
    return arrnew;
}

function swap(arr) {
    //your code here 

    var sum = 0;
    var firstValue = arr[0];
    var lastValue = arr[arr.length - 1];

    arr[0] = lastValue;
    arr[arr.length - 1] = firstValue;
    var arrnew = [];
    arrnew = arr;
    return arrnew;
}

function numToStr(arr) {
    //your code here 
    var stringValue = 'Dojo';

    for (var i = 0; i <= arr.length; i++) {
        if (arr[i] < 0) {

            arr[i] = stringValue;
        }
    }
    return arr;
}
