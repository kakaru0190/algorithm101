function search(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1

    while(left <= right) {
        const idx = left + Math.floor((right - left) / 2)
        const val = nums[idx]

        if(val === target) {
            return idx
        }

        if(val > target) {
            right = idx - 1
        } else {
            left = idx + 1
        }
    }

    return -1
}