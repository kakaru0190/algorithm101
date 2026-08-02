function canConstruct(ransomNote: string, magazine: string): boolean {
    const magazineMap = new Map<string, number>()

    for (const char of magazine) {
        magazineMap.set(char, (magazineMap.get(char) ?? 0) + 1)
    }

    for (const char of ransomNote) {
        const val = magazineMap.get(char)
        if (!val) {
            return false
        }
        magazineMap.set(char, val - 1)
    }

    return true
};