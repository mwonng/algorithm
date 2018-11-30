var threeSum = function(nums) {
    var i, j, k, n = nums.length, temp, flag, nums_return = [], index = 0;
    // nums = nums.sort((a,b)=>{return a-b})
    for(i = 0; i < n - 1; i++) {
        flag = true;
        for(j = 0; j < n - 1 - i; j++) {
            if(nums[j] > nums[j + 1]) {
                temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
                flag = false;
            }
        }
        if(flag) break;
    }
    for(i = 0; i < n - 2; i++) {
        if(nums[i] > 0) break;
        while(i > 0 && nums[i] == nums[i - 1] && i < n - 3) {
            i++;
        }
        if(i == n - 3 && nums[i] == nums[i - 1]) break;
        j = i + 1; k = n - 1;
        while(j < k) {
            if(nums[i] + nums[j] + nums[k] == 0) {
                nums_return[index++] = [nums[i], nums[j], nums[k]];
                j++;
                // if value continues value is same, skip
                while(nums[j] == nums[j - 1] && j < k) {
                    j++;
                }
            } else if(nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
    }
    return nums_return;
};

var nums = [-1, 0, 1, 2, -1, -4];

threeSum(nums);