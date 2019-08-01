//求字符串中最大不重复序列的长度
function lengthOfLongestSubstring(s){
    var uniqArr =[]
    var maxLen = 0
    for(let i=0;i<=s.length-1;i++){
        if(!uniqArr.includes(s[i])){
            uniqArr.push(s[i])
            if(uniqArr.length>maxLen){
                maxLen = uniqArr.length
            }
        } else {
            console.log(uniqArr,uniqArr.indexOf(s[i]))
            uniqArr = uniqArr.slice(uniqArr.indexOf(s[i])+1,uniqArr.length)
            uniqArr.push(s[i])
        }
    }
    console.log(maxLen)
}
lengthOfLongestSubstring("abcabcbb")
//output:3