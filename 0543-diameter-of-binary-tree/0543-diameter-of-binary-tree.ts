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

function diameterOfBinaryTree(root: TreeNode | null): number {
    let diameter = 0

    const getHeight = (node: TreeNode | null): number => {
        if(!node) {
            return 0
        }

        const left = getHeight(node.left)
        const right = getHeight(node.right)

        diameter = Math.max(diameter, left + right)

        return Math.max(left, right) + 1
    }

    getHeight(root)
    return diameter
};