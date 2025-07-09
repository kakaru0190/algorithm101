function solution(n, left, right) {
    var answer = [];
    
    for (left; left <= right; left++) {
        const i = parseInt(left / n) + 1
        const j = left % n + 1
        answer.push(Math.max(...[i, j]))
    }
    
    return answer;
}