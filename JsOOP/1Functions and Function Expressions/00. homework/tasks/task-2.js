/* Task description */
/*
	Write a function that finds all the prime numbers in a range
		1) it should return the prime numbers in an array
		2) it must throw an Error if any on the range params is not convertible to `Number`
		3) it must throw an Error if any of the range params is missing
*/

function solve() {
	return function findPrimes() {
		if(arguments[0]==undefined || arguments[1]== undefined){
			throw new Error("some of args is missing");
		}
		var from= +arguments[0],
			to= +arguments[1],
			primes=[],
			temp,
			counter;
		if(typeof from!='number' || typeof to !='number' ){
			throw new Error('the range is not conv to number');
		}

		function IsPrime(number){
			if(number == 0 || number ==1){
				return false;
			}
			var isPr=true;
			for(counter=2,temp=Math.sqrt(number);counter<=temp;counter++){
				if(from%counter==0){
					isPr=false;
					break;
				}
			}
			return isPr;
		}
		for(from; from <=to;from+=1){

			if(IsPrime(from)){
				primes.push(from);
			}
		}

		return primes;

	}
}

module.exports = solve();
//console.log(solve()(1,5));