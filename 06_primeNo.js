//WAP to find prime no or not

// function prime(no) {
//    for (let index = 2; index < no.length; index++) {
//     if (no%index===0) {
//         console.log(`not prime no`);
//     }
//     else if (no>1) {
        
//     } 
        
//    }
// }
// prime(11);
// prime(8);

function isPrime(num) {
    var prime = num != 1;
    for(var i=2; i<num; i++) {
        if(num % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

