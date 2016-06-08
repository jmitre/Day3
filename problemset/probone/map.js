function map(arr, fun){
  if(arr.length === 0) return []
  var retArr = [];
  for(var i=0;i<arr.length;i++)
  {
      retArr.push(fun(arr[i]));
  }
  return retArr;
}
module.exports = map;
