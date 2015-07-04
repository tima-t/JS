/* Task Description */
/* 
	Create a function constructor for Person. Each Person must have:
	*	properties `firstname`, `lastname` and `age`
		*	firstname and lastname must always be strings between 3 and 20 characters, containing only Latin letters
		*	age must always be a number in the range 0 150
			*	the setter of age can receive a convertible-to-number value
		*	if any of the above is not met, throw Error 		
	*	property `fullname`
		*	the getter returns a string in the format 'FIRST_NAME LAST_NAME'
		*	the setter receives a string is the format 'FIRST_NAME LAST_NAME'
			*	it must parse it and set `firstname` and `lastname`
	*	method `introduce()` that returns a string in the format 'Hello! My name is FULL_NAME and I am AGE-years-old'
	*	all methods and properties must be attached to the prototype of the Person
	*	all methods and property setters must return this, if they are not supposed to return other value
		*	enables method-chaining
*/
function solve() {
	var Person = (function () {
		function Person(fname,lname,age) {
			var _firstname, _lastname, _age;
			this.firstname = fname;
			this.lastname = lname;
			this.age = +age;

		}

		Object.defineProperty(Person.prototype, 'firstname', {
			get: function () {
				return this._firstname;
			},
			set: function (name) {
				if(name.length<3 || name.length>20) {
					throw new Error("Incorrect Fname")
				}
				this._firstname = name;
			}
		});
		Object.defineProperty(Person.prototype, 'lastname', {
			get: function () {
				return this._lastname;
			},
			set: function (name) {
				if(name.length<3 || name.length>20) {
					throw new Error("Incorrect Lname")
				}
				this._lastname = name;
			}
		});
		Object.defineProperty(Person.prototype,"age",{
			get: function(){
				return this._age;
			},
			set: function(age){
				if(age.toString() === '' ) {
					throw  new Error('Age must be a valid number');
				}
				if(age<0 || age>150) {
					throw new Error("Incorrect Age")
				}
				this._age = age;
			}
		});

		Object.defineProperty(Person.prototype,'fullname',{
			get: function(){
				return this.firstname +" " +  this.lastname;
			},
			set:function(value){
				var names= value.split(" ");
				this.firstname=names[0];
				this.lastname=names[1];
			}
		});
		Person.prototype.introduce=function(){
			return ('Hello! My name is '+ this.fullname+" and I am "+ this.age + "-years-old");
		};


		return Person;
	} ());
	return Person;
}

/*console.log(new Person('ivan','georgiev',15));
var i = new Person('ivan','georgiev',15);
console.log(i.introduce());*/
module.exports = solve;