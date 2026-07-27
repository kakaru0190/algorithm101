function isAnagram(s: string, t: string): boolean {
    if(s.length !== t.length) {
        return false
    }

    const map = new Map()

    for(const char of s) {
        map.set(char, (map.get(char) ?? 0) + 1)
    }

    for(const char of t) {
        const count = map.get(char)

        if(!count) {
            return false
        }

        map.set(char, count - 1)
    }

    return true
}