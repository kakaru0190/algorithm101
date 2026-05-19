function solution(nums) {
    const maxSize = nums.length / 2
    const numsSetSize = new Set(nums).size

    return maxSize <= numsSetSize ? maxSize : numsSetSize
}