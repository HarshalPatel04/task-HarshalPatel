// twoSum(nums, target) -> returns indices of two numbers adding
// If none exist, return []
export function twoSum(nums, target) {
    const indeces = [];

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (target - num in indeces) {
            return [indeces[target - num], i];
        }
        indeces[num] = i;
    }
};

