function solution(N, number) {
    const dp = Array.from(
        {length: 9},
        () => new Set()
    )

    for(let count = 1; count <= 8; count++) {
        const connectedNumber = Number(String(N).repeat(count))

        dp[count].add(connectedNumber)

        for(let leftCount = 1; leftCount < count; leftCount++) {
            const rightCount = count - leftCount

            for(const left of dp[leftCount]) {
                for(const right of dp[rightCount]) {
                    dp[count].add(left + right)
                    dp[count].add(left - right)
                    dp[count].add(left * right)

                    if(right !== 0) {
                        dp[count].add(Math.trunc(left / right))
                    }
                }
            }
        }

        if(dp[count].has(number)) {
            return count
        }
    }

    return -1
}