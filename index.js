/* Roman numeral are represented by seven different symbols: I, V, X, L, C, D and M.






*/

/**
 * @param {string} s
 * @return {number}
 */

//Set up hash
const conversion = {M: 1000, D: 500, C: 100, L: 50, X:10, V:5, I:1}

var s = "LVIII"

var romanToInt = function(s) {
    const arr = s.split('');
    let total = 0;

    for (let i=0; i<arr,length; i++) {
        let current = arr[i];
        let currentValue = conversion[current];

        let next = arr[i+1];
        let nextValue = conversion[nextValue]

        if (currentValue < nextValue) {
            total -= currentValue
        } else {
            total += currentValue
        }
    }
    return total
};
