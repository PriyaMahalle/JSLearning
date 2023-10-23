console.log(`******************** Assignment-3 Sorting ****************`);
const arrayrollNumbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`Given array is==>`,arrayrollNumbers);

console.log(`===================== STEP- 1 =================`); 
let arrayReverse = arrayrollNumbers.reverse();
console.log(`Reverse array is==>`,arrayReverse);

console.log(`===================== STEP- 2 =================`); 
let arraySort = arrayrollNumbers.sort();
console.log(`Using sort method without using any custom logic:`,arraySort);

console.log(`===================== STEP- 3 =================`);
const newArray = arrayrollNumbers.sort( (a, b) => {
    return a>b ? 1 : -1;
} );
console.log(`Sorting an array in ascending order:`,newArray);

console.log(`===================== STEP- 4 =================`);
let greaterNum = newArray[newArray.length-1];
console.log(`The greatest number from given array is:`,greaterNum);

console.log(`===================== STEP- 5 =================`);
let smallestNum = newArray[0];
console.log(`The smallest number from the given array is:${smallestNum}`);

console.log(`===================== STEP- 6 =================`);

const setOfNum = new Set();
setOfNum.add(113);
setOfNum.add(45);
setOfNum.add(56);
setOfNum.add(11);
setOfNum.add(32);
setOfNum.add(45);
setOfNum.add(109);
setOfNum.add(799);
setOfNum.add(56);
setOfNum.add(45);

var arrayRollNumber = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
const setNum = new Set(arrayRollNumber);
// console.log(setNum); 

arrayRollNumber = [...new Set(arrayRollNumber)];
console.log(`After Removing duplicates: `,arrayRollNumber);
  
  
