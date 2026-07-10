function solution(tickets) {
    tickets.sort((a, b) => {
        if(a[0] === b[0]) {
            return a[1].localeCompare(b[1])
        }
        return a[0].localeCompare(b[0])
    })

    const answer = ["ICN"]
    const visited = Array(tickets.length).fill(false)

    const dfs = (current) => {
        if(answer.length === tickets.length + 1) {
            return true
        }

        for(let i = 0; i < tickets.length; i++) {
            const [from , to] = tickets[i]

            if(visited[i]) continue
            if(from !== current) continue

            visited[i] = true
            answer.push(to)

            if(dfs(to)) {
                return true
            }

            answer.pop()
            visited[i] = false
        }

        return false
    }

    dfs("ICN")

    return answer
}