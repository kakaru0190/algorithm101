function updateMatrix(mat: number[][]): number[][] {
    const queue: [number, number][] = []
    const result: number[][] = mat.map((yPoints) => yPoints.map((x) => x === 0 ? 0 : -1))

    let head = 0

    for (let y = 0; y < mat.length; y++) {
        for (let x = 0; x < mat[0].length; x++) {
            if (result[y][x] === 0) {
                queue.push([y, x])
            }
        }
    }

    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    while (head < queue.length) {
        const [y, x] = queue[head++]

        for (let i = 0; i < 4; i++) {
            const ny = dy[i] + y
            const nx = dx[i] + x

            const isOutOfBounds = ny < 0 || ny >= mat.length || nx < 0 || nx >= mat[0].length

            if(isOutOfBounds || result[ny][nx] !== -1) {
                continue
            }

            result[ny][nx] = result[y][x] + 1
            queue.push([ny, nx])
        }
    }

    return result  
};