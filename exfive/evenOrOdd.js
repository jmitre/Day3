function evenOrOdd(arr){
  return arr.map(evenOrOddString);
}

function evenOrOddString(num){
  return num%2 === 0 ? "even" : "odd"
}

module.exports = evenOrOdd;
