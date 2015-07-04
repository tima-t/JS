/**
 * Created by Тито on 05/06/2015.
 */

function countDivs(){
    var count= document.getElementsByTagName('div').length;
    document.getElementById('result').innerHTML = 'count: ' + count;
}