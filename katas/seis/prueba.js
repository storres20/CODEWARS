/* 
https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

*/

//contadores
let contYear, contDay, contHour, contMinute, contSecond;

let divisor, residuo;

let divSecond = 1;
let divMinute = divSecond*60;
let divHour = divMinute*60;
let divDay = divHour*24;
let divYear = divDay*365;

second = 4*divYear+68*divDay+3*divHour+4*divMinute;
let second2 = second;

// ****
let integer;

integer = divYear;
divisor = Math.floor(second/integer);
residuo = second%integer;

console.log(divisor);
console.log(residuo);

if (divisor >=0) {
  contYear = divisor;
  second = residuo;
}

integer = divDay;
divisor = Math.floor(second/integer);
residuo = second%integer;
if (divisor >=0) {
  contDay = divisor;
  second = residuo;
}

integer = divHour;
divisor = Math.floor(second/integer);
residuo = second%integer;
if (divisor >=0) {
  contHour = divisor;
  second = residuo;
}

integer = divMinute;
divisor = Math.floor(second/integer);
residuo = second%integer;
if (divisor >=0) {
  contMinute = divisor;
  contSecond = residuo;
}

console.log("year: "+contYear);
console.log("day: "+contDay);
console.log("hour: "+contHour);
console.log("minute: "+contMinute);
console.log("second: "+contSecond);

let palabra="";

if (second2===0) {
  palabra = "now";
}
else{

// year
if (contYear===1) {
  palabra += contYear + " year";
}
else if (contYear>1) {
  palabra += contYear + " years";
}
//day
if (contDay===1 && contYear===0) {
  palabra += contDay + " day";
}
else if (contDay>1 && contYear===0) {
  palabra += contDay + " days";
}
else if (contDay===1) {
  palabra += ", "+ contDay + " day" ;
}
else if (contDay>1) {
  palabra += ", "+ contDay + " days" ;
}
else if (contDay===1 && contHour===0 && contMinute===0 && contSecond===0) {
  palabra += " and "+ contDay + " day" ;
}
else if (contDay>1 && contHour===0 && contMinute===0 && contSecond===0) {
  palabra += " and "+ contDay + " days" ;
}

//hour
if (contHour===1 && (contYear===0 && contDay===0)) {
  palabra += contHour + " hour";
}
else if (contHour===1 && (contYear!==0 || contDay!==0)) {
  palabra += ", "+contHour + " hour";
}
else if (contHour>1 && (contYear===0 && contDay===0)) {
  palabra += contHour + " hours";
} 
else if (contHour>1 && (contYear!==0 || contDay!==0)) {
  palabra += ", "+contHour + " hours";
}
else if (contHour===1 && (contMinute===0 && contSecond===0)) {
  palabra += " and "+contHour + " hour";
}
else if (contHour>1 && (contMinute===0 && contSecond===0)) {
  palabra += " and "+contHour + " hours";
}
//minute
if (contMinute===1 && (contYear===0 && contDay===0 && contHour===0)) {
  palabra += contMinute + " minute";
}
else if (contMinute===1 && (contYear!==0 || contDay!==0 || contHour!==0) && contSecond!==0) {
  palabra += ", "+contMinute + " minute";
}
else if (contMinute>1 && (contYear===0 && contDay===0 && contHour===0)) {
  palabra += contMinute + " minutes";
} 
else if (contMinute>1 && (contYear!==0 || contDay!==0 || contHour!==0) && contSecond!==0) {
  palabra += ", "+contMinute + " minutes";
}
else if (contMinute===1 && contSecond===0) {
  palabra += " and "+contMinute + " minute";
}
else if (contMinute>1 && contSecond===0) {
  palabra += " and "+contMinute + " minutes";
}
//second
if (contSecond===1 && (contYear===0 && contDay===0 && contHour===0 && contMinute===0)) {
  palabra += contSecond + " second";
}
else if (contSecond===1 && (contYear!==0 || contDay!==0 || contHour!==0 || contMinute!==0)) {
  palabra += " and "+contSecond + " second";
}
else if (contSecond>1 && (contYear===0 && contDay===0 && contHour===0 && contMinute===0)) {
  palabra += contSecond + " seconds";
} 
else if (contSecond>1 && (contYear!==0 || contDay!==0 || contHour!==0 || contMinute!==0)) {
  palabra += " and "+contSecond + " seconds";
}
}

console.log(palabra);
//best solution
/*
function formatDuration (seconds) {
  var time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (var key in time) {
    if (seconds >= time[key]) {
      var val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]
}
*/

//code wars solution
/*
function formatDuration (seconds) {
  if(!seconds)return "now";
  var strout = "";
  var s = seconds%60;
  seconds = (seconds-s)/60;
  var m = seconds%60;
  seconds = (seconds-m)/60;
  var h = seconds%24;
  seconds = (seconds-h)/24;
  var d = seconds%365;
  seconds = (seconds-d)/365;
  var y = seconds;
  
  var english=[];
  if(y)english.push(y+" year"+(y>1?'s':''));
  if(d)english.push(d+" day"+(d>1?'s':''));
  if(h)english.push(h+" hour"+(h>1?'s':''));
  if(m)english.push(m+" minute"+(m>1?'s':''));
  if(s)english.push(s+" second"+(s>1?'s':''));
  
  return english.join(", ").replace(/,([^,]*)$/," and$1");
  
}

*/

  

 