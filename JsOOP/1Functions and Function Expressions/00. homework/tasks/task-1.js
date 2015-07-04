/* Task Description */
/* 
	Write a function that sums an array of numbers:
		numbers must be always of type Number
		returns `null` if the array is empty
		throws Error if the parameter is not passed (undefined)
		throws if any of the elements is not convertible to Number	

*/
function solve() {
   return   function sum() {

        if (typeof arguments[0] == 'undefined') {
            throw  new Error(" Error");
        }
        if (!arguments[0].length) {
            return null;
        }

        var sum = arguments[0].reduce(function (sum, number) {

            return sum + +number;
        }, 0);
        if (isNaN(sum)) {
            throw new Error('can not be parsed ');
        }
        return sum;


    }
}

module.exports = solve();

