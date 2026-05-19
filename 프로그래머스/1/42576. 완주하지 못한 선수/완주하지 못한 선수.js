function solution(participant, completion) {
    const participantMap = new Map()

    for (const name of participant) {
        participantMap.set(name, (participantMap.get(name) ?? 0) + 1)
    }

    for (const name of completion) {
        participantMap.set(name, participantMap.get(name) - 1)
    }

    for (const [name, count] of participantMap) {
        if (count > 0) return name
    }
}