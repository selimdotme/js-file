// number related 
var number = 25;
var number1 = 25.25;
console.log(number + number1);

// one number and one string addition 

var number2=45;
var number3='50';
console.log(number2 + number3);

// one number and one string addition 

var number4=45;
var number5='50';
number5 = parseFloat(number5)  // (parseInt) o used krte pari integer value paoyar jno 
console.log(number4 + number5);

// number k string e convert krar jno 
var x = 56;
var y =79;
// number type
console.log(typeof x);
// convert string type
var x = ''+ x;
console.log(typeof x);

// funny thing 
var A = 0.1;
var B = 0.2;
var total = A + B;
console.log(total);
total = total.toFixed(1);
console.log(total)