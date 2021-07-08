function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
  
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
  
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
  
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
  }
  //resumen de fn reverso - start
  let palabra = "welc";
  let str2 = reverseString(palabra);
  document.write(str2);
  //resumen de fn reverso - end
  
  let dArr = new Array();
  dArr = palabra.split(" ");
  
  console.log(dArr);
  
  //longitud de Array - start
  let largo2 = dArr.length;
  console.log(largo2);
  //longitud de Array - end
  
  let dArr2 = new Array();
  
  dArr.forEach(function (valor, indice, array) {
    if (valor.length >= 5) {
      valor = reverseString(valor);
    }
  
    if (indice + 1 === dArr.length) {
      dArr2 += valor;
    } else {
      dArr2 += valor;
      dArr2 += " ";
    }
  });
  
  console.log(dArr2);
  console.log(dArr);

  //valor = valor.split("").reverse().join("");

  // https://www.codewars.com/kata/5264d2b162488dc400000001/train/javascript

  //solution

  /*
function spinWords(string){
    
  let dArr = new Array();
  dArr = string.split(" ");
  
  let dArr2 = new Array();

  dArr.forEach(function (valor, indice, array) {
    if (valor.length >= 5) {
      valor = valor.split("").reverse().join("");
    }
  
    if (indice + 1 === dArr.length) {
      dArr2 += valor;
    } else {
      dArr2 += valor;
      dArr2 += " ";
    }
  });
  
  return dArr2;
  
}


  */