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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode, q: TreeNode): TreeNode | null {

    const recur = (node: TreeNode | null) => {
        if (node === null) {
            return null
        }

        const nodeVal = node.val

        if (nodeVal < q.val && nodeVal < p.val) {
            return recur(node.right)
        }

        if (nodeVal > q.val && nodeVal > p.val) {
            return recur(node.left)
        }

        return node
    }

    return recur(root)
}