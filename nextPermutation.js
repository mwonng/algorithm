/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    var maxP;
    var p = nums.length-1;
    var min = 9;
    var minP = nums.length-1

    if (p === 0) {
        return nums;
    }

    while ( nums[p-1] >= nums[p]) {
        p--;
    }
    maxP = p-1;

    var less = 9;
    pointer = p;
    while (nums[pointer] > nums[maxP]) {
        minP = pointer;
        pointer++;
    }

    // for (min=nums.length -1; min>=p; min--) {

    //     console.log("nums[min]->", nums[min])
    //     console.log("min->", min)
    //     console.log("less->", less)

    //     if (nums[min] > nums[maxP] && nums[min] <= less) {
    //         console.log("run here")
    //         less = nums[min];
    //         minP = min;
    //     }




    //     // if (nums[min] > nums[maxP] && nums[min] < less) {
    //     //     console.log("less", less)
    //     //     console.log("nums[min]", nums[min])
    //     //     minP = min;
    //     //     less = nums[min];
    //     // }
    // }

    if (minP === nums.length - 1 && p === 0) {
        return nums.sort((a,b) => a-b);
    }

    console.log(minP)
    console.log(maxP)

    var temp = nums[maxP];
    nums[maxP] = nums[minP];
    nums[minP] = temp;
    console.log(nums)


    for (let i=p; i < (nums.length-1); i++) {
        let cp = p;
        while (cp < nums.length -1) {
            if (nums[cp] > nums[cp+1]) {
                let t = nums[cp];
                nums[cp] = nums[cp+1];
                nums[cp+1] = t;
            }
            cp++;
        }
    }

    return nums
};


var nums = [1,5,4,3]
console.log(nextPermutation(nums))

// console.log(swap(2,1))