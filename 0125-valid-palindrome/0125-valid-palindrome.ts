function isPalindrome(s: string): boolean {
    const cleanedS = s
        .toLowerCase()
        .replace(/[^a-z0-9]/g, "")

    let left = 0
    let right = cleanedS.length - 1

    while(left < right) {
        if(cleanedS[left] !== cleanedS[right]) {
            return false
        }

        left++
        right--
    }

    return true
}