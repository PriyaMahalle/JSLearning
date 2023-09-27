
console.log(`*********************** Assignment No- 1 **********************`); 
console.log(`--------------------- Step- 1 --------------------`);
function squareOfWordLength(str) {
 
    console.log(`Given Word is: ${str}`);
    result = str.length;
    console.log(`Length of given word is: ${result}`);
    var square;
    square = result * result;
    return square;

    

    
}
 var square = squareOfWordLength("JavaScript");
 console.log(`Square of given word is: ${square}`);
console.log(`-------------------------------------`);
var square = squareOfWordLength("Google Chrome");
console.log(`Square of given word is: ${square}`);
console.log(`-------------------------------------`);
var square = squareOfWordLength("Developer Smart");
console.log(`Square of given word is: ${square}`);

console.log(`--------------------- Step- 2 --------------------`);
function developer() {
    var str;
    str = "I am Angular Developer";
    result = str.length
    console.log(`Length of given string is ${result}`);
    result = str.split(" ");
    console.log(`Total number of words in given string is ${result.length}`);
     output = str.length / result.length;
     console.log(`2.1 after dividing string length by number of words ${output}`);

     multiplication = str.length * result.length;
     console.log(`2.2 after multiplying string length by number of words ${multiplication}`);
   
}
developer();

