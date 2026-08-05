class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const sets = [];
        const structs = [];
        // for (let str of strs){
        //     sets.push(this.createSet(str))
        // }
        for (let str of strs) {
            // sets.push(this.createSet(str))
            structs.push({ str, set: this.createSet(str) });
        }
        const hashes = [];
        // for (let set of sets){
        //     hashes.push(this.hashOfSet(set))
        // }
        for (let struct of structs) {
            struct.hash = this.hashOfSet(struct.set);
        }
        // console.log(hashes)
        structs.sort((a, b) => a.hash.localeCompare(b.hash));
        // console.log("structs: ", structs);
        // const groups = [[strs[0]]]
        const groups = [[structs[0].str]];

        // for (let i = 1; i<=strs.length; i++){
        //     if(hashes[i]===hashes[i-1]) groups.at(-1).push(strs[i])
        //     else groups.push([strs[i]])
        // }

        for (let i = 1; i < strs.length; i++) {
            // console.log("i: ",i)
            // console.log("F1");
            if (structs[i].hash === structs[i - 1].hash) {
                groups.at(-1).push(structs[i].str);
                // console.log("F2");
            } else groups.push([structs[i].str]);
            // console.log("F3");
        }
        // console.log('Hi')
        return groups;
    }
    createSet(str: string) {
        const obj = {};
        for (let s of str) {
            obj[s] = (obj[s] || 0) + 1;
        }
        return obj;
    }
    hashOfSet(set: any) {
        return Object.entries(set).sort().toString();
        // const sorted =
        // for (let i = 0; i++;i<sorted.length)
    }
}
