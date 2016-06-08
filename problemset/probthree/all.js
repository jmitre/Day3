function all(arr, fun){
  if(arr.length === 0) return true;

  for(var i = 0; i < arr.length; i++){
    if(fun(arr[i]) === false) return false;
  }

  return true;
}

module.exports = all;
