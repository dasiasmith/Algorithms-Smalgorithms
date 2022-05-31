/* Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "". */



/**
 * @param {string[]} strings
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length ==0) return "";
    let prefix = strs[0];
    for (let i=1; i<strs.length; i++)
    // Trim the prefix until it fits in the front of the correct word
    while (strs[i].indexOf(prefix) !== 0) {
        prefix = prefix.substring(0, prefix.length - 1);
        // If we can't trim down the prefix to fit in the word then we have no common prefix
        if (prefix.length === 0) return "";
    }
    return prefix;
}


var longestCommonPrefix = function(strs) {
    if (strs.length == 0) return "";
    let i = 0;
    while (i < strs[0].length) {
        let char = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] != char) {
                return strs[j].substring(0,i);
            }
        }
        i++;
    }
    return strs[0];
};