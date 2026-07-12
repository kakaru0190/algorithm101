function isOneCharDiff(current, next) {
    let count = 0

    for (let i = 0; i < current.length; i++) {
        if(current[i] !== next[i]) {
            count += 1
        }

        if(count > 1) {
            return false
        }
    }

    return true
}

function solution(begin, target, words) {
    if(!words.includes(target)) {
        return 0
    }

    const queue = [[begin, 0]]
    const visited = new Set([begin])
    let head = 0

    while(head < queue.length) {
        const [current, count] = queue[head++]

        if(current === target) {
            return count
        }

        for(const nextWord of words) {
            if(visited.has(nextWord)) continue

            if(isOneCharDiff(current, nextWord)) {
                visited.add(nextWord)
                queue.push([nextWord, count + 1])
            }
        }
    }
}