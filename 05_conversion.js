
console.log(`----------Implicit Conversion----------`);
var n1 = "20";
var n2 = 20;
console.log(n1==n2); 

console.log('4'-true);
console.log(`4 is implicit converted to number and true boolean`);

console.log(`----------Explicit Conversion----------`);
console.log(n1, typeof n1);
n1=+n1;
console.log(n1, typeof n1);
