console.log(`***************************** Assignment- 1 ***********************`);
class Bank  {
    bank_name
    location
    account_no
    ifsc
    intrest_rate

constructor(bank_name, location, account_no,ifsc,intrest_rate){
            this.bank_name = bank_name;
            this.location = location;
            this.account_no = account_no;
            this.ifsc = ifsc;
            this.intrest_rate = intrest_rate
}
}
const axis_bank = new Bank('Axis Bank', 'Pune','2354254136','axis2145','5%');
const sbi_bank = new Bank('SBI Bank', 'Mumbai','7428974136','sbi7845','6.5%');
const icici_bank = new Bank('ICICI Bank', 'Thane','693897456','icici3678','5.5%');
const kotak_bank = new Bank('Kotak Bank', 'Delhi','123123568','kotak1234','7%');
const hdfc_bank = new Bank('HDFC Bank', 'Banglore','235456321','hdfc9874','4.5%');
const punjab_bank = new Bank('Punjab Bank', 'Pune','123478965','punjab3564','6%');

const setOfBank = new Set();
setOfBank.add(axis_bank);
setOfBank.add(sbi_bank);
setOfBank.add(icici_bank);
setOfBank.add(kotak_bank);
setOfBank.add(hdfc_bank);
setOfBank.add(punjab_bank);

// console.log(setOfBank);
console.log(`========================= Traverse using SET ============================`);
for (const bank of setOfBank) {
    console.log(`Bank name==>${bank.bank_name}`,`and Loaction==>${bank.location}`);
}


