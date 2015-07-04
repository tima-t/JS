/**
 * Created by Тито on 06/06/2015.
 */
var person ={
    name:"Ivan",
        secondName:"Ivanov",
    toString: function(){return this.name + "  "+ this.secondName}
},
    num= 5,
    str="hello";

var person2= createDeepCopy(person);
person2.name="gosho";
 console.log(person.toString());
console.log(person2.toString());
function createDeepCopy(obj) {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    var copy = obj.constructor();
    for (var prop in obj) {
        copy[prop] = createDeepCopy(obj[prop]);
    }

    return copy;
}