/**
 * Created by Тито on 09/06/2015.
 */
var   text = 'The longest single English word in common usage which is a palindrome ' +
    'is redivider, although the contrived chemical term detartrated is two letters longer. ' +
    'In Finnish there is a 25-letter palindromic word: solutomaattimittaamotulos which means ' +
    'the result from a measurement laboratory for tomatoes, although technically it is a ' +
    'compound of four words. There is also the equally long saippuakuppinippukauppias which ' +
    'meanssoap cup trader.';

findPalindromes(text);

function findPalindromes(text) {
    var words = text.split(/\W+/),
        palindromes = [];

    for (var i = 0; i < words.length; i += 1) {
        var isPalindrome = true;

        for (var j = 0; j < Math.floor(words[i].length / 2); j += 1) {


            if (words[i][j] !== words[i][words[i].length - 1 - j]) {
                isPalindrome = false;
                break;
            }
        }

        if (isPalindrome && words[i].length > 1) {

            palindromes.push(words[i]);
        }
    }
    console.log('The palindromes in text is: ');


    for (var index in palindromes) {
        console.log(palindromes[index]);

    }
}