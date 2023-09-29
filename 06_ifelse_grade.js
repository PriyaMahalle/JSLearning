console.log(`************************ Assignment No- 2 *********************`);
console.log(`--------------------------- Step- 1 --------------------------`);
function voteEligible(age) {
    if (age==0 || age<=0 || age>=130 || age==null) {
        console.log(`Invalid data:`, age);
    } else {
        if (age<18) {
            console.log(`sorry... you are not eligible for vote. age:`, age);
        } else {
            console.log(`Hey! you are eligible for vote. age:`, age);
        }
    }
}
voteEligible(-10);
voteEligible(45);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(0);
voteEligible(200);
voteEligible(null);
voteEligible(undefined);