class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length !== t.length) return false;
        const a = {};
        for (let i = 0;i<s.length;i++){
            a[s[i]] = 1 + (a[s[i]]||0)
            a[t[i]] = (a[t[i]]|| 0) - 1
        }
        console.log(a)
        return !Object.values(a).some((v)=>+v!==0)
    }
}
