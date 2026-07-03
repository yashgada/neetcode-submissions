class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        nums.sort((a, b) => a - b);
        for (const j in nums) {
            const i = Number(j)
            if (i >= nums.length - 1) continue;
            if (nums[i] === nums[i + 1]) return true;
        }
        return false;
    }
}
