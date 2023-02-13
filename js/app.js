'use strict';

// console.log("hi") checking up my linking 
function Employee(employeeID, fullName, department, level) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = " ";
    this.netSalary = 0;
}

Employee.prototype.salaryLevel = function () {
    let min; //declaration
    let max; //declaration
    if (this.level == "Senior") {
        min = 1500;
        max = 2000;

    }

    else if (this.level == "Mid-Senior") {
        min = 1000;
        max = 1500;
    }
    else if (this.level == "Junior") {
        min = 500;
        max = 1000;

    }
    //crearing random function
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    this.netSalary = rand - (rand * 0.075);
    console.log(this.netSalary);
    return this.netSalary;

}
//My second prototype
Employee.prototype.render = function () {
    document.write(`The Name & The salary are : ${this.fullName} ${this.netSalary} <br>`);//intepolation
    
}
    
let gazi = new Employee('1000', 'Ghazi Samer', 'Administration', 'Senior','/assests/Connect.png');
let lana = new Employee('1001','Lana Ali','	Finance','Senior','/assests/Connect.png');
let tamer = new Employee('1002','Tamara Ayoub','Marketing','Senior','/assests/Connect.png');
let saif = new Employee('1003','Safi Walid','Administration','Mid-Senior','/assests/Connect.png');
let omar = new Employee('1004','Omar Zaid','Development','Senior','/assests/Connect.png');
let rana = new Employee('1005','Rana Saleh','Development','Junior','/assests/Connect.png');
let hadi = new Employee('1006','Hadi Ahmad','Finance','Mid-Senior','/assests/Connect.png');

 gazi.salaryLevel();
lana.salaryLevel();
 tamer.salaryLevel();
 saif.salaryLevel();
 omar.salaryLevel();
 rana.salaryLevel();
let hadiResult = hadi.salaryLevel();
// gazi.render();
// lana.render();
// tamer.render();
// saif.render();
// omar.render();
// rana.render();
// hadi.render();
function Employeesform(fullname, depselect, levelselect, imgUrl ) {
    this.fullname = fullname;
    this.depselect = depselect;
    this.levelselect = levelselect;
    this.imgUrl = imgUrl; 
    this.employeeId=0;  
}
let id =1000;
Employeesform.prototype.employeeId=function(){
    employeeId= id++;
   return id; 
}
let employeeForm = document.getElementById("employeeForm");
employeeForm.addEventListener('submit', addNewemployeeHandler);
function addNewemployeeHandler(event) {
    event.preventDefault();
    let fullname = event.target.fullname.value;
    let depselect = event.target.depselect.value;
    let levelselect = event.target.levelselect.value;
    let imgPath = event.target.imgUrl.value;
}

    let newEmployee = new Employeesform(fullname,depselect,levelselect,imgUrl);
    newEmployee.employeeId();
    newEmployee.render();
