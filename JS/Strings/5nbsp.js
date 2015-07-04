/**
 * Created by Тито on 09/06/2015.
 */
var text= "Hello my name  is No Name ;)";
console.log(Nbsp(text));
function Nbsp(text){
    var newText='';
    newText=text.replace(/ /g,'&nbsp');
    return newText;
}