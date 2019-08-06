/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if(s.length<2){
        return s
    }
    let res=[]
    for(let i=0;i<=s.length-1;i++){
        if(!res.includes(s[i])){
            res.push(s[i])
        }
    }
    if(res.length===1){
        return s
    }
    let max = 0
    let maxSub = ''
    for(let i=0; i<=s.length-1;i++){
        for(let j=i;j<s.length;j++){
            let temp = s.slice(i,j+1)
            if (isPalindrom(temp)){
                max = max > temp.length ? max : temp.length
                maxSub = max > temp.length ? maxSub : temp
            }
        }
    }
    console.log(maxSub)
    return maxSub
}
function isPalindrom(str){
    let i=0,j=str.length-1
    if (i <= j){
        while (i < str.length && j>0){
            if (str[i] !== str[j]){
                return false
            }
            i++
            j--
        }
    }
    return true
}

longestPalindrome('babad')