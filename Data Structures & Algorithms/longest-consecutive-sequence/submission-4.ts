class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        const tracker = new Set(nums);
        // console.log('tracker: ', tracker)
        let maxCount = 0;
        for(let num of nums){
            // console.log({num})
            if(!tracker.has(num-1)){
                // console.log('is left')
                let count = 1;
                while(tracker.has(num+1))count++ && num++;
                maxCount = Math.max(count,maxCount)
            }
        }

        return maxCount
    }
}
