//WAP to find prime no or not
const num = 7;
 function isPrimeNum() {
for (let index = 2; index < num; index++) {
    if(num % index==0){
        return false;
    }  
}
    return true;
}
const result = isPrimeNum(11);
console.log(`Is Number Prime: ${result}`);

//Assignment: WAP to count the total prime number from the array.
const array = [11, 3, 6, 10, 43, 29, 50];
function isPrime(num) {
    for (let index = 2; num > index; index++) {
      if (num % index == 0) {
        return false;
      }
    }
    return num > 1;
  }
  
  console.log(`Total number of prime number from the given array are:${array.filter(isPrime)}`);




