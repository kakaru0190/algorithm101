function solution(x, y, n) {
    const queue = [[x, 0]]
    const visited = new Set([x])

    let head = 0

    while(head < queue.length) {
        const [current, count] = queue[head++]

        if(current === y) {
            return count
        }

        const nextNumbers = [
            current + n,
            current * 2,
            current * 3
        ]

        for(const nextNumber of nextNumbers) {
            if(nextNumber > y) continue
            if(visited.has(nextNumber)) continue

            visited.add(nextNumber)
            queue.push([nextNumber, count + 1])
        }
    }

    return -1
}