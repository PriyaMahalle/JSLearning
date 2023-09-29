
var show = function(){
    console.log(`Inside Function Expression`);
}
show();

var add = function(value1, value2){
    console.log(value1 + value2);
}
add(10, 20);

var square = function(value){
    return value * value;
}
var result = square(25);
console.log(`Square of 25 is:${result}`);
console.log(`Type of function is:`, typeof square);