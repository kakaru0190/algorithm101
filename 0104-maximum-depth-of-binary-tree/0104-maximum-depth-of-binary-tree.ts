/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function maxDepth(root: TreeNode | null): number {
    const depth = (node: TreeNode | null): number => {
        if (!node) return 0

        const leftDepth = depth(node.left)
        const rightDepth = depth(node.right)

        return Math.max(leftDepth, rightDepth) + 1
    }
    return depth(root)
};