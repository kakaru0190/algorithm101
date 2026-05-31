function solution(array, commands) {
    return commands.map(([start, end, number]) => {
        return array
            .slice(start - 1, end)
            .sort((a, b) => a - b)[number - 1]
    })
}
