var message = ["hi","tempe","compozed"];

function wordLength(word){
  return word.length;
}
function wordLengths(listOfWord){
  listOfWord.map(wordLength);
}

function worldLengths(listOfWord){
  var results = [];
  for(var i=0;i<listOfWord.length;i++){
    results.push(listOfWord[i].length);
  }
  return results;
}

console.log(message.map(wordLength));
