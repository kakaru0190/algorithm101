function inputAssist(str) {
    const result = {}
    
    for(let i = 0; i < str.length - 1; i++) {
        const key = (str[i] + str[i + 1]).toLowerCase()
        const regx = /^[a-z]+$/
        if(regx.test(key)) {
            result[key] = result[key] ? result[key] + 1 : 1
        }
    }
    
    return result
}

function solution(str1, str2) {
    const inputStr1 = inputAssist(str1)
    const inputStr2 = inputAssist(str2)
    
    const uniqueKeys = new Set([...Object.keys(inputStr1), ...Object.keys(inputStr2)])
    
    if(uniqueKeys.size === 0) {
        return 65536
    }
    
   	const result = [...uniqueKeys].reduce((ac, cr) => {
        const inputStr1Count = inputStr1[cr] || 0
        const inputStr2Count = inputStr2[cr] || 0
        
        ac.intersection = ac.intersection + Math.min(inputStr1Count, inputStr2Count)
        ac.union = ac.union + Math.max(inputStr1Count, inputStr2Count)
        return ac
    }, {
        intersection: 0,
        union: 0
    })
    
    return parseInt((result.intersection / result.union) * 65536)
}