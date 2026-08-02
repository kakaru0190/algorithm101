function climbStairs(n: number): number {
    if (n <= 2) return n

    let prev2 = 1
    let prev1 = 2

    for(let step = 3; step <= n; step++) {
        const current = prev1 + prev2
        prev2 = prev1
        prev1 = current
    }

    return prev1
};