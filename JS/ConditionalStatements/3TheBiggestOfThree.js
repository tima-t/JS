/**
 * Created by Òèòî on 31/05/2015.
 */
var a=6;
var b=6;
var c=-3;

console.log(BiggestNum(a,b,c));


function BiggestNum(a,b,c){
    if(a>=b && a>=c){
        return a;
    }
    else if(b>=c && b>=a){
        return b;
    }
    else {
        return c;
    }
}