/**
 * Created by Тито on 23/05/2015.
 */
var num1 = 8, num2= 3;
var postion=3;

console.log(getBitAt(num1, postion));
console.log(getBitAt(num2, postion));

function getBitAt(number, position){
    return (number >> position) & 1;
}