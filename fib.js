
function sum(num1, num2, nth, aggr) {
  var num1 = num1 || 0;
  var num2 = num2 || 1;
  var value = num1 + num2;
  var aggr = aggr || 1;
  aggr++;
  if(aggr < nth) {
    return sum(num2, value, nth, aggr);
  }
  return value;
}

/**
 * fib - fibonaci sequence
 *
 * @param  {type} nth - number
 * @return {type}     fibonaci number
 */
exports.fib = function fib(nth) {
  var nth = nth || 0;
  if(nth === 0) {
    return 0;
  }
  return sum(null, null, nth, 1);
}
