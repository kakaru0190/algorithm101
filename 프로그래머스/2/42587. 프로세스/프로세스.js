function solution(priorities, location) {
    const queue = priorities.map((v, i) => [v, i])

    let answer = 0
    let head = 0

    while (head < queue.length) {
        const current = queue[head++]

        let hasHigherPriority = false

        for (let i = head; i < queue.length; i++) {
            if (queue[i][0] > current[0]) {
                hasHigherPriority = true
                break
            }
        }

        if (hasHigherPriority) {
            queue.push(current)
            continue
        }

        answer++

        if (current[1] === location) {
            return answer
        }
    }
}