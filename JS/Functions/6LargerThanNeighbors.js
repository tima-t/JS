/**
 * Created by Тито on 05/06/2015.
 */
var position=3,
    arr=[5,6,7,8,3,2,5,7,8,10];

console.log("the element at positon " + position +" is bigger than its neighbours : " + LargerThNeigh(position,arr));
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