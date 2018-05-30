/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  
  // if (!s) {
  //   return true
  // }
  let sUniform = s.toLowerCase().replace(/([^A-Za-z0-9])/g, '')
  let len = sUniform.length
  let str1 = '';
  for(let i=len-1; i>=0; i--){
      str1 += sUniform[i];
  }
  return (str1 == sUniform)
};