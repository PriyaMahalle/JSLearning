const arrayNum = [11, 3, 4, 11, 4, 7, 3];
const setOfNum = new Set();
setOfNum.add(11);
setOfNum.add(3);
setOfNum.add(4);
setOfNum.add(11);
setOfNum.add(4);
setOfNum.add(7);
setOfNum.add(3);

var arrayNumber= [11, 3, 4, 11, 4, 7, 3];
const setNum = new Set(arrayNumber);
console.log(setNum); 

function removeDup(arr) {
    let result = [11, 3, 4, 11, 4, 7, 3]
    arr.forEach((item, index) => { if (arr.indexOf(item) == index) result.push(item) });
    return result;
  }