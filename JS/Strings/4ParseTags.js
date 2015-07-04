/**
 * Created by Тито on 08/06/2015.
 */
var text="We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>. "+
"We <mixcase>don't</mixcase> have <lowcase>ANything</lowcase> else.";
var keyWords=['<mixcase>','</mixcase>','<upcase>','</upcase>','<lowcase>','</lowcase>'];


console.log(Automat(text));
function Transform(text,tags) {
    var i = 0,
        j,
        open = 0,
        close = 0,
        newText = new String();
    var count = 0;
   open=text.indexOf(tags[2], open);
    newText= text.substring(0,open);
    while (true) {
        open = text.indexOf(tags[2], open);
        open++;
        close = text.indexOf(tags[3], close);
        close++;
        if (close) {
          newText+=text.substring(open+7,close-1).toUpperCase();
        }
        else {
            newText+=text.substring()
            break;
        }
    }
    console.log(newText);



}
function Automat(text,tags){
    var newText=new String(),
        inUpper=false,
        inLower=false,
        inMix=false,
        i=0;

    while(i<text.length){
        if(text[i]=='<'&& text[i+1]=='u' && text[i+7]=='>'){
            i+=8;
            inUpper=true;
        }
        if(text[i]=='<'&& text[i+1]=='/' && text[i+2]=='u'&& text[i+8]=='>'){
            i+=9;
            inUpper=false;
        }

        if(text[i]=='<'&& text[i+1]=='l' && text[i+8]=='>'){
            i+=9;
            inLower=true;
        }
        if(text[i]=='<'&& text[i+1]=='/' && text[i+2]=='l'&& text[i+9]=='>'){
            i+=10;
            inLower=false;
        }

        if(text[i]=='<'&& text[i+1]=='m' && text[i+8]=='>'){
            i+=9;
            inMix=true;
        }
        if(text[i]=='<'&& text[i+1]=='/' && text[i+2]=='m'&& text[i+9]=='>'){
            i+=10;
            inMix=false;
        }




        if(inUpper){
            newText+=text[i].toUpperCase();
        }
        if(inLower){
            newText+=text[i].toLowerCase();
        }
        if(inMix){
            if((Math.random()*10|0)%2==1) {
                newText += text[i].toLowerCase();
            }
            else{
                newText += text[i].toUpperCase();
            }
        }

        if(inUpper==false && inLower==false && inMix==false){
            newText+=text[i];
        }


        i++
    }
    return newText;
}

