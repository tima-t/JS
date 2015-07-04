/* Task Description */
/* 
* Create a module for a Telerik Academy course
  * The course has a title and presentations
    * Each presentation also has a title
    * There is a homework for each presentation
  * There is a set of students listed for the course
    * Each student has firstname, lastname and an ID
      * IDs must be unique integer numbers which are at least 1
  * Each student can submit a homework for each presentation in the course
  * Create method init
    * Accepts a string - course title
    * Accepts an array of strings - presentation titles
    * Throws if there is an invalid title
      * Titles do not start or end with spaces
      * Titles do not have consecutive spaces
      * Titles have at least one character
    * Throws if there are no presentations
  * Create method addStudent which lists a student for the course
    * Accepts a string in the format 'Firstname Lastname'
    * Throws if any of the names are not valid
      * Names start with an upper case letter
      * All other symbols in the name (if any) are lowercase letters
    * Generates a unique student ID and returns it
  * Create method getAllStudents that returns an array of students in the format:
    * {firstname: 'string', lastname: 'string', id: StudentID}
  * Create method submitHomework
    * Accepts studentID and homeworkID
      * homeworkID 1 is for the first presentation
      * homeworkID 2 is for the second one
      * ...
    * Throws if any of the IDs are invalid
  * Create method pushExamResults
    * Accepts an array of items in the format {StudentID: ..., Score: ...}
      * StudentIDs which are not listed get 0 points
    * Throw if there is an invalid StudentID
    * Throw if same StudentID is given more than once ( he tried to cheat (: )
    * Throw if Score is not a number
  * Create method getTopStudents which returns an array of the top 10 performing students
    * Array must be sorted from best to worst
    * If there are less than 10, return them all
    * The final score that is used to calculate the top performing students is done as follows:
      * 75% of the exam result
      * 25% the submitted homework (count of submitted homeworks / count of all homeworks) for the course
*/

function solve() {
	function validateTitle(name){
		var start=name[0],end=name[name.length-1];
		if(!name){
			throw new Error("Invalid title");
		}

		if(start == ' ' || end == ' '){
			throw new Error("Invalid title");
		}

		if(name.indexOf('  ')>-1){
			throw new Error("Invalid title");
		}

		if(end<0){
			throw new Error("Invalid title");
		}
	}

	function validatePresentations(names){
		if(names.length<1){
			throw new Error("No available presentations");
		}

		for(var i= 0;i<names.length;i+=1){
			validateTitle(names[i]);
		}
	}

	function validateStudent(name){
		var fLetter=name[0],
			rest=name.substr(1);
		if(fLetter.toUpperCase()!=fLetter){
			throw new Error('Invalid name');
		}

		if(rest!=rest.toLowerCase()){
			throw new Error('Invalid name');
		}

	}

	var Student={
		init:function(firstName,lastName,ID){
			var that=this;
			that.firstname=firstName;
			that.lastname=lastName;
			that.ID=ID;
			that.result=0;
			that.homeworks=0;
			return that;
		}
	};

	var Course = {
		init: function(title, presentations) {
				var that=this;
				validateTitle(title);
			    that.title=title;
				that.students=[];
				validatePresentations(presentations);
				that.presentations=presentations;
				return that;
		},
		addStudent: function(name) {
			var stud,
				ID,
				fName,
				lName,
				names=name.split(" ");
			if(names.length!=2){
				throw new Error("Invalid title");
			}

			fName=names[0];
			lName=names[1];
			validateStudent(fName);
			validateStudent(lName);
			ID=this.students.length + 1;
			stud= Student.init(fName,lName,ID);
			this.students.push({firstname: stud.firstname, lastname: stud.lastname, id: stud.ID,homeworks: 0});
			return stud.ID;
		},
		getAllStudents: function() {
			return this.students.slice(0);
		},

		submitHomework: function(studentID, homeworkID) {
			var studenExist=false;
			if(homeworkID != Number(homeworkID)){
				throw 'Invalid type for id.';
			}
			if((homeworkID<1 || homeworkID>this.presentations.length)){
				throw new Error("Invalid homework")
			}

			for(var i=0;i<this.students.length;i++) {
				if (this.students[i].id == studentID) {
					studenExist = true;
					this.students[i].homeworks += 1;
					break;
				}
			}


			if(!studenExist){
				throw new Error("No such student");
			}

		},
		pushExamResults: function(results) {
		},
		getTopStudents: function() {
		}
	};

	return Course;
}

//var Course=solve();
//Course.init("math",["math1",'math2']).addStudent("Ivan Ivanov");
//Course.addStudent('Georgi Ivanov');
//Course.addStudent("Petq Petrova");
//Course.submitHomework(1,2);
//Course.submitHomework(1,1);
//Course.submitHomework(3,1);
//
//console.log(Course.getAllStudents());
module.exports = solve;
