function floodFill(image: number[][], sr: number, sc: number, color: number): number[][] {
    const rows = image.length
    const cols = image[0].length
    const originColor = image[sr][sc]

    if(color === originColor) {
        return image
    }

    const queue = [[sr, sc]]
    let head = 0

    const dr = [1, -1, 0, 0]
    const dc = [0, 0, 1, -1]

    image[sr][sc] = color

    while(head < queue.length) {
        const [r, c] = queue[head++]

        for(let i = 0; i < 4; i++) {
            const nr = r + dr[i]
            const nc = c + dc[i]

            if(nr < 0 || nc < 0 || nr >= rows || nc >= cols) {
                continue
            }

            if(image[nr][nc] !== originColor) {
                continue
            }

            image[nr][nc] = color
            queue.push([nr, nc])
        }
    }

    return image
}