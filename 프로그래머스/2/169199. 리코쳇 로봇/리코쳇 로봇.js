function findStartPoint(board) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (board[row][col] === 'R') {
                return [row, col, 0]
            }
        }
    }
}

function solution(board) {
    let answer = -1;

    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false))
    const queue = [findStartPoint(board)]

    let head = 0

    const directions = [
        [1, 0],
        [0, 1],
        [-1, 0],
        [0, -1]
    ]

    visited[queue[0][0]][queue[0][1]] = true
    while (head < queue.length) {
        const [row, col, count] = queue[head++]

        if (board[row][col] === 'G') {
            return count
        }

        for (const [dr, dc] of directions) {
            let nextRow = row
            let nextCol = col

            while (true) {
                const movedRow = nextRow + dr
                const movedCol = nextCol + dc

                if (movedRow < 0 || movedCol < 0) break
                if (movedRow >= board.length || movedCol >= board[0].length) break
                if (board[movedRow][movedCol] === "D") break

                nextRow = movedRow
                nextCol = movedCol
            }

            if (visited[nextRow][nextCol]) continue

            visited[nextRow][nextCol] = true
            queue.push([nextRow, nextCol, count + 1])
        }
    }

    return answer;
}