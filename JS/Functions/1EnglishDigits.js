/**
 * Created by Тито on 05/06/2015.
 */
var num = 573;
console.log(EngDigit(num));


function EngDigit(number){
    var digit=number%10;
    var digitNames=['zero','one','two','three','four','five','six','seven','eight','nine'];
    return digitNames[digit];
}