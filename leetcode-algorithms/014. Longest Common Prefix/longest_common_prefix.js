/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return '';
  }
  var reducer = function (ret, cur) {
    let newRet = ''
    let length = Math.min(ret.length, cur.length)
    for (let i = 0; i < length; i++) {
      if (ret[i] !== cur[i]) {
        break
      }
      newRet += ret[i]
    }
    return newRet
  }
  return strs.reduce(reducer);
};