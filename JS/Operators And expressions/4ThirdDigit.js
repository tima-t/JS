/**
 * Created by Тито on 23/05/2015.
 */

var a=444;
var b=473;
var c=701;
var d=5703;
var e=77807;
var statement=" third digit is seven ";
console.log( a + statement+ ThirdDigit(a));
console.log( b + statement+ ThirdDigit(b));
console.log( c + statement+ ThirdDigit(c));
console.log( d + statement+ ThirdDigit(d));
console.log( e + statement+ ThirdDigit(e));

function ThirdDigit(number ){
   var number= number%1000;
    if(parseInt(number/100)==7){
        return true;
    }
    else {
        return false;
    }
}