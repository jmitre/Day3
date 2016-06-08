var expect = require("chai").expect;
var pluck = require('../pluck');

describe('#pluck', function(){
  it('Return an empty array, given an empty array', function(){
    expect(pluck([], '')).to.deep.equal([]);
  });

  it('Return an array with values that match a given key', function(){
    var array = [{foo: 'bar'}, {foo: 'ski'}];
    var key = 'foo';

    expect(pluck(array,key)).to.deep.equal(['bar','ski']);
  });

  it('Return an array with undefined, with no matchs to the given key', function(){
    var array = [{foo: 'bar'}, {foo: 'ski'}];
    var key = 'test';

    expect(pluck(array,key)).to.deep.equal([undefined, undefined]);
  });
});
