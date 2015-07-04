/**
 * Created by Тито on 05/06/2015.
 */
var w="bacon",
    t='Bacon ipsum dolor amet Bacon jerky turducken, bacon shoulder Bacon sirloin chicken prosciutto shank tail boudin doner rump. Boudin picanha biltong salami doner. Pork chop turducken strip steak shankle, filet mignon cupim tenderloin meatball ham hock bresaola tri-tip ball tip ground round cow picanha. Ball tip jowl pork chop pork belly, pig turducken cow t-bone short loin porchetta meatball sirloin tail. Biltong porchetta tenderloin ham hock andouille, strip steak picanha pancetta chicken filet mignon kielbasa hamburger boudin rump bacon .' +
        ' Ribeye strip steak tail hamburger sausage, beef pork biltong jerky brisket tri-tip kevin pastrami salami .';
console.log(OccOfWord(w,t,false));
function OccOfWord(word,text,caseSen){
    var count=0,
        words=text.split(" ");
    if (caseSen===true) {


        for(var wor of words){
            if(wor==word){
                count+=1;
            }
        }
        return count ;
    }
    else{
        for( wor of words){
            if(wor.toLowerCase()==word.toLowerCase()){
                count+=1;
            }
        }
        return count ;

    }
}