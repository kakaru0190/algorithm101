function solution(x, y, n) {
    const queue = [[x, 0]];
    const visited = new Set([x]);
    
    let head = 0;
    
    while (head < queue.length) {
        const [current, count] = queue[head++];
        
        if (current === y) {
            return count;
        }
        
        const nextNumbers = [
            current + n,
            current * 2,
            current * 3,
        ];
        
        for (const next of nextNumbers) {
            if (next > y) continue;
            if (visited.has(next)) continue;
            
            visited.add(next);
            queue.push([next, count + 1]);
        }
    }
    
    return -1;
}