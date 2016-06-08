
function sum(array){
  var result = 0;

  for(var i = 0; i < array.length ; i++){
    result += array[i];
  }

  return result;
}

function sum(array){
  return array.reduce(function(prev, curr){
    console.log("prev", prev, "curr", curr);
    return prev + curr;
  });
}

sum([1,2,3,4,5]);
