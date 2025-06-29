/**
 * @param {string} s
 * @return {number}
 */

const Roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
}

var romanToInt = function(s) {
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        const current = Roman[s[i]];
        const next = Roman[s[i + 1]];
        if (next && current < next) {
            total -= current;
        } else {
            total += current;
        }
    }
    return total;
};