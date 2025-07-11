function solution(n, k) {
    const answer = []
    const nums = Array.from({ length: n }, (_, i) => i + 1)
    const factorials = [1]
    
    for(let i = 1; i < n; i++) {
        factorials[i] = factorials[i - 1] * i
    }
  
    k -= 1
    
    while(nums.length) {
        if(nums.length === 1) {
            answer.push(nums[0])
            break;
        }
        
        const factorialsPopValue = factorials.pop()
        const digitIdx = Math.floor(k / factorialsPopValue)
        answer.push(nums[digitIdx])
        nums.splice(digitIdx, 1)
        k %= factorialsPopValue
    }
    
    return answer
}