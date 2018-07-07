/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(node) {
    if (!node) return 0;
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    return Math.max(left, right) + 1;
};