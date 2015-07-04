/**
 * Created by Òèòî on 05/06/2015.
 */
var number=123.45;
console.log(ReverseNum(number));
function ReverseNum(num){
    var strNumber=num.toString();
    strNumber=strNumber.split('').reverse().join('');
   return +strNumber;
}