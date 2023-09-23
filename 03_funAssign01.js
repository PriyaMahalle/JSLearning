

console.log('===================== Assignment No- 3 =======================');
console.log('---------------------------- Step- 1 -------------------------');
function temp() {
    console.log('*******Function with no argument and no return type:*******');
    console.log('1. JavaScript is the world most popular internet programming language.');
    console.log('2. By Hook or By Crook, I will learn JavaScript.');
}
temp();

console.log('------------------------ Step- 2 -----------------------------');
function myPersonalDetails(firstName, lastName, collegeName) {
        console.log("First Name: Priya");
        console.log("Last Name: Mahalle");
        console.log("College Name: COET Akola");
    }
    myPersonalDetails();

    console.log('------------------------ Step- 3 ---------------------------');
        function swapValues(valueOne, valueTwo) { 
            console.log('Before swap ==>', valueOne, valueTwo);
            var temp = valueOne;
            valueOne = valueTwo;
            valueTwo = temp;
            console.log('After swap ==>', valueOne, valueTwo);
        } 
        swapValues("Virat", "Anushka");
        console.log('--------------------***------------------------------------');
        swapValues(1000, 2000);

        console.log('---------------------- step- 4 -----------------------------');
        function addThreeValues() {
            
        }
        var addition=addThreeValues(10.23, 600, 40);
        console.log('The values are: 10.23, 600, 40');
        console.log('Addition of three no is: 650.23');
        addThreeValues("Hello", "Good", "Morning");
        console.log('Values are: "Hello, "Good", "Morning"');
        console.log('Result is: HelloGoodMorning ');
        
      