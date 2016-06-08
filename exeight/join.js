function join(arr, del){
  if(arr.length === 0) return "";
  if (del === undefined) del = " "
  return arr.reduce(function(prev, curr){
    return prev + del + curr;
  });
}

module.exports = join;
