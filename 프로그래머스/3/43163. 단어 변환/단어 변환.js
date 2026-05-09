function isOneCharDiff(currWord, nextWord) {
    let count = 0

    for (let i = 0; i < currWord.length; i++) {
        if (nextWord[i] !== currWord[i]) {
            count += 1
        }
        if (count > 1) {
            return false
        }
    }

    return count === 1;
}

// 시간복잡도 O(N X N X M)
function solution(begin, target, words) {
    if (!words.includes(target)) {
        return 0;
    }

    let head = 0;
    const queue = [[begin, 0]];
    const visited = new Set([begin])

    while (head < queue.length) {
        const [currentWord, count] = queue[head++]

        if (target === currentWord) {
            return count
        }

        for (const nextWord of words) {
            if (visited.has(nextWord)) continue

            if (isOneCharDiff(currentWord, nextWord)) {
                visited.add(nextWord);
                queue.push([nextWord, count + 1])
            }
        }
    }

    return 0
}
