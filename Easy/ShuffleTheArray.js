// https://leetcode.com/problems/shuffle-the-array/
const shuffle = (nums, n) => {
    var i = 0
    var arr = []
    while(i < n) {
        arr.push(nums[i])
        arr.push(nums[i + n])
        i += 1
    }
    return arr;
}
