console.log(`******************** Assignment No- 3 ******************`);
function leapYear(year){
    if(year % 4 == 0) {
         console.log(`${year} is Leap Year`);
    }
      else{
       console.log(`${year} is Not Leap Year`);
      
    }
  }
 leapYear(2020);
 // console.log(`The 2020 is a leap year`);
  leapYear(1999);
  //console.log(`The 1999 is not a leap year`);
  leapYear(1600);
  //console.log(`The 1600 is a leap year`);
  leapYear(2022);
 // console.log(`The 2022 is not a leap year`);
  leapYear(1945);
 // console.log(`The 1945 is not a leap year`);
  leapYear(null);
 // console.log(`The null is a leap year`);
  leapYear("Twenty twenty");
 // console.log(`The Twenty twenty not  is a leap year`);
  leapYear(undefined);
 // console.log(`The undefined is not a leap year`);
  leapYear(1750);
 // console.log(`The 1750 not is a leap year`);


