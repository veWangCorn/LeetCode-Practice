function myAtoi(str){
    var sign = '+'
    var digitRegx = /^[0-9]/
    var i=0
    while(str.charAt(i) ===' ' && i<str.length){
        i++
    }
    str = str.slice(i)
    if(str.startsWith('+')){
        str = str.slice(1)
    }else if(str.startsWith('-')){
        str = str.slice(1)
        sign='-'
    }

    if(!digitRegx.test(str)) return 0

    var j=0
    while (j < str.length && digitRegx.test(str[j])){
        j++
    }
    str = str.substr(0,j)
    var value = parseInt(sign+str)
    const intMax = Math.pow(2, 31) - 1
    const intMin = -Math.pow(2, 31)
    return value >= intMin && value <= intMax ? value : 0
}

console.log(myAtoi('hello world   -41'))