/**
 * Created by Тито on 09/06/2015.
 */
var input = ' <p>Please visit <a href="http://academy.telerik.com">our site</a> to choose a training course. Also visit <a href="www.devbg.org">our forum</a> to discuss the courses.</p>';
replaceTags(input);

function replaceTags(input) {

       var result = '';

    for (var i = 0; i < input.length; i += 1) {
        if (input[i] === '<' && input[i + 1] === 'a') {
            result += '[URL=';
            i += 8;
        } else if (input[i] === '"' && input[i + 1] === '>') {
            result += ']';
            i += 1;
        } else if (input[i] === '<' && input[i + 1]=== '/' && input[i + 2] === 'a') {
            result += '[/URL]';
            i += 3;
        } else {
            result += input[i];
        }
    }


    console.log(result);
}