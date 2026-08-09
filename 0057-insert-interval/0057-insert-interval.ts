function insert(intervals: number[][], newInterval: number[]): number[][] {
    const result: number[][] = []
    let i = 0
    let [newStart, newEnd] = newInterval

    while(i < intervals.length && intervals[i][1] < newStart) {
        result.push(intervals[i])
        i += 1
    }

    while(i < intervals.length && intervals[i][0] <= newEnd) {
        newStart = Math.min(newStart, intervals[i][0])
        newEnd = Math.max(newEnd, intervals[i][1])
        i += 1
    }

    result.push([newStart, newEnd])

    while(i < intervals.length) {
        result.push(intervals[i])
        i += 1
    }

    return result
};