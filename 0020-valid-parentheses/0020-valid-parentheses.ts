function isValid(s: string): boolean {
    if(s.length % 2 !== 0) {
        return false
    }

    const stack: string[] = []

    const pairs: Record<string, string> = {
        ")": "(",
        "]": "[",
        "}": "{"
    }

    for(const char of s) {
        if(!(char in pairs)) {
            stack.push(char)
            continue
        }

        if(stack.pop() !== pairs[char]) {
            return false
        }
    }

    return stack.length === 0
}