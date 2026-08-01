class MyQueue {
    private inStack: number[] = []
    private outStack: number[] = []

    push(x: number): void {
        this.inStack.push(x)
    }

    pop(): number {
        this.moveToOutStack()
        return this.outStack.pop()!
    }

    peek(): number {
        this.moveToOutStack()
        return this.outStack[this.outStack.length - 1]
    }

    empty(): boolean {
        return this.outStack.length === 0 && this.inStack.length === 0;
    }

    private moveToOutStack() {
        if (this.outStack.length === 0) {
            while (this.inStack.length !== 0) {
                const pop = this.inStack.pop()!
                this.outStack.push(pop)
            }
        }
    }
}


/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */