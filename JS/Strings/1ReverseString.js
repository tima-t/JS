/**
 * Created by Òèòî on 08/06/2015.
 */
var str="WORD";
console.log(Reverse1(str));
console.log(Reverse2(str));


function Reverse1( st){
    var reversed= st.split("").reverse().join("");
    return reversed;
}
function Reverse2(st){
    var reversed2=new String();
    for (var i = st.length-1; i >=0; i--) {
        reversed2+=st[i];



    }
    return reversed2;
}