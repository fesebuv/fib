
var expect = require('chai').expect;
var fib = require('../src/fib').fib;

var dataSet = [0,1,2,5,10,20,30];
var expected = [0,1,1,5,55,6765,832040];

describe('Fibonacci sequence', function () {
  dataSet.forEach(function(num, index) {
    var expectedVal = expected[index];
    it('fib of ' + num + ' should be ' + expectedVal, function () {
      expect(fib(num)).to.equal(expectedVal);
    });
  });
});
