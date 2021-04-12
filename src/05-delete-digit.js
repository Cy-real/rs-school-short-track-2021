/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString().split('');
  let min = str[0];
  for (let i = 1; i < str.length; i++) {
    if (str[i] < min) min = str[i];
  }
  for (let j = 0; j < str.length; j++) {
    if (str[j] === min) {
      str.splice(j, 1);
      break;
    }
  }
  str = str.join('');
  const number = Number(str);
  return number;
}

module.exports = deleteDigit;
