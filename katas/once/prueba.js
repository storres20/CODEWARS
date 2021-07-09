/* 
https://www.codewars.com/kata/52597aa56021e91c93000cb0/train/javascript

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

*/
var moveZeros = function (arr) {
  // TODO: Program me
  
// eliminar el valor ITEM del array ARRZ - start
function removeItemFromArr ( arrz, item ) {
  var i = arr.indexOf( item );

  if ( i !== -1 ) {
      arrz.splice( i, 1 );
  }
  //return arrz;
}
// eliminar el valor ITEM del array ARRZ - end

// contar los CEROS en el ARRAY - start
let contZero = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i]===0) {
    contZero++;
  }
}
//console.log("cantidad de CEROS: "+contZero);
// contar los CEROS en el ARRAY - end

// borrar CEROS del ARRAY - start

for (let i = 0; i < contZero; i++) {
  removeItemFromArr(arr,0);
}
//console.log("ARRAY sin CEROS:");
//console.log(arr);

// borrar CEROS del ARRAY - end

// se agregan los CEROS al final del ARRAY - start

for (let i = 0; i < contZero; i++) {
  arr.push(0);
}
//console.log("ARRAY con CEROS al final:");
//console.log(arr);

// se agregan los CEROS al final del ARRAY - end

//console.log("respuesta de la fn principal");
return arr;  

}


//PRUEBA
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));

//best solution
/*
var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}
*/

//code wars solution
/*
var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}
*/

//another code wars solution
/*
var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}


*/

  

 