function solution(record) {
    const result = []
    const obj = {}
    
    for(const val of record) {
        const [action, id, name] = val.split(" ");
        
        switch(action) {
            case "Enter":
                obj[id] = name
                result.push(id + action[0])
                break
            case "Leave":
                result.push(id + action[0])
                break
            case "Change":
                obj[id] = name
                break
        }
    }
    
    return result.map((v) => {
        const id = v.slice(0, -1)
        const action = v.slice(-1)
        return `${obj[id]}${action === 'E' ? "님이 들어왔습니다." : "님이 나갔습니다."}`
    })   
}