var expect = require("chai").expect;
var adults = require("../adults");

describe("#adults", function(){

  it("returns empty array, if given an empty array", function(){
    var emptyArrayAdults = [];
    var expectAdults = [];
    expect(adults(emptyArrayAdults)).to.deep.equal(expectAdults);
  });

  it("Given an array with only adults, returns same array", function(){
    var allAdultsArray = [{ firstName : 'John', lastName : 'Smith', age : 32},{ firstName : 'Tom', lastName : 'Tom', age : 40}];
    var expectAdults = [{ firstName : 'John', lastName : 'Smith', age : 32},{ firstName : 'Tom', lastName : 'Tom', age : 40}];
    expect(adults(allAdultsArray)).to.deep.equal(expectAdults);
  });

  it("returns adults who are at least 18", function(){
    var arrayAdults = [{ firstName : 'John', lastName : 'Smith', age : 32}, { firstName : 'jim', lastName : 'jam', age : 16},{ firstName : 'Tom', lastName : 'Tom', age : 40}];
    var expectAdults = [{ firstName : 'John', lastName : 'Smith', age : 32},{ firstName : 'Tom', lastName : 'Tom', age : 40}];
    expect(adults(arrayAdults)).to.deep.equal(expectAdults);
  });

  it("returns empty array when given an array with no adults", function(){
    var childArray = [{ firstName : 'John', lastName : 'Smith', age : 12}, { firstName : 'jim', lastName : 'jam', age : 16},{ firstName : 'Tom', lastName : 'Tom', age : 10}];
    var expectAdults = [];
    expect(adults(childArray)).to.deep.equal(expectAdults);
  });
});
