
var aggr = 0;
var MAX_VAL = 100;
function fib(num1, num2) {
  var num1 = num1 || 0;
  var num2 = num2 || 1;
  var value = num1 + num2;
  console.log(value);
  if(value < MAX_VAL) {
    fib(num2, value);
  }
  return value;
}

fib();
