/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    return Math.max(Math.min(parseInt(str) || 0, 2147483647), -2147483648)
};

// 这里很鸡贼的直接用了js的parseInt方法，以后再认真写吧