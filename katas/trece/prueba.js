/* 
https://www.codewars.com/kata/541af676b589989aed0009e7/train/javascript

Write a function that counts how many different ways you can make change for an amount of money, given an array of coin denominations. For example, there are 3 ways to give change for 4 if you have coins with denomination 1 and 2:

1+1+1+1, 1+1+2, 2+2.

The order of coins does not matter:

1+1+2 == 2+1+1

Also, assume that you have an infinite amount of coins.

Your function should take an amount to change and an array of unique denominations for the coins:

*/

var countChange = function(money, coins) {
  // your implementation here
  
  // money -> numero
  // coins -> array
  
  let simpleCont = 0; // variable que cuenta
  const size = coins.length; // longitud del array
  
  
   if (size === 2){
  
    a = coins[0];
    b = coins[1];
    
      // si "a+b" o una de sus configuraciones es multiplo de money      
      for (let k = 0; k <= money; k++) {
        for (let l = 0; l <= money; l++) {
          if ((a*k + b*l) === money) {
            simpleCont++;
          }
        }
      }
      
      // resultado
      console.log("Para size = 2");
      console.log(simpleCont);
      return simpleCont;
  }
  
  // ***********************************
  
    if (size === 3){
  
    a = coins[0];
    b = coins[1];
    c = coins[2];
    
      // si "a+b+c" o una de sus configuraciones es multiplo de money      
      for (let k = 0; k <= money; k++) {
        for (let l = 0; l <= money; l++) {
          for (let m = 0; m <= money; m++) {
            if ((a*k + b*l + c*m) === money) {
              simpleCont++;
            }
          }
        }
      }
      
      // resultado
      console.log("Para size = 3");
      console.log(simpleCont);
      return simpleCont;
  }
  
  // ********************************
  
  if (size === 4){
  
    a = coins[0];
    b = coins[1];
    c = coins[2];
    d = coins[3];
    
      // si "a+b+c+d" o una de sus configuraciones es multiplo de money      
      for (let k = 0; k <= money; k++) {
        for (let l = 0; l <= money; l++) {
          for (let m = 0; m <= money; m++) {
            for (let n = 0; n <= money; n++) {
            
              if ((a*k + b*l + c*m + d*n) === money) {
                simpleCont++;
              }
            }
          }
        }
      }
      
      // resultado
      console.log("Para size = 4");
      console.log(simpleCont);
      return simpleCont;
  }
  
  // ************************************************
  
  if (size === 5){
  
    a = coins[0];
    b = coins[1];
    c = coins[2];
    d = coins[3];
    e = coins[4];
    
      // si "a+b+c+d+e" o una de sus configuraciones es multiplo de money      
      for (let k = 0; k <= money; k++) {
        for (let l = 0; l <= money; l++) {
          for (let m = 0; m <= money; m++) {
            for (let n = 0; n <= money; n++) {
              for (let o = 0; o <= money; o++) {
              
                if ((a*k + b*l + c*m + d*n + e*o) === money) {
                  simpleCont++;
                }
              }
            }
          }
        }
      }
      
      // resultado
      console.log("Para size = 5");
      console.log(simpleCont);
      return simpleCont;
  }
  
  
  // ************************************************
  
  if (simpleCont === 0) {
    console.log("Si no tiene multiplos con money:");
    console.log(simpleCont);
    return simpleCont;  
  }
  
}



//PRUEBA
countChange(4, [1,2]) // => 3
countChange(10, [5,2,3]) // => 4
countChange(11, [5,7]) //  => 0
countChange(100, [1,2,3,5]) //  => 0

//best solution
/*


*/

//code wars solution
/*


*/

//another code wars solution
/*


*/

  

 