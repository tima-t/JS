/**
 * Created by Òèòî on 06/06/2015.
 */
var point1,
    point2,
    point3,
    point4,
    point5,
    point6,
    line1,
    line2,
    line3;

point1=MakePoint(-3,5);
point2=MakePoint(7,-1);
point3=MakePoint(1,2);
point4=MakePoint(3,-4);
point5=MakePoint(3,2);
point6=MakePoint(9,7);

console.log("distance between point 1 and 2 is : " + CalculateSegmentLine(point1,point2));
line1=MakeSegmentLine(point1,point2);
line2=MakeSegmentLine(point3,point4);
line3=MakeSegmentLine(point5,point6);
console.log(line1.toString());


console.log("this three lines with lengths : " + line1.len + " ,"+ line2.len + " ,"+ line3.len +" can form a triangle : "+
    CheckForTriangle(line1,line2,line3) );




function MakePoint(x,y){
    return{
        CordX:x,
        CordY:y,
        toString: function(){
            return this.CordX + " ,"+ this.CordY;
        }
    }
}
function MakeSegmentLine(p1,p2){
    return {
        begin : p1,
        end : p2,
        len: CalculateSegmentLine(p1,p2),
        toString: function(){
            return "begin : "+  this.begin + "  end : "+ this.end;
        }
    }
}

function CalculateSegmentLine(p1,p2){
    return Math.sqrt((p1.CordX-p2.CordX)*(p1.CordX-p2.CordX) + (p1.CordY-p2.CordY)*(p1.CordY-p2.CordY));
}

function CheckForTriangle(ln1,ln2,ln3){
    if(ln1.len>ln2.len+ln3.len || ln2.len>ln1.len+ln2.len || ln3.len> ln1.len+ln2.len){
        return false ;
    }
    else{
        return true;
    }
}