/**
 * Created by Тито on 09/06/2015.
 */
var text = ' my name is NoName, email address : ' +
    "NoFace@yahoo.com and i can't get in to my account " +
    "My another No-mail is Nan@gmail.com please send me password there or on undefined@abv.bg";

extractEmails(text);
function extractEmails(text) {
    var words = text.split(' '),
        result = [];

    for (var i = 0; i < words.length; i++) {
        if (words[i].indexOf("@") > 0) {

            if (words[i][words[i].length - 1] == '.') {

                words[i] = words[i].substr(0, words[i].length - 1);
            }

            if (words[i].indexOf(".") > 0) {

                if (words[i].indexOf('@') < words[i].indexOf('.')) {

                    result.push(words[i]);
                }
            }
        }
    }

    for (i in result) {
        console.log(result[i]);

    }
}