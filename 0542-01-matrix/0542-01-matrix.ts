function updateMatrix(mat: number[][]): number[][] {
  const queue: [number, number][] = [];
  const result: number[][] = mat.map((y) => y.map((x) => (x === 0 ? 0 : -1)));

  for (let y = 0; y < mat.length; y++) {
    for (let x = 0; x < mat[0].length; x++) {
      if (mat[y][x] === 0) {
        queue.push([y, x]);
      }
    }
  }

  let head = 0;

  const dx = [1, -1, 0, 0];
  const dy = [0, 0, 1, -1];

  while (head < queue.length) {
    const [y, x] = queue[head++];

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      const isOutOfBounds =
        ny < 0 || nx < 0 || ny >= mat.length || nx >= mat[0].length;

      if (isOutOfBounds || result[ny][nx] !== -1) {
        continue;
      }

      result[ny][nx] = result[y][x] + 1;
      queue.push([ny, nx]);
    }
  }

  return result;
};