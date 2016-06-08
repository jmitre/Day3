function wordCounts(sentence){
  if(sentence.length === 0) return {};
  sentence = sentence.toLowerCase();
  var sentArr = sentence.split(" ");
  return sentArr.reduce(function(prev, curr){
    if(prev[curr]=== undefined) prev[curr] = 1;
    else {
      prev[curr]++;
    }
    return prev
    console.log(prev, curr);
  },{});
}

module.exports = wordCounts;
