function solution(jobs) {

  const sortedJobs = jobs

    .map(([requestTime, workTime], jobNumber) => ({

      jobNumber,

      requestTime,

      workTime,

    }))

    .sort((a, b) => {

      if (a.requestTime !== b.requestTime) {

        return a.requestTime - b.requestTime;

      }

      return a.jobNumber - b.jobNumber;

    });

  const waitingQueue = [];

  let time = 0;

  let index = 0;

  let completedCount = 0;

  let totalTurnaroundTime = 0;

  while (completedCount < jobs.length) {

    // 현재 시각까지 요청된 작업을 대기 큐에 넣는다

    while (

      index < sortedJobs.length &&

      sortedJobs[index].requestTime <= time

    ) {

      waitingQueue.push(sortedJobs[index]);

      index++;

    }

    // 대기 큐가 비어 있다면 다음 요청 시각으로 이동

    if (waitingQueue.length === 0) {

      time = sortedJobs[index].requestTime;

      continue;

    }

    // 대기 큐에서 우선순위가 가장 높은 작업 선택

    waitingQueue.sort((a, b) => {

      // 1순위: 소요 시간이 짧은 작업

      if (a.workTime !== b.workTime) {

        return a.workTime - b.workTime;

      }

      // 2순위: 요청 시각이 빠른 작업

      if (a.requestTime !== b.requestTime) {

        return a.requestTime - b.requestTime;

      }

      // 3순위: 작업 번호가 작은 작업

      return a.jobNumber - b.jobNumber;

    });

    const currentJob = waitingQueue.shift();

    time += currentJob.workTime;

    totalTurnaroundTime += time - currentJob.requestTime;

    completedCount++;

  }

  return Math.floor(totalTurnaroundTime / jobs.length);

}