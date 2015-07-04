/**
 * Created by Òèòî on 31/05/2015.
 */
var a=15;
var b =305;
var c =-305;

console.log(Sort3(a,b,c));

function Sort3(a,b,c) {
 var biggest= BiggestNum(a,b,c);
    if(biggest==a){
        if(b>c){
            return (c+" "+b+" "+a);
        }
        else{
            return (b+" "+c+" "+a);
        }
    }

    if(biggest==b){
        if(a>c){
            return (c+" "+a+" "+b);
        }
        else{
            return (a+" "+c+" "+b);
        }
    }

    if(biggest==c){
        if(a>b){
            return (b+" "+a+" "+c);
        }
        else{
            return (a+" "+b+" "+c);
        }
    }
}


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
