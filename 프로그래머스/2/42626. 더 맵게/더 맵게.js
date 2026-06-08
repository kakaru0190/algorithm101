class MinHeap {
    constructor() {
        this.heap = []
    }

    size() {
        return this.heap.length
    }

    peek() {
        return this.heap[0]
    }

    push(value) {
        this.heap.push(value)

        let index = this.size() - 1

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)

            if (this.heap[parentIndex] <= this.heap[index]) break;

            [this.heap[parentIndex], this.heap[index]] = [
                this.heap[index],
                this.heap[parentIndex]
            ]

            index = parentIndex
        }
    }

    pop() {
        if (this.size() === 0) return undefined
        if (this.size() === 1) return this.heap.pop()

        const min = this.heap[0]
        this.heap[0] = this.heap.pop()

        let index = 0

        while (true) {
            const leftIndex = index * 2 + 1
            const rightIndex = index * 2 + 2
            let smallestIndex = index

            if (
                leftIndex < this.size() &&
                this.heap[leftIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = leftIndex
            }

            if (
                rightIndex < this.size() &&
                this.heap[rightIndex] < this.heap[smallestIndex]
            ) {
                smallestIndex = rightIndex
            }

            if (smallestIndex === index) break

            [this.heap[index], this.heap[smallestIndex]] = [
                this.heap[smallestIndex],
                this.heap[index]
            ]

            index = smallestIndex
        }

        return min
    }
}

function solution(scoville, K) {
    const heap = new MinHeap()

    for (const value of scoville) {
        heap.push(value)
    }

    let count = 0

    while (heap.size() >= 2 && heap.peek() < K) {
        const first = heap.pop()
        const second = heap.pop()

        const mixed = first + second * 2

        heap.push(mixed)
        count += 1
    }
    
    return heap.peek() >= K ? count : -1
}