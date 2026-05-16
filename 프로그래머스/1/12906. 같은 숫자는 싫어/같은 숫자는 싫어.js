function solution(arr) {
    const answer = []

    for (const val of arr) {
        if (answer[answer.length - 1] !== val) {
            answer.push(val)
        }
    }

    return answer
}