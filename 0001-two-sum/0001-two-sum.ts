function twoSum(nums: number[], target: number): number[] {
    const cache = new Map<number, number>()

    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        const restNum = target - num
        const restNumIndex = cache.get(restNum)

        if(restNumIndex !== undefined) {
            return [restNumIndex, i]
        }

        cache.set(num, i)
    }

    return []
};