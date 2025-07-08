function findTwoDemensionalArrayIndex(arr, target) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {
            if(arr[i][j] === target) {
                return [i, j]
            }
        }
    }
}

function solution(n, w, num) {
    const arr = [];
    let result = 0;
    let i = 1;
    let rowIndex = 0;
    
    while(i <= n) {
        const row = [];
        for(let j = 0; j < w; j++) {
            row.push(i <= n ? i : 0);
            i++;
        }
        
        if(rowIndex % 2 === 1) {
            row.reverse();
        }
        
        arr.push(row);
        rowIndex++;
    }
    
    let [row, column] = findTwoDemensionalArrayIndex(arr, num);
    
    while(arr[row] && arr[row][column]) {
        result += 1;
        row += 1;
    }
    
    return result
}