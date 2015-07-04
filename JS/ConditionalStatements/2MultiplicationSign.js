/**
 * Created by Тито on 31/05/2015.
 */
var a =-2;
var b =3;
var c=-35;

console.log(findSign(a,b,c));

function findSign(a,b,c){

    if(a==0 || b==0 || c==0){
        return 0;
    }
    else if((a>0 && b>0 && c<0)||(a>0 && c>0 && b<0)||(a<0 && b>0 && c>0)||(a<0 && b<0 && c<0)){
        return "-";
    }
    else{
        return "+";
    }
}