const countCorrectAnswers = (answers, pattern) => {
    return answers.reduce((count, answer, index) => {
        return pattern[index % pattern.length] === answer
            ? count + 1
            : count
    }, 0)
}

function solution(answers) {
    const patterns = [
        [1, 2, 3, 4, 5],
        [2, 1, 2, 3, 2, 4, 2, 5],
        [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    ]

    const scores = patterns.map((pattern, index) => {
        return {
            studentNumber: index + 1,
            score: countCorrectAnswers(answers, pattern)
        }
    })

    const maxScore = Math.max(...scores.map(({score}) => score))

    return scores
        .filter(({score}) => score === maxScore)
        .map(({studentNumber}) => studentNumber)
}