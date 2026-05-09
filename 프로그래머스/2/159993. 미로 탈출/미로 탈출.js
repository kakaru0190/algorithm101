function searchStartPoint(maps) {
    for (let rowIdx = 0; rowIdx < maps.length; rowIdx++) {
        const map = maps[rowIdx]
        for (let colIdx = 0; colIdx < map.length; colIdx++) {
            if (map[colIdx] === 'S') {
                return [rowIdx, colIdx, 0]
            }
        }
    }
}

function bfs(maps, startPoint, target) {
    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]
    const queue = [[startPoint[0], startPoint[1], 0]]
    const rowLen = maps.length
    const colLen = maps[0].length
    const visited = Array.from({length: rowLen}, () => Array(colLen).fill(false))
    const [startRow, startCol] = startPoint
    visited[startRow][startCol] = true

    let head = 0

    while (head < queue.length) {
        const [row, col, time] = queue[head++]

        if (maps[row][col] === target) {
            return [row, col, time]
        }

        for (const [dr, dc] of directions) {
            const nextRow = row + dr
            const nextCol = col + dc

            if (nextRow < 0 || nextCol < 0 || nextRow >= rowLen || nextCol >= colLen) continue
            if (visited[nextRow][nextCol]) continue
            if (maps[nextRow][nextCol] === 'X') continue

            visited[nextRow][nextCol] = true
            queue.push([nextRow, nextCol, time + 1])
        }
    }

    return []
}

function solution(maps) {
    const startPoint = searchStartPoint(maps)

    const leverPoint = bfs(maps, startPoint, 'L')
    if (!leverPoint.length) {
        return -1
    }

    const exitPoint = bfs(maps, [leverPoint[0], leverPoint[1], 0], 'E')
    if (!exitPoint.length) {
        return -1
    }

    return leverPoint[2] + exitPoint[2]
}