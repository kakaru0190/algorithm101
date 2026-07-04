function solution(maps) {
    const answer = []

    const rows = maps.length
    const columns = maps[0].length
    const visited = Array.from({length: rows}, () => Array(columns).fill(false))

    const dr = [1, -1, 0, 0]
    const dc = [0, 0, 1, -1]

    const dfs = (row, col) => {
        let count = Number(maps[row][col])

        visited[row][col] = true

        for (let i = 0; i < 4; i++) {
            const nr = dr[i] + row
            const nc = dc[i] + col

            if (nr < 0 || nc < 0 || nr >= rows || nc >= columns) continue
            if (maps[nr][nc] === 'X') continue
            if (visited[nr][nc]) continue

            count += dfs(nr, nc)
        }

        return count
    }

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) {
            if (maps[row][col] !== 'X' && !visited[row][col]) {
                const count = dfs(row, col)
                answer.push(count)
            }
        }
    }
   
    return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
}