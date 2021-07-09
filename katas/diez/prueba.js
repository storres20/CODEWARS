/* 
https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

Example
add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
The input numbers are big.
The input is a string of only digits
The numbers are positives

*/

/*function add(a, b) {
  return (Number(a) + Number(b)).toString(); // Fix me!
}*/


//**************************************
let a,b,az,bz;
console.log("NUEVO CODIGO...");

//a = '7809986417725377199277976628826683616627266299';
//b = '78099864177253771992779766288266836166272662';
b = '999999999999999999999999999999999999999999999';
a = '11111';
//b = '980998641772537719927797662882668361662726629';

console.log("'a' length:");
console.log(a.length);
//a = '11';
//b= '99';

let aDiv = Math.floor(a.length/15);
let aRes = a.length%15;

let bDiv = Math.floor(b.length/15);
let bRes = b.length%15;

let numArr = []


//prueba codigo

let numArrA = [];
let numArrB = [];

let cadAA;
let cadBB;

let sumaZero,ax,bx;
if (aDiv===0 && bDiv===0) {
  ax = parseInt(a);
  bx = parseInt(b);
  sumaZero = ax+bx;
  sumaZero = sumaZero.toString();
  console.log(sumaZero);
  console.log("para #s chicos, la suma es: "+sumaZero);
  
}


if (aDiv >= 1) {
  //para numeros que superan los 20 digitos
  for (let i = 1; i <= aDiv; i++) {
    cadAA = a.substr(-15*i,15);
    numArrA.push(cadAA);
  }
  if (aRes>0) {
    cadAA = a.substr(0,aRes);
    numArrA.push(cadAA);  
  }
  console.log("numArrA es: " + numArrA);
}
else{
  let menorA15 = 1; // el siguiente paso es solo pasar de string a number y sumarlos y convertirlo a string
  numArrA.push(a);
  console.log(numArrA + " A menor a 16 digitos");
  console.log(numArrA);
}


if (bDiv >= 1) {
  //para numeros que superan los 20 digitos
  for (let i = 1; i <= bDiv; i++) {
    cadBB = b.substr(-15*i,15);
    numArrB.push(cadBB);
  }
  if (bRes>0) {
    cadBB = b.substr(0,bRes);
    numArrB.push(cadBB);  
  }
  console.log("numArrB es: "+numArrB);
}
else{
  let menorB15 = 1; // el siguiente paso es solo pasar de string a number y sumarlos y convertirlo a string
  numArrB.push(b);
  console.log(numArrB + " B menor a 16 digitos");
  console.log(numArrB);
}


//parte 2: suma de paquetes

if (aDiv===0 && bDiv===0) {
  
}
else{


let contArrI; //tope de 'i' para el bucle FOR

if (numArrA.length >= numArrB.length) {
  contArrI = numArrB.length; // primero escogemos al que tiene menos digitos
}
else{
  contArrI = numArrA.length;
}

console.log("contArrI es: "+contArrI);//********** */

let numArrSuma = [];
let extra=0;
let varA,varB,varC,contX;

for (let i = 0; i < contArrI; i++) { //este contArrI tiene menos digitos
  varA = parseInt(numArrA[i]);
  varB = parseInt(numArrB[i]);
  varC = varA+varB + extra;

  contX = varC.toString().length;

  if (contX>15) {
    extra = Math.floor(varC/(Math.pow(10,15)));
    varC = varC%(Math.pow(10,15));
    numArrSuma.push(varC);
  }else{
    numArrSuma.push(varC);
  }

  if (extra===1 && i===contArrI) {
    if (numArrA.length===numArrB.length) {
      numArrSuma.push(extra);
    }
  }
}
console.log("numArrSuma es:"); //primera parte
console.log(numArrSuma);

console.log("numArrA es:");
console.log(numArrA);
console.log("numArrB es:");
console.log(numArrB);

//escogemos el de mayor longitud
let contArrF; //tope de 'i' para el bucle FOR

if (numArrA.length >= numArrB.length) {
  contArrF = numArrA.length; // ahora escogemos al que tiene mas digitos
  //2da parte del numArrSuma
  for (let i = contArrI; i < contArrF; i++) {
    varA = parseInt(numArrA[i]);
    varC = varA + extra;
    //extra = 0;
    extra = Math.floor(varC/(Math.pow(10,15)));
    varC = varC%(Math.pow(10,15));
    numArrSuma.push(varC);
  }
}
else{
  contArrF = numArrB.length;
  //2da parte del numArrSuma
  for (let i = contArrI; i < contArrF; i++) {
    varA = parseInt(numArrB[i]);
    varC = varB + extra;
    //extra = 0;
    extra = Math.floor(varC/(Math.pow(10,15)));
    varC = varC%(Math.pow(10,15));
    numArrSuma.push(varC);
  }
}

//respecto al EXTRA FINAL
if (extra!==0) {
  numArrSuma.push(extra);
}

//concatena como String final

let contSumaX = numArrSuma.length;

let palabraXX="";
let palabra;
let contPalabra;
let zeroPalabra="";
//console.log(numArrSuma[1].toString());
//contArrF ... mayor digito

for (let i = 1; i <= contSumaX; i++) {
  
  palabra = numArrSuma[contSumaX-i].toString();
  contPalabra = palabra.length;
  
  if (palabra === '0') {
    palabra = '000000000000000';
  }
else if(contSumaX-i<contArrF){
  for (let y = 0; y < (15-contPalabra); y++) {
    zeroPalabra += '0';
  }
}

  palabraXX += zeroPalabra + palabra;
  zeroPalabra = "";
  console.log(palabraXX);
}

console.log("suma length es:");
console.log(palabraXX.length);
} 

// fin de ELSE

/*
let palabraXX = numArrSuma[2].toString()+numArrSuma[1].toString()+numArrSuma[0].toString();
console.log(palabraXX);
*/

/*
console.log(numArrA[0]);
console.log(Number('6628826683616627')); // 16 digitos
console.log(parseInt(numArrA[0])); // 16 digitos
*/







//best solution
/*

*/

//code wars solution
/*

  

*/

//another code wars solution
/*



*/

  

 