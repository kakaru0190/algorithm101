function kClosest(points: number[][], k: number): number[][] {
    return points
    .map(([x, y]) => ({
      point: [x, y],
      distance: x * x + y * y,
    }))
    .sort((a, b) => a.distance - b.distance)
    .slice(0, k)
    .map(({ point }) => point);
};