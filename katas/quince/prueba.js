/* 
https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:
sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

*/

function sumStrings(a,b) {

  if (a === '') {
    a = '0';
  }
  
  if (b === '') {
    b = '0';
  }
  
  let intA = BigInt(a, 10); // convert string to number
  let intB = BigInt(b, 10);
  
  let suma = intA + intB; // sum
  
  let strSuma = suma.toString(); // convert number to string
  
  console.log(strSuma);
  return strSuma;

}

//PRUEBA

sumStrings('123','456'); // '579'
sumStrings('1','2'); // '3'
sumStrings('','5'); // '5'

//best solution
/*
function sumStrings(a, b) {
  var res = '', c = 0;
  a = a.split('');
  b = b.split('');
  while (a.length || b.length || c) {
    c += ~~a.pop() + ~~b.pop();
    res = c % 10 + res;
    c = c > 9;
  }
  return res.replace(/^0+/, '');
}


*/

//code wars solution
/*
String.prototype.reverse = function() {
  return this.split('').reverse().join('');
}

function sumStrings(a,b) {
  a = a.reverse(); b = b.reverse();
  var carry = 0;
  var index = 0;
  var sumDigits = [];
  while (index < a.length || index < b.length || carry != 0) {
    var aDigit = index < a.length ? parseInt(a[index]) : 0;
    var bDigit = index < b.length ? parseInt(b[index]) : 0;
    var digitSum = aDigit + bDigit + carry;
    sumDigits.push((digitSum % 10).toString());
    carry = Math.floor(digitSum / 10);
    index++;
  }
  sumDigits.reverse();
  while (sumDigits[0] == '0') sumDigits.shift();
  return sumDigits.join('');
}


*/

//another code wars solution
/*



*/

  

 