function solution(k, dungeons) {
    let answer = 0;
    const visited = Array(dungeons.length).fill(false)

    const dfs = (fatigue, count) => {
        answer = Math.max(answer, count)

        for (let i = 0; i < dungeons.length; i++) {
            const [required, cost] = dungeons[i]

            if (visited[i]) continue
            if (fatigue < required) continue

            visited[i] = true
            dfs(fatigue - cost, count + 1)
            visited[i] = false
        }
    }

    dfs(k, 0)

    return answer
}

