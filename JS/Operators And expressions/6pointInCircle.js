/**
 * Created by Тито on 24/05/2015.
 */



/*(x - center_x)^2 + (y - center_y)^2 < radius^2   formula */
var pointX= 0,
 pointY= 1,
 radius= 5,
 centerX= 0,
    centerY=0;
console.log("your point is within the circle : "+IsInCircle(pointX,pointY,centerX,centerY,radius));




function IsInCircle(x,y,centerX,centerY,radius){
    if(((Math.pow(x-centerX),2)+(Math.pow(y-centerY),2))<radius){
        return true;
    }
    else{
        return false;
    }
}