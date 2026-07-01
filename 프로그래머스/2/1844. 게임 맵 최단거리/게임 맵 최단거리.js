function solution(maps) {
    const n = maps.length
    const m = maps[0].length
    const visited = Array.from({length: n}, () => Array(m).fill(false))
    const queue = [[0, 0, 1]]

    let head = 0

    visited[0][0] = true

    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    while (head < queue.length) {
        const [x, y, distance] = queue[head++]

        if (x === n - 1 && y === m - 1) {
            return distance
        }

        for (let i = 0; i < 4; i++) {
            const nx = x + dx[i]
            const ny = y + dy[i]

            if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue
            if (maps[nx][ny] === 0) continue
            if (visited[nx][ny]) continue

            visited[nx][ny] = true
            queue.push([nx, ny, distance + 1])
        }
    }

    return -1
}