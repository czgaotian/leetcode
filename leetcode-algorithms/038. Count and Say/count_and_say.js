/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) {
        return "1";
    }
    return count(countAndSay(n-1));
};

function count(strNum) {
    var say = "";
    var count = 1;
    for (var i=0; i < strNum.length; i++) {
        if (strNum[i+1] === strNum[i]) {
            count++;
        } else {
            say = say + count + "" + strNum[i];
            count = 1;
        }
    }
    return say;
}