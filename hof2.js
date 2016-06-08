function strings(){
  return "string!!!"
};

function numbers() {
  return "numbers!!!"
};

function doubleThing(fn) {
  return "Double of the: " + fn();
}

//Math

function add(a,b){
  return a + b;
}

function mult(a,b){
  return a * b;
}

function doMathStuff(a,b,fn){
  return fn(a,b);
}

console.log("add",doMathStuff(2, 5, add));
console.log("mult",doMathStuff(2,5 , mult));
