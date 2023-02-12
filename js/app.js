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

let gaziResult = gazi.salaryLevel();
let lanaResult =lana.salaryLevel();
let tamerResult = tamer.salaryLevel();
let saifResult= saif.salaryLevel();
let omarResult= omar.salaryLevel();
let ranaResult = rana.salaryLevel();
let hadiResult = hadi.salaryLevel();
gazi.render();
lana.render();
tamer.render();
saif.render();
omar.render();
rana.render();
hadi.render();
