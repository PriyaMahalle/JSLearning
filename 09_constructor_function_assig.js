console.log(`======================== *** ========================`);
function Bank(bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
    // this.show = function(){
    //     console.log(`Branch Details:${this.bankName} ${this.location} ${this.ifscCode} ${this.branchCode}`);
    // } 
}
const yesBank = new Bank('YES Bank', 'Pune', 'yes3456', 'B58642');
console.log(yesBank);
// console.log(`Bank Details of YES Bank are:`,'Bank Name==>',yesBank.bankName, 'Bank Location==>',yesBank.location,'Bank IFSC Code==>',yesBank.ifscCode,'Branch Code==>',yesBank.branchCode);

const sbiBank = new Bank('SBI Bank', 'Mumbai', 'sbi7456', 'B36542');
console.log(sbiBank);

const maharastraBank = new Bank('Maharashtra Bank', 'Banglore', 'mah5416', 'B96541');
console.log(maharastraBank);

const axisBank = new Bank('Axis Bank', 'Thane', 'axis2354', 'B12345');
console.log(axisBank);

console.log(`======================== *** ========================`);
Bank.prototype.openTime = "9 AM IST";
// console.log(`Open time of YES bank is:`,yesBank.openTime);
// console.log(`Open time of SBI bank is:`,sbiBank.openTime);
// console.log(`Open time of Maharashtra bank is:`,maharastraBank.openTime);
// console.log(`Open time of Axis bank is:`,axisBank.openTime);

Bank.prototype.closeTime = "6 PM IST";
console.log(`SBI Bank is open between==>`,sbiBank.openTime,'to', sbiBank.closeTime);
console.log(`Axis Bank is open between==>`, axisBank.openTime, 'to', axisBank.closeTime);
console.log(`YES bank having branch Code:`, axisBank.branchCode, `and it's open time is:`, axisBank.openTime);

