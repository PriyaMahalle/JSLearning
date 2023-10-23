console.log(`************************ Assignment- A Map() ********************`);
const arrayNumber = [20, 11, 20, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array is:${arrayNumber}`);
console.log(`===================== STEP- 1 =====================`);
const newArray = arrayNumber.map((currentValue, index)=> { 
    return currentValue + 10;
});
console.log(`Add 10 into each element: `,newArray);

console.log(`===================== STEP- 2 =====================`);
const arrayCube = arrayNumber.map((currentValue)=>{
    return currentValue *currentValue *currentValue;
})
console.log(`Cube of each array element is: `,arrayCube);

console.log(`===================== STEP- 3 =====================`);
const arrayAdd = arrayNumber.map((currentValue, index)=>{
    return currentValue + index;
})
console.log(`Add index value into its corresponding each array element: `,arrayAdd);