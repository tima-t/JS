/**
 * Created by Тито on 31/05/2015.
 */
console.log('window');
getProperties(window);
console.log('navigator');
getProperties(navigator);
console.log('document');
getProperties(document);

function getProperties(obj){
    var min = 0;
    var max = 0;

    for(var property in obj){
        if(!min){
            min = property;
        }
        if(!max){
            max = property;
        }

        if(property < min){
            min = property;
        }

        if(property > max){
            max = property;
        }
    }

    console.log('min: ' + min);
    console.log('max: ' + max + '\n\r');
}