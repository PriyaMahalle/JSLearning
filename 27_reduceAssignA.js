console.log(`******************* Assignment- 1 reduce() *******************`);
console.log(`Given Array is:${[20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19]} `);
const arrayNumbers = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`====================== STEP- 1 ======================== `);
let sum = 0;
arrayNumbers.reduce((runingTotal, value)=>{
    return sum = runingTotal + value;
})
console.log(`Sum of all numbers using reduce method: `, sum);
let result = 0;
for (let index = 0; index < arrayNumbers.length; index++) {
    result += arrayNumbers[index];
}
console.log(`Sum of all numbers using for loop: `,result);
console.log(`====================== STEP- 2 ======================== `);
const arrayNum = arrayNumbers.filter((currentValue)=>{
    return currentValue %5==0;
})
console.log(`The numbers which are multiple of 5 are: `,arrayNum);
let summ=20;
arrayNum.reduce((runingTotal, value)=>{
    return summ = runingTotal + value;
})
console.log(`The sum of numbers multiple of 5 using reduce() is:`,summ);