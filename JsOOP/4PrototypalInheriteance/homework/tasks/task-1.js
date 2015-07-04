/* Task Description */
/*
* Create an object domElement, that has the following properties and methods:
  * use prototypal inheritance, without function constructors
  * method init() that gets the domElement type
    * i.e. `Object.create(domElement).init('div')`
  * property type that is the type of the domElement
    * a valid type is any non-empty string that contains only Latin letters and digits
  * property innerHTML of type string
    * gets the domElement, parsed as valid HTML
      * <type attr1="value1" attr2="value2" ...> .. content / children's.innerHTML .. </type>
  * property content of type string
    * sets the content of the element
    * works only if there are no children
  * property attributes
    * each attribute has name and value
    * a valid attribute has a non-empty string for a name that contains only Latin letters and digits or dashes (-)
  * property children
    * each child is a domElement or a string
  * property parent
    * parent is a domElement
  * method appendChild(domElement / string)
    * appends to the end of children list
  * method addAttribute(name, value)
    * throw Error if type is not valid
  * method removeAttribute(attribute)
    * throw Error if attribute does not exist in the domElement
*/


/* Example

var meta = Object.create(domElement)
	.init('meta')
	.addAttribute('charset', 'utf-8');

var head = Object.create(domElement)
	.init('head')
	.appendChild(meta)

var div = Object.create(domElement)
	.init('div')
	.addAttribute('style', 'font-size: 42px');

div.content = 'Hello, world!';

var body = Object.create(domElement)
	.init('body')
	.appendChild(div)
	.addAttribute('id', 'cuki')
	.addAttribute('bgcolor', '#012345');

var root = Object.create(domElement)
	.init('html')
	.appendChild(head)
	.appendChild(body);

console.log(root.innerHTML);
Outputs:
<html><head><meta charset="utf-8"></meta></head><body bgcolor="#012345" id="cuki"><div style="font-size: 42px">Hello, world!</div></body></html>
*/


function solve() {
	var domElement = (function () {
		var domElement = {


			init: function(type) {
				if(type.length>0 && typeof type=='string' && /^[A-z0-9]+$/.test(type)) {
					this.type = type;
					this.content;
					this.attributes=[];
					this.children=[];
					this.parent;
					this.innerHTML;

					return this;

				}

				else{
					throw new Error('Invalid type of element');
				}

			},

			appendChild: function(child) {
				this.children.push(child);
				if(typeof child === 'object'){
					child.parent=this;
				}

				return this;
			},
			addAttribute: function(name, value) {
				if(name==undefined || value==undefined || typeof name !="string"|| name.length==0 || !/^[A-z0-9-]+$/.test(name) ){
					throw new Error("Invalid input for attribute" );
				}
				else{
					this.attributes[name]=value;
				}
				return this;
			},
			removeAttribute: function(name){
				var count= 0,prop;
				for( prop in this.attributes){
					if(prop==name){
						delete this.attributes[prop];
						count=1;
					}

				}
				if(count==0){
					throw new Err//or("this attribute does not exist");
				}
				return this;


			},

      get innerHTML(){
		  var result;

		  result = '\<' + this.type;
		  if(attributesToString(this.attributes)){
			  result += " "+ attributesToString(this.attributes);
		  }
		  else {
			  result += attributesToString(this.attributes);
		  }
		  result += '\>';
		  result += getChildrenOrContent(this);
		  result += '\<\/' + this.type + '\>';

		  return result;

      }

		};
	/////////////////
		function attributesToString(att){
			var result="",name,sorted,keys=[];

			for(name in att){
				keys.push(name);
			}

			sorted=keys.sort(function(a,b){
				if(a>b) return 1;
				if(a<b) return -1;
				else return 0;
			})

			for (name of sorted){
				result+=name + '="'+att[name]+'" ';
			}
			return result.trim();
		}
		function getChildrenOrContent(self) {
			var childrenOrContentToString = '',
				i,
				len;

			if (self.children && self.children.length > 0) {
				len = self.children.length;
				for (i = 0; i < len; i++) {
					if (checkIfString(self.children[i])) {
						childrenOrContentToString += self.children[i];
					} else {
						childrenOrContentToString += self.children[i].innerHTML;
					}
				};
			} else if (self.content) {
				childrenOrContentToString += self.content;
			}

			return childrenOrContentToString;
		}

		function checkIfString(obj) {
			if ((typeof obj == 'string' || obj instanceof String) && obj) {
				return true;
			}

			return false;
		}
		///////////////


		return domElement;
	} ());
	return domElement;
}

module.exports = solve;
//r domEl=solve();
//mEl.init('div').addAttribute('header','my header').addAttribute('inch','marvin').addAttribute("anchor","www.hhh.com").removeAttribute();
//nsole.log(domEl);
//nsole.log(domEl.innerHTML);
//nsole.log(domEl.attributes);

