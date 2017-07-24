
/**
 * fib - returns fibonacci sequence.
 *
 * @param  {Number} nth - the nth number on the sequence.
 * @return {Array}  array   - returns an array containing the sequence to the nth number.
 */
function fib(nth) {
  var arr = [];
  if(nth === 0) {
    arr.push(1);
  }
  for (var i=0; i<nth; i++) {
    arr.push(i < 2 ? 1 : arr[i - 1] + arr[i - 2]);
  }
  return arr;
}

module.exports = {
  fib: fib
};
