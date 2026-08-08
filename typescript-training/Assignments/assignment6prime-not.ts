let numbers:number[] =[7,25,1];
for(let num of numbers){
    let isPrime:boolean= true;
    if(num<=1){

    isPrime = false;

    }

    else{
        for(let i=2;i<= Math.sqrt(num); i++){
            if(num % i===0){
                isPrime = false;
                break;
            }

        }
    }
    if(isPrime)
    {
        console.log(`${num} is a prime number`);

    }
    else{
        console.log(`${num} is not prime number`);
    }
}