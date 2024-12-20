const removeFromArray = function(arr, ...nums) {
    temp = [];
    arr.forEach(num => {
        if(!nums.includes(num)){
            temp.push(num);
        }
    });
    return temp
};

// Do not edit below this line
module.exports = removeFromArray;
