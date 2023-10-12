console.log(`========================= STEP- 1 =======================`);
var bankSbi = {
    Bankname: "SBI",
    Branchname: "Hinjewadi",
    IFSCcode:"sbi1234",
    Branchcode:"B45861",
}
console.log(bankSbi);

console.log(`========================= STEP- 2 =======================`);
var bankLocation = {
    street: "Phase 3",
    city: "Pune",
    pin: 444501,
}
console.log(bankLocation);

console.log(`========================= STEP- 3 =======================`);
console.log(`Object bankSbi and bankLocation clone using assign()`);
const bankSbiClone = Object.assign(bankSbi,bankLocation);
console.table(bankSbiClone);

console.log(`========Object bankSbi and bankLocation clone using spread operator========`);
console.log();
var bankSbi = {...bankLocation};
console.log(bankSbi);

console.log(`========================= STEP- 4 =======================`);
let rateOfIntrest = {
    homeLoanIntrest: '10%',
    personalLoanIntrest: '8%',
    dueIntrest: '11%',
}
console.log(rateOfIntrest);

var sbiDetails = Object.assign(bankSbiClone,bankLocation,rateOfIntrest);
console.table(sbiDetails);

console.log(`========================= STEP- 5 =======================`);
console.log(`Traverse above meraged object==>`);
for (const key in sbiDetails) {
    console.log(key, sbiDetails[key]);
}

