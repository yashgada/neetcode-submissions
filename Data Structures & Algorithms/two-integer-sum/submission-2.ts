class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const obj = {};
        for (const i in nums){
            const num = nums[i];
            const pair = target-num;
            // console.log({num,pair,i})
            // console.log(obj[num])
            // console.log(typeof obj[num])
            // console.log(!!obj[num])
            if(obj[num]){
                // console.log('Got it!')
                // console.log(i)
                // console.log(typeof i)
                // console.log('[obj[pair],i]',[+obj[num],+i])
                return ([+obj[num],+i])}
            obj[pair] = i
            // console.log('obj: ', obj)
        }
        // console.log(obj)
        return [3,5];
    }
}
