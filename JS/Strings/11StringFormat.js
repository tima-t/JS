/**
 * Created by Тито on 09/06/2015.
 */

console.log(stringFormat('{0}, {1}, {0} text {2}',  1, 'Pesho', 'Gosho'));


function stringFormat() {
    var string = arguments[0],
        placeholder;

    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i += 1)  {
            placeholder = "{" + (i - 1) + "}";
            for (var j = 0; j < string.length; j+=1) {
                string = string.replace(placeholder, arguments[i]);
            }
        }
    }

    return string;
}