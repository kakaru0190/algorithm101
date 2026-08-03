function longestPalindrome(s: string): number {
    const sMap = new Map<string, number>()

    for (const char of s) {
        sMap.set(char, (sMap.get(char) ?? 0) + 1)
    }

    const keys = [...sMap.keys()]

    let answer = 0
    let hasOddCount = false

    for (const count of sMap.values()) {
        answer += count - (count % 2)

        if (count % 2 === 1) {
            hasOddCount = true
        }
    }

    return hasOddCount ? answer + 1 : answer
}