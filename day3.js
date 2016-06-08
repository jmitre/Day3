function parent(){
  var someRandomeVal = Math.random();

  function child(message){
  return "Random Value: " + someRandomeVal + "! " + message;//has access to someRandomeVal because it exists in parent function
  }

  return child;
}

var c = parent();
console.log(c());
