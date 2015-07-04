/**
 * Created by Тито on 04/06/2015.
 */
var array1=["a",'b','c'];
var array2=['a','b','a','h'];
console.log(compareArrays(array1,array2));

function compareArrays(){
    for(var i=0; i<Math.min(arguments[0].length,arguments[1].length);i+=1){
        if(arguments[0][i]!=arguments[1][i]){



            if(arguments[0][i]<arguments[1][i]){
                return "the 1 array is lexicography first";
            }
            else{
                return "the 2 array is lexicography first ";
            }

            if(arguments[0].length>arguments[1].length){
                return "the 1 array is lexicography first";
            }
            else{
                return "the 2 array is lexicography first ";
            }

        }

        if((arguments[0].length==arguments[1].length) && i==arguments[0].length-1){
            return 'the arrays are equal';
        }



    }
}