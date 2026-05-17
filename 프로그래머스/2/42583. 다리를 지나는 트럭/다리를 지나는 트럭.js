function solution(bridge_length, weight, truck_weights) {
    const queue = Array(bridge_length).fill(0)

    let head = 0
    let time = 0
    let bridgeWeight = 0
    let truckIndex = 0

    while (truckIndex < truck_weights.length || bridgeWeight > 0) {
        time++

        const outTruck = queue[head]
        bridgeWeight -= outTruck

        const nextTruck = truck_weights[truckIndex]

        if (truckIndex < truck_weights.length && bridgeWeight + nextTruck <= weight) {
            queue[head] = nextTruck
            bridgeWeight += nextTruck
            truckIndex += 1
        } else {
            queue[head] = 0
        }

        head = (head + 1) % bridge_length
    }

    return time
}