function solution(phone_book) {
    const sortedPhoneBook = [...phone_book].sort()

    for (let i = 0; i < sortedPhoneBook.length - 1; i++) {
        const current = sortedPhoneBook[i]
        const next = sortedPhoneBook[i + 1]

        if (next.startsWith(current)) {
            return false
        }
    }

    return true
}