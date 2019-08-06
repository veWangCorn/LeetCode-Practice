/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const nums1 = [1,5,2,3]
const nums2 = [3,4]
var findMedianSortedArrays = function(nums1,nums2){
    var l1=0,l2=0,temp=[]
    while(l1 !== nums1.length && l2!==nums2.length){
        if(nums1[l1] > nums2[l2]){
            temp.push(nums2[l2])
            l2++
        } else {
            temp.push(nums1[l1])
            l1++
        }
    }
    while(l1<nums1.length){
        temp.push(nums1[l1])
        l1++
    }
    while(l2<nums2.length){
        temp.push(nums2[l2])
        l2++
    }
    console.log(temp)

    const isEven = temp.length%2===0
    if(isEven){
        return (temp[parseInt(temp.length / 2) - 1] + temp[parseInt(temp.length/2)])*0.5
    } else {
        return temp[parseInt(temp.length/2)]
    }
}
const result = findMedianSortedArrays(nums1,nums2)
console.log(result)