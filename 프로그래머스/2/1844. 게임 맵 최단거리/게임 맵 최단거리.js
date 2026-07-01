function solution(maps) {
    const n = maps.length
    const m = maps[0].length

    const queue = [[0, 0]]
    let head = 0

    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    while (head < queue.length) {
        const [x, y] = queue[head++]
        
        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]
            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue
            if (maps[nx][ny] !== 1) continue
            maps[nx][ny] = maps[x][y] + 1
            queue.push([nx, ny])
        }
    }

    return maps[n - 1][m - 1] === 1 ? -1 : maps[n - 1][m - 1]
}