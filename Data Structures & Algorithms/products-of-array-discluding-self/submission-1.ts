class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        const left = [];
        const right = [];
        for (let i = 0; i < nums.length; i++) {
            const j = nums.length-i-1;
            if (i === 0) {left[i] = 1;
            right[j] = 1;
            continue}
            left[i] = left[i - 1] * nums[i - 1];
            right[j] = right[j+1] * nums[j+1]
        }
        // console.log(left,right)
        const res = [];
        for(let i = 0;i<nums.length;i++){
            res[i]=left[i]*right[i]
        }
        return res;
    }
}
