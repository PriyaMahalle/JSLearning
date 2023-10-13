
const employeeInfo = `{
    "name": "Aleix Melon",
    "id": "E00245",
    "role": ["Dev", "DBA"],
    "age": 23,
    "doj": "11-12-2019",
    "married": false,
    "address": {
        "street": "32, Laham St.",
        "city": "Innsbruck",
        "country": "Austria"
    },
    "referred-by": "E0012"
}`
// console.log(typeof employeeInfo);
const post = JSON.parse(employeeInfo);
// console.log(typeof post);
console.log(`After convert given string in object is:`);
console.log(post);
console.log(`=================================================`);
var result = post.role[0];
console.log(`The first word from the given array is:${result}`);

console.log(`=================================================`);
var result = post.name.split(" ");
// console.log(result);
var result = post.name.slice(6);
console.log(`The last name from given object is:`,result);

console.log(`=================================================`);
var date = post.doj.split(" ");
// console.log(date);
var result = post.doj.slice(6);
console.log(`The joining year of employee is:`,result);

