/**
 * Created by Тито on 23/05/2015.
 */
var even = 4, odd = 5;

console.log(even + "is even  "+ isEven(even));
console.log( odd + "is even "+ isEven(odd));

function isEven(number){
    return !(number % 2);
}