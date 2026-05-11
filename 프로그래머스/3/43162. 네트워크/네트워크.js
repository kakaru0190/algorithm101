function solution(n, computers) {
    let answer = 0;
    const visited = Array(n).fill(false)

    const dfs = (current) => {
        visited[current] = true

        for (let next = 0; next < n; next++) {
            if (visited[next]) continue;
            if (computers[current][next] === 0) continue;

            dfs(next)
        }
    }

    for (let i = 0; i < n; i++) {
        if (visited[i]) continue;

        dfs(i)
        answer += 1;
    }
    return answer;
}