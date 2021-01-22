
//  https://github.com/Shohaib-Suhad/assignment-3-Solution



//       Answer 1....kilometerToMeter

function  kilometerToMeter(kilometer){
  var meter = kilometer * 1000 ;   
  return meter;

}

//      Answer 2 .......budgetCalculator

function  budgetCalculator(mobile,watch,laptop){
  var total = (mobile*100) + (watch*50) + (laptop*500);
  return total;
}


//    Answer 3 ..........hotelCost

function hotelCost(slot){
  var cost = 0;
  if( slot<=10){
      cost = slot * 100;
  }
  else if( slot <= 20){
      var firstSlot = 10 * 100;
      var remainingSlot = slot - 10; 
      var secondSlot = remainingSlot * 80;
      cost = firstSlot + secondSlot;
  }
  else{
      var firstSlot = 10 * 100;
      var secondSlot = 10 * 80;
      var remainingSlot = slot - 20;
      var lastPeriodDays = remainingSlot * 50;
      cost = firstSlot + secondSlot + lastPeriodDays;
  }
  return cost;
  }

  //      Answer 4.. .....megaFriend

  function megaFriend(names){
    var maxword = names[0];
    for(var i=0; i< names.length; i++){
      var element = names[i];
      if(element.length > maxword.length){
        maxword = element ;
      }
    }
    return maxword;
  }
