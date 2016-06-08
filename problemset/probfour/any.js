function any(arr, fun){
  if(arr.length === 0) return true;

  for(var i = 0; i < arr.length; i++){
    if(fun(arr[i]) === true) return true;
  }

  return false;
}

module.exports = any;
