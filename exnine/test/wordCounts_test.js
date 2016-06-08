var expect = require("chai").expect;
var wordCounts = require("../wordCounts");

describe("#wordCounts", function(){
  it('Given an empty string return and empty object', function(){
    expect(wordCounts("")).to.deep.equal({});
  });

  it('Given a one word sentance, return an object', function(){
    expect(wordCounts("Hello")).to.deep.equal({hello: 1});
  });

  it('Given a sentence with duplicate words, returns an object', function(){
    expect(wordCounts("Hello Hello")).to.deep.equal({hello: 2});
  });

  it('Given a sentence, returns an object counting each word', function(){
    expect(wordCounts("Hello today we are at work we enjoy work")).to.deep.equal({hello: 1, today: 1, we: 2, are: 1, at: 1, work: 2, enjoy: 1});
  });

  it('Given a sentence, returns an object counting each word including capitols', function(){
    expect(wordCounts("Hello today We are at Work we enjoy work")).to.deep.equal({hello: 1, today: 1, we: 2, are: 1, at: 1, work: 2, enjoy: 1});
  });
});
