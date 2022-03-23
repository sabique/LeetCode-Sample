/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let indexMap = new Map();
    
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        
        if(indexMap.has(diff))
            return [indexMap.get(diff), i];
        else
            indexMap.set(nums[i], i);
    }
};