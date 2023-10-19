console.log(`*********************** Assignment- B ********************`);
class Employee{
    emp_id
    emp_name
    emp_dept
    emp_salary
    emp_company
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
const emp_monika= new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_vinay = new Employee(88, "Vinay", "IT", 75000, "TCS");
const emp_mahesh = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayemp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_vinay, emp_mahesh];

console.log(`======================= STEP- 1 =======================`);
arrayemp.forEach((employees)=>{
    if (employees.emp_company == "TCS") {
       console.log(`The employee name is: ${employees.emp_name} and the employee Company is:${employees.emp_company} `); 
    }
}
)

console.log(`======================= STEP- 2 =======================`);
arrayemp.forEach((employees)=>{
    if (employees.emp_dept=="Finance") {
        console.log(`The employe name is:${employees.emp_name} and the employee department is:${employees.emp_dept}`);
    }
}
)

console.log(`======================= STEP- 3 =======================`);
arrayemp.forEach((employees)=>{
    if (employees.emp_name.startsWith("R")) {
        console.log(`The name whose name starts with R is:${employees.emp_name} Emp_id:${employees.emp_id} Emp_Dept:${employees.emp_dept} Emp_salary:${employees.emp_salary} and Emp_Company: ${employees.emp_company}`);
    }
}
)

console.log(`======================= STEP- 4 =======================`);
arrayemp.forEach((employees)=>{
    if (employees.emp_salary > 75000) {
        console.log(`The emp whose salary is greater than 75000 are:${employees.emp_name}, compnay name is:${employees.emp_company} and its salary is ${employees.emp_salary}`);
    }
}
)

console.log(`======================= STEP- 5 =======================`);
arrayemp.forEach((employees)=>{
    if (employees.emp_salary >= 50000 && employees.emp_dept=="IT" ) {
        console.log(`The employess whose salary is greater than equal to 50000 name is:${employees.emp_name}, salary is:${employees.emp_salary} and its department is ${employees.emp_dept}`);
    }
}
)

console.log(`======================= STEP- 6 =======================`);
arrayemp.forEach((employees)=>{
    if(employees.emp_company =='Infy'){
        console.log(`Employee id : ${employees.emp_id}, Name : ${employees.emp_name}, Department : ${employees.emp_dept}, Salary : ${employees.emp_salary} `);
    
    }
 })