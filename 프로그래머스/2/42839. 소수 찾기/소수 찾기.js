function solution(numbers) {
    const result = new Set()
    const visited = Array(numbers.length).fill(false)

    const isPrime = (num) => {
        if (num < 2) return false

        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false
        }

        return true
    }

    const dfs = (current) => {
        if (current.length > 0) result.add(Number(current))

        for (let i = 0; i < numbers.length; i++) {
            if (visited[i]) continue

            visited[i] = true
            dfs(current + numbers[i])
            visited[i] = false
        }
    }

    dfs("")

    let answer = 0

    for (const num of result) {
        if (isPrime(num)) answer += 1
    }

    return answer
}
