/**
 * Created by Тито on 06/06/2015.
 */
var person ={
    name:"Ivan",
    secondName:"Ivanov",
    toString: function(){return this.name + "  "+ this.secondName}
},
    property="name";

console.log("Our object person have property : " + property + " - " + CheckForProp(property,person));

function CheckForProp(pr,obj){
    for(var prop in obj){
        if (prop==pr){
            return true;
        }
    }

    return false;
}