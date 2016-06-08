var expect = require("chai").expect;
var any = require("../any");

describe("#any", function(){
  it('if given an empty array return true by default', function(){
    function even(num){
      return num%2 === 0
    }
    expect(any([],even)).to.equal(true);
  });

  it('Given an array, and a function, return true when any value returns true', function(){
    function even(num){
      return num%2 === 0
    }
    expect(any([2,4,6],even)).to.equal(true);
  });

  it('Given an array, and a function, return false when all values returns false', function(){
    function even(num){
      return num%2 === 0
    }
    expect(any([3,5,7],even)).to.equal(false);
  });

  it('Given an array, and a function, return true when a value returns true', function(){
    function checkIfLower(str){
      return str.toLowerCase() === str;
    }
    expect(any(["Dog", "cat", "person"],checkIfLower)).to.equal(true);
  });
  it('Given an array, and a function, return true when any value returns true', function(){
    function checkIfLower(str){
      return str.toLowerCase() === str;
    }
    expect(any(["dog", "cat", "person"],checkIfLower)).to.equal(true);
  });

  it('Given an array, and a function, return false when all values returns false', function(){
    function checkIfLower(str){
      return str.toLowerCase() === str;
    }
    expect(any(["Dog", "Cat", "Person"],checkIfLower)).to.equal(false);
  });
});
