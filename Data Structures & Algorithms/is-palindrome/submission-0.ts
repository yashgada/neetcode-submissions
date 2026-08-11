class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const isAN = (str) => {
            const code = str.charCodeAt(0);
            if (
                !(code > 47 && code < 58) && // numeric (0-9)
                !(code > 64 && code < 91) && // upper alpha (A-Z)
                !(code > 96 && code < 123)
            ) {
                // lower alpha (a-z)
                return false;
            }
            return true;
        };
        // let i = 0;
        let j = s.length - 1;
        for (let i = 0; i < s.length && i < j; i++) {
            console.log({i,'s[i]':s[i]})
            if(!isAN(s[i]))continue;
            while (!isAN(s[j])) {
                j--
            }
            if(s[j].toLowerCase()!==s[i].toLowerCase())return false
            j--;
        }
        return true;
    }
}
