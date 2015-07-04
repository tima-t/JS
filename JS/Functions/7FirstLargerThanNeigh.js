/**
 * Created by Тито on 05/06/2015.
 */

var arr=[5,6,7,8,3,2,5,7,8,10];

console.log("first number larger than its neighbours is at position : " + LargerUpdate(arr) );

function LargerUpdate(arr){


      var i,
        len;


    for(i=1,len=arr.length;i<len-1;i+=1){
        if(LargerThNeigh(i,arr)){
          return i;
        }

    }

    return -1;
}



function LargerThNeigh(position,array){
    if(position>array.length){
        console.log("such element does not exist in the array ");
        return;
    }
    else{
        if(array[position]>array[position-1] && array[position]>array[position+1]){
            return true;
        }
        else return false;
    }
}