// https://github.com/Srabonifaria/assignment-js

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
      return meter;
}
// var raisalmeter = kilometerToMeter(16)
// console.log(raisalmeter);





function budgetCalculator(watch,mobile,laptop){
    var Price = watch + mobile + laptop;
     return Price;
}
var totalPrice = budgetCalculator(50,100,500);
console.log(totalPrice);





function hotelCost(stay){
    var day =0;
    if(stay <= 10){
        day = stay * 100;
    }
    else if(stay <= 20){
        var firstPart = 10 * 100;
        var remaining = stay -10;
        var secondPart = remaining * 80;
        day = firstPart + secondPart;
    }
    else{
        var firstPart =10 * 100;
        var secondPart = 10 * 80;
        var remaining = stay -20;
        var thirdPart = remaining * 50;
        day = firstPart + secondPart + thirdPart;
    }
    return day;
}
// var count =hotelCost(77);
// console.log(count);






function megaFriend(friends){
    var biggestName = friends[0];
       for(var i=0; i <friends.length; i++){
  
           if((friends [i]) !=""){
              // return 'friends name';
          }
          if(friends[i].length > biggestName.length){
              biggestName = friends[i];
          }
  
      }
      return biggestName; 
       
  }
//    var friendsName =megaFriend (["Nadia" ,"Sorifa" ,"Sumaiya" ,"Mash","Musrafijur"]);
//    console.log(friendsName);