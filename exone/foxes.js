function swiftFox(foxArr){
  return foxArr.filter(function(fox){
    return fox != 'Swift Fox';
  });
};

module.exports = swiftFox;
