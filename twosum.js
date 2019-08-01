
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var nums = [2,7,11,15],
    target = 9
//because nums[0]+nums[1] = 2+7=9
//return [0,1]
function twoSum(nums,target){
    let result = []
    for(let i=0;i<=nums.length-1;i++){
        for(let j=i+1;j<nums.length;j++){
            console.log(nums[i],nums[j])
            if(nums[i]+nums[j]===target){
                result = [i,j]
            }
        }
    }
    return result
}
const result = twoSum(nums,target)
console.log(result)
//output:[0,1]