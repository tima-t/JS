/**
 * Created by Тито on 07/06/2015.
 */

var person1=MakePerson("Ivanka","Petrova",55,false);
var person2 = MakePerson("Penka","Stamatova",23,false);
var person3=MakePerson("Gosho","Conev",17,true);
var person4=MakePerson("Galq","Misheva",16,false);
var person5=MakePerson("Ivan","Petrov",33,true);
var person6 = MakePerson("Pencho","Stamatov",22,true);
var person7=MakePerson("joro","Conev",12,true);
var person8=MakePerson("Galina","Mishanova",45,false);
var person9=MakePerson("jorj","Conev",62,true);
var person10=MakePerson("Mirela","Irenova",45,false);

var arrPerson=[person1,person2,person3,person4,person5,person6,person7,person8,person9,person10];
//////////////////////////////////////////////
//////// second problem
console.log("///////////////");
console.log("task 2");

console.log(arrPerson.every(Over18));

/////////////////
//// third problem
console.log("///////////////");
console.log("task 3");

var arrUnder18=arrPerson.filter(Under18);
arrUnder18.forEach(function(person){
    console.log(person.toString());
});
//////////////////
///// fourth task
console.log("///////////////");
console.log("task 4");

var females= arrPerson.filter(IsFemale);
var totalAge= 0,
    count=females.length;
females.forEach(function(person){
    console.log(person.toString());
   totalAge=totalAge+person.age;
});
console.log(totalAge/count);

///////////////////////
////// fifth task
console.log("///////////////");
console.log("task5");
var minAge=200;
if (!Array.prototype.find) {
    Array.prototype.find = function(callback) {
        var i, len = this.length;
        for (i = 0; i < len; i+=1) {
            if (callback(this[i], i, this)) {
                return this[i];
            }
        }
    }
}
arrPerson.forEach(function(person){
    if(person.age<minAge){
        minAge=person.age;
    }
});
 console.log(arrPerson.find(function() {

     return !!(arguments[0].age == minAge);
 }));

console.log("///////////////");
console.log("task6");


var sorted = arrPerson.reduce(function (obj, item) {

    if (obj[item.firstName[0]]) {
        obj[item.firstName[0]].push(item);
    } else {
        obj[item.firstName[0]] = [item];
    }
    return obj;
}, {});

console.log('Task 06:' + JSON.stringify(sorted));

function Over18(person){
    return !!(person.age>=18);
}
function IsFemale(person){
    return !!(person.gender==false);
}
function Under18(person){
    return !!(person.age<18);
}
function MakePerson(fName,lName,age,gend){
    return {
        firstName:fName,
        lastName:lName,
        age:age,
        gender:gend,
        toString: function(){return "My name is "+ this.firstName + " "+ this.lastName + " and I am "+ this.age + " male: "+ this.gender;}
    }
}

