// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9.

const squareSum = (nums) => {
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    let squared = nums[i] ** 2;
    sum += squared;
  }

  return sum;
};

// input of array
// contains numbers... 0, positive, empty
// output a single number
// sum of all squared numbers in array
// [1, 2] => 1^2 + 2^2 === 5
// [3, 3, 0] === 18
// [1, 2, 3] === 14

// variable that can hold sum number
// iterate through array
// square number
// add to sum
// return sum number
