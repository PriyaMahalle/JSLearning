console.log(`********************** Assignment- A *******************`);
console.log(`======================== Step- 1 ========================`);
console.log(`Create object bankSbi:`);
let bankSbi = {
    BankName: "SBI",
    BranchName: "Kothrud SBI",
    AccountNo: 123456789,
    IFCCode: "Sbi125846",
}
console.table(bankSbi);

console.log(`======================== Step- 2 ========================`);
console.log(`Create object bankLocation:`);
let bankLocation = {
    Street: "Kothrud",
    City: "Pune",
    Pin: 444505,
}
console.table(bankLocation);

console.log(`======================== Step- 3 ========================`);
console.log(`Clone object sbibank and bankLocation:`);
const bankLocationClone = Object.assign({},bankLocation)
console.log(bankLocation);
Object.assign(bankSbi,bankLocation)
console.table(bankSbi);

console.log(`======================== Step- 4 ========================`);
console.log(`Create the object rateOfIntrest with proportes: homeLoanIntrest, personalLoanIntrest, and dueIntrest:`);
let rateOfIntrest = {
    homeLoanIntrest: '14%',
    personalLoanIntrest: '15%',
    dueIntrest: '16%',
}
console.log(rateOfIntrest);

console.log(`======================== Step- 5 ========================`);
console.log(`After Mearging bankSbi, bankLocation, and rateOfIntrest the result as shown as below:`);
Object.assign(bankSbi,bankLocation,rateOfIntrest)
console.log(bankSbi);

console.log(`======================== Step- 6 ========================`);
console.log(`Using for in Loop traverse the above mearged object:`);
for (const key in bankSbi) {
   console.log(key, bankSbi[key]);
}