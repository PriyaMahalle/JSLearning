console.log(`************* Assignment- To count character 'a' or 'A'************`);

function countChar(str) {
    var count = 0;
    for (let index = 0; index < str.length-1; index++) {
    var char = str.charAt(index);
    if(char=='a' || char=='A'){
        count = count + 1;
    }  
}
console.log(`Total number of "a" and "A" in given string are: ${count}`);
}
console.log('Given string is: "I Am learning JavaScript, The language of internet" ');
countChar("I Am learning JavaScript, The language of internet")
console.log(`=======================================================================`);
console.log('Given string is: "My favourite movie is LAggAn"');
countChar("My favourite movie is LAggAn")

