function solution(citations) {
    return [...citations]
        .sort((a, b) => b - a)
        .filter((citation, idx) => citation >= idx + 1)
        .length
}
