function solution(maps) {
    const answer = []
    const rowLen = maps.length
    const colLen = maps[0].length
    const visited = Array.from({length: rowLen}, () => Array(colLen).fill(false))

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    const dfs = (row, col) => {
        visited[row][col] = true

        let count = Number(maps[row][col])

        for (const [dr, dc] of directions) {
            const nr = dr + row
            const nc = dc + col

            if (nr < 0 || nr >= rowLen) continue
            if (nc < 0 || nc >= colLen) continue
            if (maps[nr][nc] === 'X') continue
            if (visited[nr][nc]) continue

            count += dfs(nr, nc)
        }

        return count
    }

    for (let row = 0; row < rowLen; row++) {
        for (let col = 0; col < colLen; col++) {
            if (maps[row][col] !== 'X' && !visited[row][col]) {
                const count = dfs(row, col)
                answer.push(count)
            }
        }
    }

    return !!answer.length ? answer.sort((a, b) => a - b) : [-1]
}