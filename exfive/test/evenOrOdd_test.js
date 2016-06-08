var expect = require("chai").expect;
var evenOrOdd = require("../evenOrOdd");

describe("#evenOrOdd",function(){
  it("Returns an empty array given an empty array.",function(){
    expect(evenOrOdd([])).to.deep.equal([]);
  });

  it("Returns an array of even or odd string given a array of number",function(){
    var numArray = [1,3,2,6];
    var stringArray = ['odd', 'odd','even','even']
    expect(evenOrOdd(numArray)).to.deep.equal(stringArray);
  });

  it("Returns an array of even strings given a array of even numbers.",function(){
    var numArray = [2,8,4,16];
    var stringArray = ['even', 'even','even','even']
    expect(evenOrOdd(numArray)).to.deep.equal(stringArray);
  });

});
