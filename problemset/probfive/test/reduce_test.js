var expect = require("chai").expect;
var reduce = require("../reduce");

describe("#reduce", function(){
  it("given an emtpy array,return a 0", function(){
    function sum(prev, curr){
      return prev + curr
    }
    expect(reduce([],sum)).to.equal(0);
  });

  it("given an array with a single value,return a that value", function(){
    function sum(prev, curr){
      return prev + curr
    }
    expect(reduce([1],sum)).to.equal(1);
  });

  it("given an array return the sum of the values", function(){
    function sum(prev, curr){
      return prev + curr
    }
    expect(reduce([1,3,4],sum)).to.equal(8);
  });

  it("given an array of strings return a single string", function(){
    function concat(prev, curr){
      return prev + curr
    }
    expect(reduce(["hello","hi","red"],concat)).to.equal("hellohired");
  });

  it("given an array of strings return a single string", function(){
    function concat(prev, curr){
      return prev + curr
    }
    expect(reduce(["hello","hi","red"],concat,"Hey ")).to.equal("Hey hellohired");
  });
});
