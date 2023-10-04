console.log(`******************** Assignment No- 1 *******************`);
console.log(`======================== Step- 1 =====================`);
var str = "I am very good IT developer";
var count = 0;
var vowelsCap = "AEIOU";
for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index).toUpperCase();
    if(vowelsCap.includes(char)){
        count = count + 1;
    }  
}
console.log(`Given string is: I am very good IT developer`);
console.log(`Total number of vowels in given string is: ${count}`);

console.log(`======================== Step- 2 =====================`);
var result=0;
for (let index = 1; index <=5; index++) {
   result = result + index * index * index;
    
}
console.log(`Sum of cube of numbers from 1 to 5 is: ${result}`);

console.log(`======================== Step- 3 =====================`);

function oddPositionedChars(str) {
    
    for (let index = 0; index < str.length-1; index++) {
     if (index%2!=0 && str.charAt(index)!=" ") {
        console.log(str.charAt(index));
    } 
   
    }
}
console.log(`Given string is:Hard work always pays back`);
console.log(`Odd postitioned characters in given string is:`);
oddPositionedChars("Hard work always pays back");
console.log(`Given string is: Soon I will be UI IT champ`);
console.log(`Odd postitioned characters in given string is:`);
oddPositionedChars("Soon I will be UI IT champ"); 

