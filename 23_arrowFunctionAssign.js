console.log(`*********************** Assignment- 0A ********************`);
console.log(`======================= STEP- 1 ====================`);
let arrowFun = ()=>{
    console.log(`"Good Morning, Today is Thrusday"`);
}
arrowFun()

console.log(`======================= STEP- 2 ====================`);
let arrow_multiplication = (n1, n2, n3=1)=> {
    console.log(`Multiplication of given values is: ${n1 * n2 * n3}`);
}
arrow_multiplication(5, 5, 2)
arrow_multiplication(10, 4, 1)

console.log(`======================= STEP- 3 ====================`);
let arrow_add = (n1, n2, n3, n4, n5) =>{
    let result = n1 + n2 + n3 + n4 + n5;
    return result;
}
let aditionOfNo = arrow_add(100, 100, 200, 349, 756)
console.log(`a. Addition of given no is: &{aditionOfNo}`);
let aditionOfWords = arrow_add("I am ", "learning ", "ES6 ", "features ", "in depth ")
console.log(`b. Addition of given words is:${aditionOfWords}`);