function findStartPoint(maps) {
    for (let y = 0; y < maps.length; y++) {
        for (let x = 0; x < maps[0].length; x++) {
            if (maps[y][x] === 'S') {
                return [x, y, 0]
            }
        }
    }
    return []
}

function bfs(maps, point, target) {
    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    const queue = [point]
    const visited = Array.from({length: maps.length}, () => Array(maps[0].length).fill(false))
    visited[queue[0][1]][queue[0][0]] = true

    let head = 0

    while (head < queue.length) {
        const [x, y, count] = queue[head++]

        if (maps[y][x] === target) {
            return [x, y, count]
        }

        for (let i = 0; i < 4; i++) {
            const nextX = x + dx[i]
            const nextY = y + dy[i]

            if (nextX < 0 || nextY < 0 || nextX >= maps[0].length || nextY >= maps.length) continue
            if (maps[nextY][nextX] === 'X') continue
            if (visited[nextY][nextX]) continue

            visited[nextY][nextX] = true
            queue.push([nextX, nextY, count + 1])
        }
    }

    return []
}

function solution(maps) {
    const startPoint = findStartPoint(maps)
    if (!startPoint.length) {
        return -1
    }

    const leverPoint = bfs(maps, startPoint, 'L')
    if (!leverPoint.length) {
        return -1
    }

    const exitPoint = bfs(maps, leverPoint, "E")

    if (!exitPoint.length) {
        return -1
    }

    return exitPoint[2]
}