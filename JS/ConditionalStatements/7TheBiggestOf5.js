/**
 * Created by Òèòî on 31/05/2015.
 */
var a=5,
    b=3,
    c=-2,
    d=4,
    e=8;
console.log("the biggest number is : " + BiggestOfFive(a,b,c,d,e));

function BiggestOfFive(a,b,c,d,e){
    if(a>=b && a>=c && a>=d&&a>=e){
        return a;

    }
    else if(b>=a && b>=c && b>=d&&b>=e){
        return b;

    }
    else if(c>=b && c>=a && c>=d&&c>=e){
        return c;

    }
    else if(d>=b && d>=c && d>=a&&a>=e){
        return d;

    }
    else{
        return e;
    }
}