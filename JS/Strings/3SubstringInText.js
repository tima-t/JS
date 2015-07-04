/**
 * Created by Тито on 08/06/2015.
 */
var text =" We are living in an yellow submarine. We don't have anything else." +
    " Inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
    sub="in";

console.log(FindSub(sub,text,true));
console.log(FindSub(sub,text,false));
function FindSub(sub,text,caseSens){
    if(!caseSens) {
        text=text.toLowerCase();
        sub=sub.toLowerCase();
    }

        var index = 0,
            count = 0;
        while (true) {
            index = text.indexOf(sub, index);
            index++;
            if (index) {
                count++;
            }
            else {
                break;
            }
        }


    return count;
}