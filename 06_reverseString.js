

function stringReverse(string) {
  
let strLen = string.length;
for (let index = strLen-1; index >=0; index--) {
   console.log(string[index]);
} 
}
stringReverse("Priya")
stringReverse("Mahalle")

console.log(`==========================`);
//WAP program for pallindrome

function pallindrome(string) {
    let strLen = string.length;
    for (let index = 0; index <=strLen/2; index++) {
        console.log(string[index]);
        if (string[index]!=string[strLen-1-index]) {
            
        }
    }
}
pallindrome("dad")
// pallindrome("madam")