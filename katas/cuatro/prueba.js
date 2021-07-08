/* 
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

https://www.codewars.com/kata/544aed4c4a30184e960010f4/train/javascript

Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"

function divisors(integer) {
    
};
*/

let integer = 17;

var numArr = [];

let prime=0;
let index;

for (let i = 2; i < integer; i++) {
  
  if((integer%i)==0){
    index = i.toString();
    numArr.push(i);
  }
}

if ( numArr.length === 0 ) {
  integer = integer.toString();
  prime = integer+" is prime";
}

console.log(numArr);
console.log(prime);


//best solution
/*
function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

function divisors(integer) {
  var divs = [];
  
  for(var i = 2; i < integer; i++) {
    if(integer % i === 0) {
      divs.push(i);
    }
  }
  
  return divs.length ? divs : integer + ' is prime';
};

*/

//code wars solution
/*
function divisors(integer) {
    
  var numArr = [];

let prime=0;
let index;
  
  for (let i = 2; i < integer; i++) {
  
  if((integer%i)==0){
    index = i.toString();
    numArr.push(i);
  }
}

if ( numArr.length === 0 ) {
  integer = integer.toString();
  prime = integer+" is prime";
  return prime;
}
  else {
    return numArr;
  }
  
  
};

*/

  

 