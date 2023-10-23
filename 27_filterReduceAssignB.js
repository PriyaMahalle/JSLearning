console.log(`***************Assignment- B Filter(), Reduce()***********`);
class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monica = new Employee(77, "Monica", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayEmployees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monica, emp_viny, emp_mahi];
console.log(`====================== STEP- 1 ======================== `);

const arrayNamesWipro = arrayEmployees.filter( (employee) => {
    return employee.emp_company=="Wipro";
 })
 console.log(arrayNamesWipro);

 console.log(`====================== STEP- 2 ======================== `);
 const arrayEmpDept = arrayEmployees.filter((employee)=>{
    return employee.emp_dept=='IT' || employee.emp_dept=='HR';
 })
 console.log(arrayEmpDept);

 console.log(`====================== STEP- 3 ======================== `);
 const arrayEmpId = arrayEmployees.filter((employee)=>{
    return employee.emp_id > 50;
 })
 console.log(arrayEmpId);

//  console.log(`====================== STEP- 4 ======================== `);
//  const arrayEmpName = arrayEmployees.filter((employee)=>{
//     return employee.emp_name.startsWith("A")||startsWith("V")||startsWith("M");
//  })
//  console.log(arrayEmpName);

console.log(`====================== STEP- 5 ======================== `);
const avgEmpSalary = arrayEmployees.filter((employee)=>{
    return employee.emp_salary/arrayEmployees.length;
})
console.log(avgEmpSalary);