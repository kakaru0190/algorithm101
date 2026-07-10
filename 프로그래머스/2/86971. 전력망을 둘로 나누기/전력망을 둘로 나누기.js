function solution(n, wires) {
    let answer = Infinity

    const dfs = (node, graph, visited) => {
        visited[node] = true
        let count = 1

        for(const next of graph[node]) {
            if(visited[next]) continue

            count += dfs(next, graph, visited)
        }

        return count
    }

    for (let cut = 0; cut < wires.length; cut++)  {
        const graph = Array.from({length: n + 1}, () => [])

        for(let i = 0; i < wires.length; i++) {
            if(cut === i) continue

            const [a, b] = wires[i]
            graph[a].push(b)
            graph[b].push(a)
        }

        const visited = Array(n + 1).fill(false)
        const count = dfs(1, graph, visited)

        const diff = Math.abs(count - (n - count))
        answer = Math.min(diff, answer)

    }

    return answer
}