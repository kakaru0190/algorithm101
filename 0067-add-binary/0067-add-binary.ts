function addBinary(a: string, b: string): string {
    const result: string[] = []
    let aIndex = a.length - 1
    let bIndex = b.length - 1
    let carry = 0

    while (aIndex >= 0 || bIndex >= 0 || carry > 0) {
        const aBit = aIndex >= 0 ? Number(a[aIndex]) : 0
        const bBit = bIndex >= 0 ? Number(b[bIndex]) : 0
        const sum = aBit + bBit + carry

        result.push(String(sum % 2))
        carry = Math.floor(sum / 2)
        aIndex--
        bIndex--
    }

    return result.reverse().join('')
};