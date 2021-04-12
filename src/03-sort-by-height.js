/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const result = []; let
    k = 0;
  result.length = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) result[i] = arr[i];
  }
  arr.sort((a, b) => a - b);
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] > -1) break;
    if (arr[j] === -1) arr.shift();
    j--;
  }
  for (let n = 0; n < result.length; n++) {
    if (result[n] === undefined) result[n] = arr[k++];
  }
  return result;
}

module.exports = sortByHeight;
