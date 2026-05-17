function solution(prices) {
    const answer = Array(prices.length).fill(0)
    const stack = []

    for (let i = 0; i < prices.length; i++) {
        while (stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const prevIndex = stack.pop()
            answer[prevIndex] = i - prevIndex
        }
        stack.push(i)
    }

    while (stack.length > 0) {
        const prevIndex = stack.pop()
        answer[prevIndex] = prices.length - 1 - prevIndex
    }

    return answer
}