/**
 * Created by Тито on 06/06/2015.
 */
var arr = [1,2,1,4,1,true,3,4,1,111,3,2,1,'1',"hi"];
var key=1;



console.log(arr.filter(RemoveKey(key)));
function RemoveKey(k){
return function(item) {
    return !(k===item );
};
}



