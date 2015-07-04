/**
 * Created by Тито on 31/05/2015.
 */
var arr=[1,5,4,10,-4,-3,6,20,-10,10,-3,2,1];

var max = Number.MIN_VALUE;
var min = Number.MAX_VALUE;
for (var iterator of arr){

    if(iterator>max){
        max=iterator;
    }
    if (iterator<min){
        min=iterator;
    }
}
console.log("max is " + max + " , min is " + min );