/**
 * Created by Тито on 26/05/2015.
 */
/* Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3) and out of the rectangle R(top=1, left=-1, width=6, height=2).
the function for the rect is correct only for these values, because we use them from the task*/

var pointX= 2,
    pointY= 1.5,
    radius= 3,
    centerX= 1,
    centerY= 1,
    circle,
    rect;


console.log("our point( "+pointX+","+ pointY+") is in the circle and out of rect : " + IsInCircAndOutOfRect(pointX,pointY,centerX,centerY,radius) );
circle=IsInCircle(pointX,pointY,centerX,centerY,radius);
rect=IsOutOfRect(pointX,pointY);
console.log(circle + "  rect:"+rect);
function IsInCircAndOutOfRect(x,y,centerX,centerY,radius){
    return ( IsInCircle(x,y,centerX,centerY,radius) && IsOutOfRect(x,y)   );
}

function IsInCircle(x,y,centerX,centerY,radius){
    if((Math.pow((x-centerX),2)+(Math.pow((y-centerY),2)))<radius){
        return true;
    }
    else{
        return false;
    }
}

function IsOutOfRect(x,y){
    if((x<-1||x>5)||(y>1||y<-1)){
        return true;
    }
    else {
        return false;
    }
}