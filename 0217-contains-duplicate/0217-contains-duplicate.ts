function containsDuplicate(nums: number[]): boolean {
    const duplicateSet = new Set<number>()

    for(const num of nums) {
        if(duplicateSet.has(num)) {
            return true
        }
        duplicateSet.add(num)
    }

    return false
}