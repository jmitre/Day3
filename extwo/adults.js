function adults(personArr){
  return personArr.filter(function(person){
    return person.age >= 18;
  });
}

module.exports = adults;
