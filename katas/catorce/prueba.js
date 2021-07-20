/* 
https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript

Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

It should remove all values from list a, which are present in list b keeping their order.

arrayDiff([1,2],[1]) == [2]

If a value is present in b, all of its occurrences must be removed from the other:

arrayDiff([1,2,2,2,3],[2]) == [1,3]

*/

function arrayDiff(a, b) {
  
  function removeItemFromArr ( arr, item ) {
    var i = arr.indexOf( item );
 
    if ( i !== -1 ) {
        arr.splice( i, 1 );
    }
  }
  
  // borrar repetidos de array "a"
    
  //let numeros = [1, 2, 2, 3, 4, 4, 5];
  
  if (a[0] == undefined) {
    return a;
  }
  
  if (b[0] == undefined) {
    return a;
  }
  
  let unicos = [];
  
  b.forEach(valorB => {
    
    unicos = [];
    
    a.forEach( (valorA) => {
      if (valorA !== valorB) {
        unicos.push(valorA);
      }
    });
  
    a = unicos;
    
  });
  
  return unicos; 
  
}



//PRUEBA
//arrayDiff([1,2,2],[1]); // [2]
//arrayDiff([1,2,2,2,3],[2]); // [1,3]
arrayDiff([], [4,5]); // []
arrayDiff([3,4], [3]); // [4]
arrayDiff([1,8,2], []); // [1,8,2]
arrayDiff([1,2,3], [1,2]); // [3]

//best solution
/*
function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

*/

//code wars solution
/*
function array_diff(a, b) {
  return a.filter(function(x) { return b.indexOf(x) == -1; });
}

*/

//another code wars solution
/*
function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

*/

  

 