var listOfWords = ['short', 'long', 'shorters', 'longest', 'longer']

function moreThanFourChars(array){
  var result = [];

  for(var i = 0; i < array.length ; i++){//Accumulater approach
    if(array[i].length > 4)
      result.push(array[i]);
  }
  return result;
}

function moreThanFourCharsFilter(array){
  return array.filter(function(word){
    return word.length > 4;
  });
}

console.log(moreThanFourCharsFilter(listOfWords));
