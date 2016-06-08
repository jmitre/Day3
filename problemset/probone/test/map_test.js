var expect = require("chai").expect;
var map = require("../map");

describe("#map", function(){
  it("given an empty array, returns an empty array", function(){
    expect(map([])).to.deep.equal([]);
  });

  it("Given an array with one number and a function to add 1, returns an array with 2.", function(){
    function add(num){
      return ++num;
    }
    expect(map([1], add)).to.deep.equal([2]);
  });

  it("Given an array with multiple numbers and a function to add 1, returns the correct array.", function(){
    function add(num){
      return ++num;
    }
    expect(map([1,2,3], add)).to.deep.equal([2,3,4]);
  });

  it("Given an array with one number and a function to subtract 1, returns an array with 0.", function(){
    function subtract(num){
      return --num;
    }
    expect(map([1], subtract)).to.deep.equal([0]);
  });

});
