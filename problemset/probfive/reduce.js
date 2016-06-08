function reduce(arr, fun, prev){
  if(prev !== undefined) return reduceWPrev(arr, fun, prev);
  if(arr.length === 0) return 0;
  if(arr.length === 1) return arr[0];

  var prev;
  var cur;

  for(var i = 0; i < arr.length - 1; i++){
    if(i===0) prev = arr[0];
    curr = arr[i+1];
    prev = fun(prev, curr);
  }
  return prev;
}

function reduceWPrev(arr, fun, prev){
  if(arr.length === 0) return prev;

  for(var i = 0; i < arr.length; i++){
    curr = arr[i];
    prev = fun(prev, curr);
  }
  return prev;
}

module.exports = reduce;
