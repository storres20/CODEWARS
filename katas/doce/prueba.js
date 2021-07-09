/* 
https://www.codewars.com/kata/551dd1f424b7a4cdae0001f0/train/javascript

Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; there are no other people in the queue. The first one in the queue (Sheldon) buys a can, drinks it and doubles! The resulting two Sheldons go to the end of the queue. Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.

For example, Penny drinks the third can of cola and the queue will look like this:

Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny

Write a program that will return the name of the person who will drink the n-th cola.

Input:
The input data consist of an array which contains at least 1 name, and single integer n which may go as high as the biggest number your language of choice supports (if there's such limit, of course).

Output / Examples:
Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.

whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"

*/
function whoIsNext(names, r){
  //your code here
  let numCaso;

  function sumatoria(params) {
    let expo = Math.pow(2,(params+1));
    let suma = (1-expo)*(-1)*(names.length);
    return suma;
  }

  //CASO 0: 0 < r < 6 - start
  if (r>0 && r<=names.length) {
    console.log("la persona es: "+names[r]);
    return names[r-1];
  }
  //CASO 0: 0 < r < 6 - end
  
  
  else{
    //averiguaremos en que CASO de la sumatoria se encuentra el numero - start
    for (let i = 1; i < Number.MAX_SAFE_INTEGER; i++) {
      if (r>sumatoria(i-1) && r<=sumatoria(i)) {
        numCaso = i;
        break;
      }  
    }
    console.log("Estamos en el CASO numero: "+numCaso);
    //averiguaremos en que CASO de la sumatoria se encuentra el numero - end

    //averiguemos la PERSONA en la FILA - start
    //names[0] = "Sheldon"
    
    for (let i = 0; i < names.length; i++) {
      if (r>(sumatoria(numCaso-1)+i*Math.pow(2,numCaso)) && r<=(sumatoria(numCaso-1)+(i+1)*Math.pow(2,numCaso)) ) {
        return names[i];
      }
    }
    //averiguemos la PERSONA en la FILA - end
  }
}


//PRUEBA
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)); // "Sheldon"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52)); // "Penny"
console.log(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951)); // "Leonard"


//best solution
/*
function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[Math.ceil(names.length * r / l)-1];
}

*/

//code wars solution
/*
function whoIsNext(names, r){

  var numOfGeeks = names.length;
  var loga = Math.log((r/numOfGeeks)+1) / Math.log(2);
  var completeCycles = Math.floor(loga)
  var fullCycleColas = (Math.pow(2,completeCycles)-1) * numOfGeeks;
  var currCycleSize  =  Math.pow(2,completeCycles)    * numOfGeeks;
  var geekCode = Math.ceil((r - fullCycleColas)/currCycleSize * numOfGeeks);
  
  return names[geekCode-1]
}

*/

//another code wars solution
/*
function whoIsNext(names, n){
  x=names.length;
  i=1;
  
  while (n > x){
    n -= x;
    x *= 2;
    i *= 2;
  }
  
  return (names[parseInt((n - 1)/i)]);   
}

*/

  

 