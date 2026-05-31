function solution(numbers) {
    const sortedNumbers = [...numbers].sort((a, b) => {
        const ab = `${a}${b}`
        const ba = `${b}${a}`

        return ba.localeCompare(ab)
    })

    if (sortedNumbers[0] === 0) {
        return '0'
    }

    return sortedNumbers.join('')
}