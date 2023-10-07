console.log(`************************* Assignment- 0D **************************`);
console.log(`=============================== STEP- 1 ==========================`);
var professor = {
    Name: "Pravin Joshi",
    Age: 45,
    College: "COETA",
    Department: "Computer Science",
    Position: "Asst.Professor",
}
console.log(professor);

console.log(`=============================== STEP- 2 ==========================`);
var professor = {
    Name: "Pravin Joshi",
    Age: 45,
    College: "COETA",
    Department: "Computer Science",
    Position: "Asst.Professor",
    degrees: {
        Engineering:"CSE",
        PHD: "Adv Computing",  
    }
}
console.log(professor);
console.log(professor.degrees);

console.log(`=============================== STEP- 3 ==========================`);
var professor = {
    Name: "Pravin Joshi",
    Age: 45,
    College: "COETA",
    Department: "Computer Science",
    Position: "Asst.Professor",
    degrees: {
        Engineering:"CSE",
        PHD: "Adv Computing", 
    },
    certificates: ["Hacker Rank Participitaion",
                  "Certificate in IFE Course",
                  "Certificate in Adv Programming"]
}
console.log(professor);
console.log(professor.degrees);
console.log(professor.certificates);

console.log(`=============================== STEP- 4 ==========================`);
console.log(`Add new property total Experience:${professor.totalExperience="14 years"}`);
    
console.log(`=============================== STEP- 5 ==========================`);
professor.Age= 50;
console.log(professor);

console.log(`=============================== STEP- 6 ==========================`);
let certificates= ["Hacker Rank Participitaion",
                  "Certificate in IFE Course",
                  "Certificate in Adv Programming"]
                  professor.certificates.push("oracle certified")
console.log(professor.certificates);

console.log(`=============================== STEP- 7 ==========================`);
let result = certificates[certificates.length-1];
console.log(`The last element from array is: ${result}`);

console.log(`=============================== STEP- 8 ==========================`);
console.log(professor);
console.log(professor.degrees);
console.log(certificates);  

console.log(`=============================== STEP- 9 ==========================`);
console.log(`Traverse array of certificates:`);
for (const certificates of professor.certificates) {
    console.log(certificates);
}