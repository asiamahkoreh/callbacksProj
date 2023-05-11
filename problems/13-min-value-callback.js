/*******************************************************************************
Write a function `minValueCallback` that accepts an array and an optional callback as arguments.
If a callback is not passed in, then the function should return the smallest
value in the array. If a callback is passed in, then the function should return
the result of the smallest value being passed into the given callback.

Examples:
console.log(minValueCallback([64, 25, 49, 9, 100]));             // 9
console.log(minValueCallback([64, 25, 49, 9, 100], Math.sqrt));  // 3

*******************************************************************************/
// input = array, optional callback
// output: without callback = return smallest number in array
// output :with callback = return smallest number in array passed into callback

// PSEUDOCOSDE
// if argument is only array
// loop through the array
//  check for smallest number
// return the number

// else if there is a callback function
// find the smallest number
// pass the smalllest number into the callback function



let minValueCallback = function(array, cb) {
    let smallest = null;
    let res = null;
    for (let i = 0; i < array.length; i++) {
        let ele = array[i];
        if (cb === undefined) {
            if (smallest === null || ele < smallest) {
                smallest = ele;
                res = smallest;
            }
        } else {
            if (smallest === null || ele < smallest) {
                let callb = cb(smallest = ele);
                res = callb;
            }
        }
    }

    return res;

};






/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = minValueCallback;
