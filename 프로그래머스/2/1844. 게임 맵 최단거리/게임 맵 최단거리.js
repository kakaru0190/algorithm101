function solution(maps) {
    const rows = maps.length;
    const cols = maps[0].length;

    const queue = [0];
    let head = 0;

    const dr = [0, 0, 1, -1];
    const dc = [1, -1, 0, 0];

    while (head < queue.length) {
        const current = queue[head++];

        const row = Math.floor(current / cols);
        const col = current % cols;

        for (let i = 0; i < 4; i++) {
            const nextRow = row + dr[i];
            const nextCol = col + dc[i];

            if (nextRow < 0 || nextRow >= rows) continue;
            if (nextCol < 0 || nextCol >= cols) continue;
            if (nextRow === 0 && nextCol === 0) continue;
            if (maps[nextRow][nextCol] !== 1) continue;

            maps[nextRow][nextCol] = maps[row][col] + 1;
            queue.push(nextRow * cols + nextCol);
        }
    }

    const answer = maps[rows - 1][cols - 1];

    return answer === 1 ? -1 : answer;
}