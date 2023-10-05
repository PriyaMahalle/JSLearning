console.log(`********************* Array Numbers *********************`);
let arrayNumbers = [22, 11, 44, 55, 77, 33];
console.log(`Given arrayNumers is: ${arrayNumbers} `);
console.log(`================== Even positioned value================`);
 
    for (let index = 0; index < arrayNumbers.length; index++) {
        if (index%2==0){
        const element = arrayNumbers[index];
        console.log(element);
    }
}
console.log(`======================= Sum of elements =================`);
let arrayNum = [22, 11, 44, 55, 77, 33];
let sum = 0;
for (let index = 0; index < arrayNum.length; index++) {
    const element = arrayNum[index];
    sum = sum + element;
}
    console.log(`The sum of total element in array is:`,sum);  
