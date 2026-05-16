function solution(progresses, speeds) {
    const answer = []

    let deployDay = Math.ceil((100 - progresses[0]) / speeds[0])
    let count = 1

    for (let i = 1; i < progresses.length; i++) {
        const day = Math.ceil((100 - progresses[i]) / speeds[i])

        if (day <= deployDay) {
            count += 1
        } else {
            answer.push(count)
            deployDay = day
            count = 1
        }
    }

    answer.push(count)

    return answer
}