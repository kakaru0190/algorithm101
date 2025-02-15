function hanoi(n, from, by, to, answer) {
  if (n === 1) {
      answer.push([from, to]);
      return;
  }
    hanoi(n - 1, from, to, by, answer);
    answer.push([from, to])
    hanoi(n - 1, by, from, to, answer);
}

function solution(n) {
  const answer = [];
  hanoi(n, 1, 2, 3, answer);
  return answer;
}
