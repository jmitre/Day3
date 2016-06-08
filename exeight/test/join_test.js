var expect = require("chai").expect;
var join = require("../join");

describe("#join",function(){
  it("An empty string is returned when an empty array is passed.",function(){
    expect(join([],",")).to.equal("");
  });

  it("returns a string given an array of length 1 and the delimeter",function(){
    var array = ["hello"];
    var del = "."
    expect(join(array, del)).to.equal("hellatom .");
  });

  it("returns a string given an array and the delimeter",function(){
    var array = ["hello", "world"];
    var del = "."
    expect(join(array, del)).to.equal("hello.world");
  });

  it("returns a string given an array and without a delimeter",function(){
    var array = ["hello", "world"];
    expect(join(array)).to.equal("hello world");
  });

  it("returns a string given an array with more the 2 values and the delimeter",function(){
    var array = ["hello", "world", "how", "are", "you"];
    var del = "..."
    expect(join(array,del)).to.equal("hello...world...how...are...you");
  });
});
