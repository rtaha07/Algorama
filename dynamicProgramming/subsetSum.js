/*
Given an array of integers and a target, determine if any non-repeating values add up to the target.

Ex 2.
Input: [2, 3, 1, 10, 5], 9
Return: true

Ex 2.
Input: [2, 3, 1, 10, 5], 100
Return: false
*/

const subsetSum = (arr, target) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return true;
  }
  let dp = [...arr];
  let memo = {};
  for (let i = 0; i < arr.length; i++) {
    let newNums = [];
    for (let j = i + 1; j < dp.length; j++) {
      let currentSum = arr[i] + dp[j];
      if (currentSum === target) return true;
      if (currentSum < target && !memo[currentSum]) {
        newNums.push(currentSum);
        memo[currentSum] = true;
      }
    }
    dp = [...dp, ...newNums];
  }
  return false;
};

console.log(subsetSum([2, 3, 1, 10, 5], 9));
console.log(subsetSum([2, 3, 1, 10, 5], 100));
