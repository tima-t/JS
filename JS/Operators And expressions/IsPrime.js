var prime=17;
var normal=35;
console.log(prime + " " + IsPrime(prime));
console.log(normal + " "+ IsPrime(normal));

function IsPrime(number){
    var i;
    for( i=2; i<=Math.sqrt(number);i++){
        if(number%i==0){
            return false;
        }

    }
    return true;
}