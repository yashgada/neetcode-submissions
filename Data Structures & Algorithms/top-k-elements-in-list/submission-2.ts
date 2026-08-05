class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const obj: { [key: number]: number } = {};
        for (let n of nums) {
            obj[n] = (obj[n] || 0) + 1;
        }
        console.log(obj)
        return Object.entries(obj)
            .sort((a: any, b: any) => b[1] - a[1])
            .slice(0,k)
            .map((a) => +a[0]);
    }
}
