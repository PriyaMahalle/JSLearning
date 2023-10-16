console.log(`***************************** Assignment- 2 ***********************`);
class Bank{
    bankName
    location
    accountNo
    ifsc
    intrestRate

    constructor(bankName,location,accountNo,ifsc, intrestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc = ifsc;
        this.intrestRate = intrestRate
    }
}
const axisBank = new Bank('Axis Bank', 'Pune','2354254136','axis2145','5%');
const sbiBank = new Bank('SBI Bank', 'Mumbai','7428974136','sbi7845','6.5%');
const iciciBank = new Bank('ICICI Bank', 'Thane','897452556','icici3678','5.5%');
const kotakBank = new Bank('Kotak Bank', 'Delhi','123123568','kotak1234','7%');
const hdfcBank = new Bank('HDFC Bank', 'Banglore','235456321','hdfc9874','4.5%');
const punjabBank = new Bank('Punjab Bank', 'Pune','123478965','punjab3564','6%');

const map = new Map();
map.set(2354254136,axisBank);
map.set(7428974136,sbiBank);
map.set(897452556,iciciBank);
map.set(123123568,kotakBank);
map.set(235456321,hdfcBank);
map.set(123478965,punjabBank);
// console.log(map);

// const keys = map.keys();
// console.log(keys);
// const values =map.values();
// console.log(values);

console.log(`=================Traverse the MAP ================`);
const totalKeys = map.keys();
// console.log(totalKeys);
for (const key of totalKeys) {
    const keyValue = map.get(key);
    console.log(`Bank Name ==> ${keyValue.bankName} | Account No==> ${keyValue.accountNo} | Interest Rate ==> ${keyValue.intrestRate}`);
    
}

