/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function(isBadVersion: any) {

    return function(n: number): number {
        let low = 1
        let high = n

        while(low < high) {
            const mid = Math.floor((low + high) / 2)
            if(isBadVersion(mid)) {
                high = mid
            } else {
                low = mid + 1
            }
        }

        return low
    };
};