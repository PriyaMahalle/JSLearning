console.log(`************************ Assignment No- 1 **************************`);
console.log(`------------------------------- Step- 1 & 2 ----------------------------`);
var square = function(value) {
    return result = value*value;
}
var result = square(5);
console.log(`Square of 5 is:${result}`);
console.log(`Type of function expression is:`, typeof square);
var result = square(6);
console.log(`Square of 6 is:${result}`);
console.log(`Type of function expression is:`, typeof square);
var result = square(25);
console.log(`Square of 25 is:${result}`);
console.log(`Type of function expression is:`, typeof square);
var result = square(100);
console.log(`Square of 100 is:${result}`);
console.log(`Type of function expression is:`, typeof square);
var result = square(67.89);
console.log(`Square of 67.89 is:${result}`);
console.log(`Type of function expression is:`, typeof square);
var result = square(59);
console.log(`Square of 59 is:${result}`);
console.log(`Type of function expression is:`, typeof square);

console.log(`------------------------------- Step- 3 ----------------------------`);
var areaOfRectangle = function(length, width){
    var area = length*width;
    return area;
}
var result = areaOfRectangle(499,917);
console.log(`Area of rectangle is:`,result);
console.log(`Type of function expression is:`,typeof areaOfRectangle);

console.log(`------------------------------- Step- 4 ----------------------------`);
var swap = function(valueOne, valueTwo){
    console.log('Before swap ==>', valueOne, valueTwo);
    var temp = valueOne;
    valueOne = valueTwo;
    valueTwo = temp;
    console.log('After swap ==>', valueOne, valueTwo);
}
swap("Mahi", "Raina");
swap(55, 77);

console.log(`------------------------------- Step- 5 ----------------------------`);
var string = function(){
    var str = "JS is the most popular language of internet.";
    var result = str.length;
    console.log(`A. Total character available in the string is:`, result);
    var result = str.charAt(6);
    console.log(`B. The character at index 6 is:`,result);
    var result = str.charAt(11);
    console.log(`C. The character at index 11 is:`,result);
    var lastIndexChar = str.charAt(str.length-1);
    console.log(`D. The last character in given string is:`, lastIndexChar);
    var result = str.charAt(0);
    console.log(`E. The first character in given string is:`, result);
    var result = str.charAt(str.length-3);
    console.log(`F. The third last character in given string is:`,result);
    var result = str.split(" ");
    console.log(`G. Total number of words in given string is:`,result.length);
    var result = result.length*result.length;
    console.log(`H. The square of total no. of words in given string is:`,result);


}
string();
