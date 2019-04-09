/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
    let result = 1;
    let left=0;
    let right = 0;
    let map = {};

    if (tree.length <= 2) {
        return tree.length;
    }

    while ( right < tree.length ) {
        map[tree[right]] = map[tree[right]] === undefined ? 1 : map[tree[right]] + 1;
        let keys = Object.keys(map);
        if (keys.length > 2 ) {
            map = {};
            left ++;
            right = left;
        } else {
            let sum = 0;
            keys.forEach(el => {
                sum += map[el];
            });
            result = Math.max(result, sum);
            right++;
        }
    }
    console.log(result)
};


totalFruit([4,1,2,2]);