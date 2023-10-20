console.log(`************************ Assignment- A Map() ********************`);
const arrayNumber = [20, 11, 20, 25, 23, 11, 9, 31, 60, 2, 19];
console.log(`Given array is:${arrayNumber}`);
console.log(`===================== STEP- 1 =====================`);
const newArray = arrayNumber.map((currentValue, index)=> { 
    return currentValue + 10;
});
console.log(newArray);

console.log(`===================== STEP- 2 =====================`);
const arrayCube = arrayNumber.map((currentValue)=>{
    return currentValue *currentValue *currentValue;
})
console.log(arrayCube);

console.log(`===================== STEP- 3 =====================`);
const arrayAdd = arrayNumber.map((currentValue, index)=>{
    return currentValue + index;
})
console.log(arrayAdd);