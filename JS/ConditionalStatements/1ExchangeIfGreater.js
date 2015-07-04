var a =5.5;
var b = 4.5;
FindGreater(a,b);


function FindGreater(number,number1){
    if(number>number1){
        number=number+number1;
        number1=number-number1;
        number=number-number1;
    }

    console.log( number + " "+ number1);
}