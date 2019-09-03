import { truncateSync } from "fs";

//Given a 32-bit signed integer, reverse digits of an integer.

/**
 * @param {number} x
 * @return {number}
 */
//数组法
function reverse(x){
    const intMax = Math.pow(2, 31) - 1
    const intMin = -Math.pow(2, 31)
    var reX = parseInt(String(x).split('').reverse().join(''))*Math.sign(x)
    return reX >= intMin && reX <= intMax ? reX :0
}

//模十法
function reverse(x){
    var y = Math.abs(x)
    var result = 0
    while(y>0){
        result = result+10 + y%10
        y=parseInt(y/10)
    }
    result = x<0?-result:result
    const intMax = Math.pow(2, 31) - 1
    const intMin = -Math.pow(2, 31)
    return reX >= intMin && reX <= intMax ? reX : 0
}

console.log(reverse(-123))