console.log(`******************* Assignment No- 1 *******************`);

const arrayFruits = ['Banana','Orange','Apple','Mango','Water Melon'];
console.log(`Given array is:`, ['Banana','Orange','Apple','Mango','Water Melon']);
let firstElement = arrayFruits[1];

console.log(`======================= Step- 1 ========================`);
console.log(`The First element in given array is:`,firstElement);
console.log(`The Last element in given array is:`,arrayFruits[arrayFruits.length-1]);

console.log(`======================= Step- 2 ========================`);
arrayFruits.unshift("Papaya");
console.log(`Add element Papaya before element Banana:`,arrayFruits);

console.log(`======================= Step- 3 ========================`);
const arraySpliced = ['Papaya','Banana','Orange','Apple','Mango','Water Melon'];
let splicedElement = arraySpliced.splice(4,1);
console.log(`Removed mango element: `,arraySpliced);

console.log(`======================= Step- 4 ========================`);
arrayFruits.push("pineapple");
console.log(`Insert element dragon fruit ata last position: `,arrayFruits);

console.log(`======================= Step- 5 ========================`);
arrayFruits.splice(5,0,"Dragon Fruit");
console.log(`Insert dragon fruit:`,arrayFruits);

console.log(`======================= Step- 6 ========================`);
arrayFruits.splice(2,1,"Kiwi");
console.log(`Replace element orange with kiwi: `,arrayFruits);

console.log(`======================= Step- 7 ========================`);
arrayFruits.splice(4,4);
console.log(`Elements starting from index 1 to 4 are: `,arrayFruits);

console.log(`======================= Step- 8 ========================`);
const arrayFruit = ["Papaya","Banana","Orange","Apple","Mango","Water Melon"];
let lastElement = arrayFruit.slice(3);
console.log(`Last three elements in given array are: `,lastElement);



