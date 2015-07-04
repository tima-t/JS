/**
 * Created by Тито on 06/06/2015.
 */
var person1,
    person2,
    person3;

person1=MakePerson("Ivanka","Petrova",55);
person2 = MakePerson("Penka","Stamatova",23);
person3=MakePerson("Gosho","Conev",17);
person4=MakePerson("Galq","Misheva",16);
var personArray=[person1,person4,person3,person2];

console.log(FindYoungest(personArray));




function FindYoungest(pArr){
    var youngest=200,
        index=0,
        counter=0;
    for (var p of pArr){
        for(var prop in p){
            if(prop=="age"){
                if(p[prop]<youngest){
                    youngest=p[prop];
                    index=counter;
                }
            }

        }
        counter++;
    }
    return pArr[index].toString();
}

function MakePerson(fName,lName,age){
    return {
        firstName:fName,
        lastName:lName,
        age:age,
        toString: function(){return "My name is "+ this.firstName + " "+ this.lastName + " and I am "+ this.age;}
    }
}