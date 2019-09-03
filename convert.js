/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows <= 1) return s
    var result = ''
    const distance = 2 * (numRows - 1)
    for (let i = 0; i < numRows; i++) {
        for (let j = i; j < s.length; j += distance) {
            result += s[j]
            if(i !==0 && i!==numRows-1){
                let temp = j + distance - 2 * i
                s[temp] ? result+=s[temp] : result
            }
        }
    }
    return result
};