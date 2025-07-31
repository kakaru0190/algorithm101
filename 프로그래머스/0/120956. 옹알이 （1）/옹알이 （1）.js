function solution(babbling) {
    var answer = 0;

    for (let s of babbling) {
        const ret = s.replace(/(aya|ye|woo|ma){1}/g, '');
        if (!ret) answer += 1;
    }

    return answer;
}