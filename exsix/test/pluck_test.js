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

  it('Return an array with undefined, with no matchs to the given key', function(){
    var array = [{car: 'bar'}, {car: 'ski'}, {car: 'hey'}];
    var key = 'car';

    expect(pluck(array,key)).to.deep.equal(['bar', 'ski', 'hey']);
  });

  it('Return an array with undefined and values, with matches', function(){
    var array = [{car: 'bar'}, {foo: 'ski'}, {car: 'hey'}];
    var key = 'car';

    expect(pluck(array,key)).to.deep.equal(['bar', undefined, 'hey']);
  });

  it('Return an array with age values, given an array of people objects', function(){
    var array = [{name: 'john', age: 65}, {name: 'tim', age: 14}, {namr: 'nate', age: 33}];
    var key = 'age';

    expect(pluck(array,key)).to.deep.equal([65, 14, 33]);
  });
});
