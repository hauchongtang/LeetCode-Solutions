// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).
// Return the running sum of nums.
// Solution:
// use spread operator to spread out any prev slices
// add prev[index] to num if no more index, add zero to the prev array
const runningSum = (nums) => {
    nums.reduce((prev, num, index) => [...prev, (prev[index - 1] || 0) + num], [])
}
