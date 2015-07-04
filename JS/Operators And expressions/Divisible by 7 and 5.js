/**
 * Created by Тито on 23/05/2015.
 */
var a=7;
var b=5;
var c=9;
var d=35;

console.log(a + " is divisible  " + IsDivisible7and5(a)  );
console.log(b + " is divisible  " + IsDivisible7and5(b)  );
console.log(c + " is divisible  " + IsDivisible7and5(c)  );
console.log(d + " is divisible  " + IsDivisible7and5(d)  );


function IsDivisible7and5(number ){

    var answer;
    if(number%5==0 && number%7==0){
        answer=true;
    }
    else answer=false;
    return answer;
}