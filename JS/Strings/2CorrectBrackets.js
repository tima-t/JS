/**
 * Created by Тито on 08/06/2015.
 */
var expression1="((a+b)/5-d)",
    expression2=")(a+b)).";
console.log("expr1 is correct : " + CheckEx(expression1));
console.log("expr2 is correct : " + CheckEx(expression2));

function CheckEx(expr){
    var open= 0,
        close=0;
    for(var  ch of  expr){
        if(ch=="("){
            open++;
        }
        if(ch==")"){
            close++;
        }
    }
    return (close == open);
}