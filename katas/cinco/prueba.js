/* 
https://www.codewars.com/kata/52aae14aa7fd03d57400058f/train/javascript

Write a function that takes an array of values and moves all elements that are zero to the end of the array, otherwise preserving the order of the array. The zero elements must also maintain the order in which they occurred.

For example, the following array

[7, 2, 3, 0, 4, 6, 0, 0, 13, 0, 78, 0, 0, 19, 14]

is transformed into

[7, 2, 3, 4, 6, 13, 78, 19, 14, 0, 0, 0, 0, 0, 0]

Zero elements are defined by either 0 or "0". Some tests may include elements that are not number literals.

You are NOT allowed to use any temporary arrays or objects. You are also not allowed to use any Array.prototype or Object.prototype methods.

*/

var array = [7, 2, 3, 0, 4, 6, 0, 0, 13, "0", 78, 0, 0, 19, 14];

function removeZeros(array) {
  let b = 0;
  for (let i = 0; i < array.length - b; ++i) {
    if (Number(array[i]) === 0 && array[i] !== null && array[i] !== false) {
      let tmp = array[i];
      for (let j = i; j < array.length - 1; ++j) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = tmp;
      b++, i--;
    }
  }
  return array;
}

// suma de valores del array - end




/*
NOTA:

var miArray = [ 2, 4, 6, 8, 10 ];
miArray.forEach( function(valor, indice, array) {
    console.log("En el índice " + indice + " hay este valor: " + valor);
});

*******************************

const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));

// expected output: "a"
// expected output: "b"
// expected output: "c"

*/




//best solution
/*
function removeZeros(array) {
  let b = 0;
  for (let i = 0; i < array.length - b; ++i) {
    if (Number(array[i]) === 0 && array[i] !== null && array[i] !== false) {
      let tmp = array[i];
      for (let j = i; j < array.length - 1; ++j) {
        array[j] = array[j + 1];
      }
      array[array.length - 1] = tmp;
      b++, i--;
    }
  }
  return array;
}

*/

//code wars solution
/*

function removeZeros(array) {
  const head = []
  const tail = []
  for (const e of array) {
    if (e === 0 || e === "0") {
      tail[tail.length] = e
    } else {
      head[head.length] = e
    }
  }
  return [...head, ...tail]
}

// ********************************************

function removeZeros(array) {
    var end = array.length;
    for (var i = 0; i < end; i++) {
        if (array[i] === 0 || array[i] === "0") {
            arrayShiftToEnd(array, i);
            i--;
            end--;
        }
    }
    return array;
}

function arrayShiftToEnd(array, n) {
    var end = array[n]
    for(var i = n; i <  array.length; i++) {
        array[i] = array[i + 1]
    }
    array[array.length - 1] = end;

    return array
}

*/

  

 