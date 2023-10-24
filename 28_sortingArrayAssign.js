console.log(`***************Assignment- B Sorting in ascending and descending order***********`);
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
console.log(`====================== Sort the Emp_ID in dscending order ======================== `);
arrayEmployees.sort((emp1, emp2)=>{
    return emp1.emp_id >emp2.emp_id ? -1: 1;
});
const empDetails = arrayEmployees.forEach((Employee)=>{
    console.log(`Employee Details==>  Emp_ID:`,Employee.emp_id, ` Emp_Name:`,Employee.emp_name, ` Emp_Dept:`,Employee.emp_dept);
})

console.log(`===================== sort Emp_Dept in ascending order =====================`);
arrayEmployees.sort((emp1, emp2)=>{
    return emp1.emp_dept > emp2.emp_dept ? 1: -1;
});
const empDeptDetails = arrayEmployees.forEach((emp)=>{
    console.log(`Employee Details==> Emp_Id:`,emp.emp_id, `Emp_Dept:`,emp.emp_dept, `Emp_Company:`,emp.emp_company);
})

console.log(`===================== sort Emp_Salary in descending order =====================`);
arrayEmployees.sort((emp1, emp2)=>{
    return emp1.emp_salary > emp2.emp_salary? -1: 1;
});
const empSalaryDetails = arrayEmployees.forEach((emp)=>{
    console.log(`Employee Details==> Emp_Name:`,emp.emp_name, ` Emp_Salary:`,emp.emp_salary, ` Emp_Company:`,emp.emp_company);
})