console.log(`*********************** Assignment No- 2 *********************`);
console.log(`-------------------------- Step- 1 ------------------------`);
function greaterNumber(num1,num2) {
   
    var result = num1>=num2? num1 : num2 ;
    console.log(`Greater number is ${result}'`);
}
greaterNumber(10,-10);
greaterNumber(800,899);

console.log(`-------------------------- Step- 2 ------------------------`);
function isEvenOrOddNum(n) {
var result = n%2 == 0 ? "EVEN" : "ODD";
console.log(`Given number is ${n} ==> ${result}`);

}
 isEvenOrOddNum(29);
 isEvenOrOddNum(44);
 isEvenOrOddNum(0);
 isEvenOrOddNum(101);

 console.log(`-------------------------- Step- 3 ------------------------`);
 function wordLength(str) {
    var result = str.length;
    var output = str.length%2 == 0 ? "EVEN" : "ODD";
    console.log(`Given string is ${str} ==> ${output}`); 
 }
 wordLength("JavaScript");
 wordLength("developer");
 wordLength("google");


