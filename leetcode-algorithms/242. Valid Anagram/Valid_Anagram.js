/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  let arrays = s.split('').sort()
  let arrayt = t.split('').sort()
  if (arrays.toString() === arrayt.toString()) return true
  else return false
};