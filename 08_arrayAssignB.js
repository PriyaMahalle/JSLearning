console.log(`********************** AssignmentNo- 2 ***********************`);
const arrayNumbers = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`Given Array is:`,arrayNumbers);
console.log(`========================= STEP- 1 ============================`);
let totalElement = arrayNumbers.length;
console.log(`Total element available in given array are:`,totalElement);

console.log(`========================= STEP- 2 ============================`);
let firstElement = arrayNumbers[0];
console.log(`First element in given array is: ${firstElement}`);
let lastElement = arrayNumbers[totalElement-1];
console.log(`Last element in given array is:${lastElement}`);

console.log(`========================= STEP- 3 ============================`);
const arrayNumber = [20,31,40,25,23,11,29,9,60,2,11];
let thirdLastElement = arrayNumber[totalElement-3];
console.log(`The third last element in given array is:${thirdLastElement}`);

console.log(`========================= STEP- 4 ============================`);
let arrayNum = [20,31,40,25,23,11,29,9,60,2,11];
console.log(`All even numbers in given array are:`);
 for (let index = 0; index < arrayNum.length; index++) {
    if (arrayNum[index]%2==0) {
        const element = arrayNum[index];  
        console.log(element);  
    } 
 }  
    
 console.log(`========================= STEP- 5 ============================`);
 let arrayN = [20,31,40,25,23,11,29,9,60,2,11];
 console.log(`All odd numbers in given array are:`);
for (let index = 0; index < arrayN.length; index++) {
    if (arrayN[index]%2!==0) {
        const element = arrayN[index];
        console.log(element);
    }  
}

console.log(`========================= STEP- 6 ============================`);
let arrayNumb = [20,31,40,25,23,11,29,9,60,2,11];
let sum = 0;
console.log(`Even positioned elements from the given array are:`);
for (let index = 0; index < arrayNumb.length; index++) {
    if ([index]%2==0) {
        const element = arrayNumb[index];
        console.log(element);
        sum = sum + element;    
    } 
}
console.log(`sum of even positioned elements from the given array ara:${sum}`);

console.log(`========================= STEP- 7 ============================`);
const array = [20,31,40,25,23,11,29,9,60,2,11];
let total = 0;
console.log(`Odd positioned elements from the given array are:`);
for (let index = 0; index < array.length; index++) { 
    if ([index]%2!==0) {
        const element = array[index];
        console.log(element);
        total= total + element;
    }
}
console.log(`The sum odd positioned elements from the given array is:${total}`);

console.log(`========================= STEP- 8 ============================`);
const arrayNo = [20,31,40,25,23,11,29,9,60,2,11];
 let addition = 0;
for (let index = 0; index < arrayNo.length; index++) {
    const element = arrayNo[index];
    addition = addition + element;
} 
console.log(`The sum of total elements from the given array is: ${addition}`);

console.log(`========================= STEP- 9 ============================`);
const arrayNos = [20,31,40,25,23,11,29,9,60,2,11];
for (let index = 0; index < arrayNos.length; index++) {
    if (arrayNos[index]%5==0) {
        const element = arrayNos[index];  
        console.log(element);
    } 
}

console.log(`========================= STEP- 10 ============================`);
const givenArray = [20,31,40,25,23,11,29,9,60,2,11];
var result = givenArray.includes(115);
console.log(`Is number 115 is available in given array: ${result}`);

console.log(`========================= STEP- 11 ============================`);
var result = givenArray.includes(23);
console.log(`Is number 23 is available in given array: ${result}`);

console.log(`========================= STEP- 12 ============================`);
var arrayElements = [20,31,40,25,23,11,29,9,60,2,11];
arrayElements.splice(3,0,55,66)
console.log(`Insert elements 55 and 66 before index 3: ${arrayElements}`);

console.log(`========================= STEP- 13 ============================`);
arrayElements.splice(4,3);
console.log(`Delete 3 elements starting from index 4: ${arrayElements}`);


