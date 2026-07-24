function maxProfit(prices: number[]): number {
    let minPrice = Infinity
    let maxProfit = 0

    for(const price of prices) {
        minPrice = Math.min(minPrice, price)

        const diff = price - minPrice
        maxProfit = Math.max(maxProfit, diff)
    }

    return maxProfit
}