function findStartPoint(board) {
    for (let y = 0; y < board.length; y++) {
        for (let x = 0; x < board[0].length; x++) {
            if (board[y][x] === 'R') {
                return [x, y, 0]
            }
        }
    }
}

function solution(board) {
    let answer = -1

    const queue = [findStartPoint(board)]
    const visited = Array.from({length: board.length}, () => Array(board[0].length).fill(false))

    const dx = [1, -1, 0, 0]
    const dy = [0, 0, 1, -1]

    let head = 0

    visited[queue[0][1]][queue[0][0]] = true

    while (head < queue.length) {
        const [x, y, count] = queue[head++]

        if (board[y][x] === 'G') {
            return count
        }

        for (let i = 0; i < 4; i++) {
            let nextX = x
            let nextY = y

            while (true) {
                const movedX = nextX + dx[i]
                const movedY = nextY + dy[i]

                if (movedX < 0 || movedY < 0 || movedX >= board[0].length || movedY >= board.length) break
                if (board[movedY][movedX] === 'D') break

                nextX = movedX
                nextY = movedY
            }

            if (visited[nextY][nextX]) continue

            visited[nextY][nextX] = true
            queue.push([nextX, nextY, count + 1])
        }
    }

    return answer
}