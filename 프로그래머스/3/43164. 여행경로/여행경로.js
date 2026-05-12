function solution(tickets) {
    tickets.sort((a, b) => {
        if (a[0] === b[0]) {
            return a[1].localeCompare(b[1])
        }
        return a[0].localeCompare(b[0])
    })

    const visited = Array(tickets.length).fill(false)
    const route = ["ICN"]

    const dfs = (current) => {
        if (route.length === tickets.length + 1) {
            return true
        }

        for (let i = 0; i < tickets.length; i++) {
            const [from, to] = tickets[i]

            if (visited[i]) continue
            if (current !== from) continue

            visited[i] = true
            route.push(to)

            if (dfs(to)) {
                return true
            }

            route.pop()
            visited[i] = false
        }

        return false
    }

    dfs("ICN")

    return route
}