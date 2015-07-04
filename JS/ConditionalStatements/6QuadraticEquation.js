/**
 * Created by Тито on 31/05/2015.
 */
var a=-0.5;
var b =4;
var c =-8;
console.log(RootsOfQuadratic(a,b,c));

function RootsOfQuadratic(a,b,c){
    var x1;
    var x2;


    if(Math.pow(b,2)-4*a*c<0){
        return "no real roots";
    }
    if(Math.pow(b,2)-4*a*c==0){
        x1=x2=-b/(2*a);
        return("x1=x2="+x1);
    }
    if(Math.pow(b,2)-4*a*c>0){
        var d=Math.sqrt(Math.pow(b,2)-4*a*c);
        x1=(-b-d)/(2*a);
        x2=(-b+d)/(2*a);
        return ("x1="+ x1 + ", x2="+x2);
    }
}