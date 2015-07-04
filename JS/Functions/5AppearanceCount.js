/**
 * Created by Тито on 05/06/2015.
 */
var arr=[1,1,5,4,3,2,1,6,5,4,1,1,8],
    key=1;

console.log(AppearanceC(arr,key));


function AppearanceC(array,key){
    var count=0;
    for(var number of arr){
        if(number==key){
            count+=1;
        }
    }
    return count;
}