function addMinutes(schedule, minutesToAdd) {
    let hour = Math.floor(schedule / 100);
    let minute = schedule % 100;
    
    minute += minutesToAdd;
    
    hour += Math.floor(minute / 60);
    minute = minute % 60;
    
    return hour * 100 + minute
}

function solution(schedules, timelogs, startday) {
    let result = 0;
    let i = 0;
    
    const recognitionSchedules = schedules.map((schedule) => {
        return addMinutes(schedule, 10);
    });
    
    for(const timelog of timelogs) {
        let day = startday;
        const check = timelog.every((time) => {
            if(day === 6 || day === 7 || recognitionSchedules[i] >= time) {
                day += 1
                day = day % 7 === 0 ? 7 : day % 7; 
                return true;
            }
            return false;
        })
        
        i += 1;
        
        if(check) {
            result += 1;
        }
    }
    
    return result
}