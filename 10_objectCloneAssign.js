

console.log(`====================== STEP- 1 ======================`);
let personalDetails = {
    firstName: "Priya",
    lastName: "Mahalle",
    age: 26,
    graduation: "BE- Compter Sci",
    Address: "Pune",
}
console.log(personalDetails);

console.log(`====================== STEP- 2 ======================`);
let collegeDetails = {
    collegeName: "COETA",
    Address: "Akola",
    noOfDepartments: 5,
    university: "SGBAU",
}
console.log(collegeDetails);

console.log(`====================== STEP- 3 ======================`);
Object.assign(personalDetails,collegeDetails);
console.table(personalDetails);

console.log(`====================== STEP- 4 ======================`);
let frndsArray = ["Seeta","Geeta","Anita","Sunita"];
Object.freeze(frndsArray);
console.log(`Create array frinends Name and freez it`,frndsArray);

console.log(`====================== STEP- 5 ======================`);
console.log(`Iterate frndsarray as given below:`);
for (let index = 0; index < frndsArray.length; index++) {
    const element = frndsArray[index];
    console.log(element);
}

console.log(`====================== STEP- 6 ======================`);
let string = "Codemind Technology";
console.log(`Given String is==>`,string);
let reverse = "";
let strLen = string.length;
for (let index = strLen-1; index >= 0; index--) {
   let char = string.charAt(index);
    if (char==' ') {
        break;
    }
    else{
        reverse = reverse + char;
    }
}
console.log(`Reverse string is==>`,reverse);