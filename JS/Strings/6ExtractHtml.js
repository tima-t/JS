/**
 * Created by Тито on 09/06/2015.
 */
var text="<html><head><title>Sample site</title></head><body><div>text<div>more text</div>and more...</div>in body</body></html>";
console.log(ExtratctHtml(text));

function ExtratctHtml(text){
    var newText=new String(),
        i= 0,
        inTag=false;

    while(i<text.length){
        if(text[i]=='<'){
            inTag=true;
        }

        if(text[i]=='>' && inTag&& text[i+1]!='<'){
            inTag=false;
            i+=1;

        }

        if(i>=text.length){
            break;
        }
        if(inTag){
            i+=1;
            continue;
        }
        else{
            newText+=text[i];
            i++;
        }
    }
    return newText;
}