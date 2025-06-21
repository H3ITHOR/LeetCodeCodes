/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    for (let i = 0; i < x.toString().length / 2; i++){
        if (x.toString()[i] !== x.toString()[x.toString().length - (i+1)]){
            return false;
        }
    }
    return true;
};