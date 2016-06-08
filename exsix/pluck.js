function pluck(objArr, key){
  return objArr.map(returnString);
  
  function returnString(obj){
    return obj[key];
  }
}



module.exports = pluck;
