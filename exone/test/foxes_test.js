var expect = require("chai").expect;
var swiftFox = require("../foxes");

describe("#swiftFox",function(){
  it("Returns an empty array given an empty array", function(){
    var emptyFoxArray = [];
    var expectedFoxes = []
    expect(swiftFox(emptyFoxArray)).to.deep.equals(expectedFoxes);
  });

  it("Given an array without Swift Fox, the same array is returned.", function(){
    var foxArray = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox'];
    var expectedFoxes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox'];
    expect(swiftFox(foxArray)).to.deep.equals(expectedFoxes);
  });

  it("Returns an array with Swift Fox not included.", function(){
    var foxArray = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox', 'Swift Fox'];
    var expectedFoxes = ['Red Fox', 'Arctic Fox', 'Fennec Fox', 'Kit Fox'];
    expect(swiftFox(foxArray)).to.deep.equals(expectedFoxes);
  });

  it("Returns an empty array given an array with only swift Foxes", function(){
    var foxArray = ['Swift Fox', 'Swift Fox', 'Swift Fox', 'Swift Fox'];
    var expectedFoxes = []
    expect(swiftFox(foxArrayech)).to.deep.equals(expectedFoxes);
  });
});
