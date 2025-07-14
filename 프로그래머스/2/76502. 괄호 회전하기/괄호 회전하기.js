function solution(s) {
    if(s.length % 2 === 1) {
        return 0
    }
    
    let answer = 0
    let count = s.length
    const couple = {
        '}': '{',
        ')': '(',
        ']': '['
    }
    
    while(count) {
    	const stack = []
        let idx = 0
        const ss = [...s.slice(s.length - count), ...s.slice(0, s.length - count)]
        
        
        count -= 1
        
        for(const val of ss) {
            if(val === '[' || val === '(' || val === '{') {
                stack.push(val)
            	idx += 1
                continue
            } else {
                if(stack.legnth !== 0) {
                    const stackLastVal = stack[stack.length - 1]
                    if(stackLastVal !== couple[val]) {
                        break
                    }
            		idx += 1
                    stack.pop()
                } else {
                    break
                }
            }
        } 
        
        if(idx === s.length) {
        	answer += 1
    	}
    }
    
    return answer
}