function solution(rectangle, characterX, characterY, itemX, itemY) {
    const SCALE = 2

    const maxCoord = Math.max(
        ...rectangle.flat(),
        characterX,
        characterY,
        itemX,
        itemY
    )

    const size = maxCoord * SCALE + 2

    const board = Array.from({length: size}, () => Array(size).fill(0))

    for (const [x1, y1, x2, y2] of rectangle) {
        const sx1 = x1 * SCALE
        const sy1 = y1 * SCALE
        const sx2 = x2 * SCALE
        const sy2 = y2 * SCALE

        for (let y = sy1; y <= sy2; y++) {
            for (let x = sx1; x <= sx2; x++) {
                const isInside = x > sx1 && x < sx2 && y > sy1 && y < sy2

                if (isInside) {
                    board[y][x] = 2
                } else if (board[y][x] !== 2) {
                    board[y][x] = 1
                }
            }
        }
    }

    const startX = characterX * SCALE
    const startY = characterY * SCALE
    const targetX = itemX * SCALE
    const targetY = itemY * SCALE

    const visited = Array.from({length: size}, () => Array(size).fill(false))

    const queue = [[startY, startX, 0]]
    visited[startY][startX] = true

    const directions = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
    ]

    let head = 0

    while (head < queue.length) {
        const [y, x, distance] = queue[head++]

        if (y === targetY && x === targetX) {
            return distance / SCALE
        }

        for (const [dy, dx] of directions) {
            const ny = y + dy
            const nx = x + dx

            if (ny < 0 || ny >= size) continue
            if (ny < 0 || nx >= size) continue
            if (visited[ny][nx]) continue
            if (board[ny][nx] !== 1) continue

            visited[ny][nx] = true
            queue.push([ny, nx, distance + 1])
        }
    }
}