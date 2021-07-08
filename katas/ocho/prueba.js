/* 
https://www.codewars.com/kata/51ba717bb08c1cd60f00002f/train/javascript

A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-6,-3-1,3-5,7-11,14,15,17-20"

*/

let list = [-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20];
let pos = new Array;
pos = [];
let contPos = 0;
let contWhile = 1;

console.log(pos.length); // 'pos' reseteado
console.log(list);  // muestra el array
console.log(list.length); // cantidad de valores del array

while (contWhile!==0) {

for (let i = 0; i < list.length; i++) {
  if (list[i+1]-list[i] == 1 && list[i+2]-list[i+1] == 1) {
    pos.push(i);
  }

  if (i===list.length-1 && pos.length===0) {
    contWhile = 0;
    break;
  }
}

console.log("Array pos es:");
console.log(pos);

if (pos.length!==0) { // si pos.length es CERO quiere decir que no hay Numeros Consecutivos

for (let i = 0; i < pos.length; i++) {
  if (pos[i+1]-pos[i]==1) {
    contPos++;
  }
  else{
    break;
  }
}
}

console.log("contPos es: "+contPos);

if (pos.length!==0) { // si pos.length es CERO quiere decir que no hay Numeros Consecutivos
  
let dashNum = list[pos[0]] +"-"+(list[pos[0]]+2+contPos);
list.splice(pos[0],(3+contPos),dashNum);//borrar y agregar
pos = []; // reseteo 'pos'
contPos = 0; // reseteo contPos
}

} //cierra llave de WHILE bucle

console.log("Array con #s consecutivos es:");
console.log(list);

console.log("convert array to string");
let stringList = list.toString();
console.log(stringList);



/*
var miArray = [ 2, 4, 6, 8, 10 ];
miArray.forEach( function(valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});
*/





//best solution
/*
function solution(individualIntegers) {
  return individualIntegers
    .reduce(splitIntoRanges, [])
    .map(convertToRange)
    .join(",");
}

function splitIntoRanges(ranges, number) {
  if (!ranges.length) {
    ranges.push([number]);
    return ranges;
  }

  var lastRange = ranges[ranges.length - 1];
  var lastNumber = lastRange[lastRange.length - 1];

  number === lastNumber + 1 ? lastRange.push(number) : ranges.push([number]);
  return ranges;
}

function convertToRange(range) {
  return range.length < 3 ? range.join(",") : range[0] + "-" + range[range.length - 1];
}

*/

//code wars solution
/*
function solution(list){
   for(var i = 0; i < list.length; i++){
      var j = i;
      while(list[j] - list[j+1] == -1) j++;
      if(j != i && j-i>1) list.splice(i, j-i+1, list[i] +'-'+list[j]);
  }
  return list.join();
}

*/

  

 