function solution(clothes) {
    const clothesMap = new Map()

    for (const [, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) ?? 0) + 1)
    }

    return [...clothesMap.values()].reduce((acc, cur) => acc * (cur + 1), 1) - 1
}
