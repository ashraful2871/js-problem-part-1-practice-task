// Task-2:
// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

function countNumberMultiTime(numbers, findNumbers) {
  let count = 0;
  for (let number of numbers) {
    if (number === findNumbers) {
      count++;
    }
  }
  return count;
}

let numbers = [5, 6, 11, 12, 98, 5];
let find = 5;

let result = countNumberMultiTime(numbers, find);
console.log(result);

let find1 = 25;

let result1 = countNumberMultiTime(numbers, find1);
console.log(result1);
