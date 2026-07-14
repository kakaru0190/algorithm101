function solution(triangle) {
    const dp = triangle.map((row) => [...row])

    for(let y = 1; y < dp.length; y++) {
        for(let x = 0; x < dp[y].length; x++) {
            if(x === 0) {
                dp[y][x] += dp[y - 1][x]
                continue
            }

            if(x === dp[y].length - 1) {
                dp[y][x] += dp[y - 1][x - 1]
                continue
            }

            dp[y][x] += Math.max(
                dp[y - 1][x - 1],
                dp[y - 1][x]
            )
        }
    }

    return Math.max(...dp[dp.length - 1])
}
