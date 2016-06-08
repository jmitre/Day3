var expect = require("chai").expect;
var all = require("../all");

describe("#all", function(){
  it('if given an empty array return true by default', function(){
    function even(num){
      return num%2 === 0
    }
    expect(all([],even)).to.equal(true);
  });

  it('Given an array, and a function, return true when all value returns true', function(){
    function even(num){
      return num%2 === 0
    }
    expect(all([2,4,6],even)).to.equal(true);
  });

  it('Given an array, and a function, return false when a value returns false', function(){
    function even(num){
      return num%2 === 0
    }
    expect(all([2,3,6],even)).to.equal(false);
  });

  it('Given an array, and a function, return false when a value returns false', function(){
    function checkIfLower(str){
      return str.toLowerCase() === str;
    }
    expect(all(["Dog", "cat", "person"],checkIfLower)).to.equal(false);
  });
  it('Given an array, and a function, return true when all values returns true', function(){
    function checkIfLower(str){
      return str.toLowerCase() === str;
    }
    expect(all(["dog", "cat", "person"],checkIfLower)).to.equal(true);
  });
});
