function solution(word) {
    const vowels = ["A", "E", "I", "O", "U"]

    let count = 0
    let answer = 0

    const dfs = (current) => {
        if (current.length > 5) return false

        if (current.length > 0) {
            count += 1

            if (current === word) {
                answer = count
                return true
            }
        }

        for (const vowel of vowels) {
            const found = dfs(current + vowel)
            
            if (found) {
                return true
            }
        }

        return false
    }

    dfs('')

    return answer
}