function solution(topping) {
    let res = 0
    const leftMap = new Map()
    const rightMap = new Map()
    
    for (const t of topping) {
        rightMap.set(t, (rightMap.get(t) || 0) + 1)
    }
    
    for (const t of topping) {
    	leftMap.set(t, (leftMap.get(t) || 0) + 1)
        rightMap.set(t, rightMap.get(t) - 1)
        
        if(rightMap.get(t) === 0) {
            rightMap.delete(t)
        }
        
        if(leftMap.size === rightMap.size) {
            res += 1
        }
    }
    
    return res
}