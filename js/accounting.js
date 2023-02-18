'use strict';
let employeeArr = [];
let total ;
// console.log("hi") checking up my linking 
function Employee(fullName, department, level, img) {
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.img = img;
    this.netSalary = 0;
    this.employeeId = 0;
    employeeArr.push(this);
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
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    this.netSalary = rand - (rand * 0.075);
    total =this.netSalary;
    return this.netSalary;

}
let atotal,anum,a,aavg;


function getEmployees() {
    let jsonArr = localStorage.getItem("allEmployees");
    employeeArr = JSON.parse(jsonArr);
}


function render() {

    
    getEmployees();
    const table = document.getElementById('edata');
// const tbody = table.querySelector('tbody');
     

// employeeArr.forEach((row) => {
//   const tr = document.createElement('tr');

//   employeeArr.values(row).forEach((department) => {
//     const td = document.createElement('td');
//     td.innerText = value;
//     tr.appendChild(td);
//   });

 
// });
}
render();
console.log(employeeArr);
for (let i=0;i< employeeArr.length;i++)
{
//    if (employeeArr[i].department=="Administration")
// anum = a++;
// atotal=+total;
// aavg = atotal/anum;

 console.log (employeeArr.department);
}




getEmployees();
