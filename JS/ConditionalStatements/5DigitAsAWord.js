/**
 * Created by Тито on 31/05/2015.
 */
var digit=10;
console.log(DigitAsWord(digit));


function DigitAsWord(digit){
    switch(digit){
        case 0:
            return "zero";
        case 1:
            return "one";
        case 2 :
            return "two";
        case '3'|0:
            return "three";
        case +"4":
            return "four";
        case 5:
            return "five";
        case 6:
            return "six";
        case 7 :
            return "seven";
        case '8'*1:
            return "eight";
        case 9:
            return "nine";
        default:
            return "this is not a digit";
    }
}