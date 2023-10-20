console.log(`**************** Assignment- B filter() **************`);
const array = [20, 11, 40, 25, 37, 49, 9, 90, 60, 2, 19];
console.log(`Given array is: ${array}`);
console.log(`======================== STEP- 1 ======================`);
const arrayNum = array.filter((currentValue)=>{
    return currentValue > 50;
})
console.log(`The numbers which are greater than 50 fron given array:`,arrayNum);

console.log(`======================== STEP- 2 ======================`);
const arrayEven = array.filter((currentValue)=>{
    return currentValue %2==0;
})
console.log(`The even numbers from given array are: ${arrayEven}`);

console.log(`======================== STEP- 3 ======================`);
const arrayOdd = array.filter((currentValue)=>{
    return currentValue %2==1;
})
console.log(`The odd numbers from given array are: ${arrayOdd}`);

console.log(`======================== STEP- 4 ======================`);
const arrayMul5 = array.filter((currentValue)=>{
    return currentValue % 5==0;
})
console.log(`The numbers which multiple of 5 from given array are: ${arrayMul5}`);

console.log(`======================== STEP- 5 ======================`);
const arrayNumBetween = array.filter((arrayNum)=>{
    return arrayNum >= 20 && arrayNum <= 50 
});
console.log(`The numbers between 20 to 50 from given array are: `,arrayNumBetween);

