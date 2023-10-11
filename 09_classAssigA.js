console.log(`********************* Assignment- A *******************`);
console.log(`====== Step- 1(Create 5 object for class vehicle) =======`);
class Vehicles {
    companyName
    color
    availableSeats
    fueltype

    constructor(companyName, color, availableSeats, fueltype){
        this.companyName = companyName;
        this.color = color;
        this.availableSeats = availableSeats;
        this.fueltype = fueltype;
    }
    vehicledetails(){
        console.log(`Vehicles Details: ${this.companyName}, ${this.color}, ${this.availableSeats}, ${this.fueltype}`);
    }
    
}
const vehicleTataSumo = new Vehicles('Tata Sumo', 'Grey', '6','Petrol');
console.log(`Vehicle 1:`,vehicleTataSumo);

const vehicleMarotiSuzuki = new Vehicles('Maroti Suzuki', 'White', '4', 'Petrol');
console.log(`Vehicle 2:`,vehicleMarotiSuzuki);

const vehiclenano = new Vehicles('Nano', 'Brown', '4', 'Petrol');
console.log(`Vehicle 3:`,vehiclenano);

const vehicleToyota = new Vehicles('Toyota', 'Red', '4','Petrol');
console.log(`Vehicle 4:`,vehicleToyota);

const vehicleMercedesBenz = new Vehicles('Mercedes-Benz', 'White', '4', 'Petrol');
console.log(`Vehicle 5:`,vehicleMercedesBenz);

console.log(`Traversing of an array====>`);
const arrayvehicle = [vehicleTataSumo, vehicleMarotiSuzuki, vehiclenano, vehicleToyota, vehicleMercedesBenz]
for (const element of arrayvehicle) {
    element.vehicledetails();
}

console.log(`========== Step- 2(Create class for college with 4 Properties, invoke method- display())=========`);
class College{
    collegeName
    Address
    Departments
    NAACGrade
    Principle

constructor(collegeName, Address, Departments, NAACGrade, Principle){
            this.collegeName = collegeName;
            this.Address = Address;
            this.Departments = Departments;
            this.NAACGrade = NAACGrade;
            this.Principle = Principle;
    }
    display(){
        console.log(`College Details: ${this.collegeName}, ${this.Address}, ${this.Departments}, ${this.NAACGrade},${this.Principle}`);
    }
}
 const collegeCOEP = new College("COEP", 'Pune', '5', 'A+', 'Dr. Ashok Jadhav');
//  console.log(collegeCOEP);

const collegeCOETA = new College('COETA', 'Akola', '5', 'A', 'Dr. Prashant Thorat');
//  console.log(collegeCOETA);bbv/

 const collegeSinhgad = new College('Sinhgad', 'Pune', '5', 'A+',  'Sandip sharma');
//  console.log(collegeSinhgad);  nnm

 const collegeVIT = new College('VIT', 'Pune', '5', 'A+', 'Dr. Pravin Shinde');
//  console.log(collegeVIT);

const collegearray = [collegeCOEP, collegeCOETA, collegeSinhgad,collegeVIT ]
for (const element of collegearray) {
    element.display();
}

console.log(`===== Step- 3(Traversing using function) =====`);
 function traverseObject(collegeCOEP) {
    for (const attributName in  collegeCOEP) {
       console.log(`${attributName}==>${collegeCOEP[attributName]}`);
    }
 }
 traverseObject(collegeCOEP)
 console.log(`===========================================`);
 traverseObject(collegeCOETA)
 console.log(`===========================================`);
 traverseObject(collegeSinhgad)
 console.log(`===========================================`);
 traverseObject(collegeVIT)
