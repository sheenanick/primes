//<!-- Back End -->

function getPrimes(toPrime){
  var numbers = [];
  //create array of numbers up to toPrime
  for(var i = 2; i <= toPrime; i++){
    numbers.push(i);
  }
  //create current prime to compare to rest of array
  var prime;
  for(var k = 0; k < numbers.length; k++){
    prime = numbers[k];
    //go through array with the current prime, starting from the index right after the current prime
    for(var j = k+1; j < numbers.length; j++){
      if(numbers[j] % prime === 0){
        numbers.splice(j, 1);
      }
    }
  }
  return numbers;
}

//<!-- Front End  -->
$(document).ready(function(){
  $("form#primeInput").submit(function(event){
    event.preventDefault();
    var toPrime = parseInt($("input#toPrime").val());
    if(!toPrime){

    }else{
      var primeArray = getPrimes(toPrime);
      $(".well").text(primeArray);
    }
  });
});
