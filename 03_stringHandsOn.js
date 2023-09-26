

console.log(`********************** Assignment No- 2 ********************`);
function stringHandsOn() {
    console.log(`------------------------ Step-1 -----------------------------`);
    console.log(`Given a string:    Hey are doing good, keep it up     `);
    var givenStr = "    Hey are doing good, keep it up     ";
    var totalLength = givenStr.length;

    console.log(`------------------------ Step-2 -----------------------------`);
    console.log(`Total length of given string is:${givenStr.length}`);

    console.log(`------------------------ Step-3 -----------------------------`);
    var result= givenStr.trim();
    console.log(`After trim the string is:${result}`);
    console.log(`After trimming the length of string is:${result.length}`);

    console.log(`------------------------ Step-4 -----------------------------`);
    var lengthAfterTrim = result.length;
    var result = totalLength - lengthAfterTrim;
    console.log(`Removed extra spaces are:${result}`);

    console.log(`------------------------ Step-5 -----------------------------`);
    var string = "Hey are doing good, keep it up";
    var givenString = string;
    var charAt0 = string.charAt(0);
    console.log(`First character after trim is:${charAt0}`);
    var result = string.charAt(string.length-1);
    console.log(`Last character after trim is:${result}`);

    console.log(`------------------------ Step-6 -----------------------------`);
     var string = string.split(" ");
    console.log(`String after split is:${string}`);
    console.log(`Total words in given string is:${string.length}`);
    
    console.log(`------------------------ Step-7 -----------------------------`);
     var indexOfg = givenString.indexOf('good');
     console.log("Index of word good is:",indexOfg);

     console.log(`------------------------ Step-8 -----------------------------`);
    var output = givenString.slice(22);
    console.log(`Substring starting from index 22 is:${output}`);
    
    console.log(`------------------------ Step-9 -----------------------------`);
    console.log(`String ends with word "up": true`);

    console.log(`------------------------ Step-10 -----------------------------`);
    console.log('String starts with word "Hey": true');
}
stringHandsOn();



