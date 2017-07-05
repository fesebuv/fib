
var fib = require('./fib').fib;

var dataSet = [0,1,2,5,10,20,30];

dataSet.forEach(function(n) {
  console.log('fib of %s is %s', n, fib(n));
});
