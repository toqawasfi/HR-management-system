'use strict';
let min; //declaration
 let max ; //declaration
// console.log("hi") checking up my linking 
 function Employee (employeeID,fullName,department,level,img,netSalary) {
this.employeeID  = employeeID;
this.fullName  = fullName;
this.department  = department;
this.level  = level;
this.img  =img;
this.netSalary  = netSalary;
 }
 
 Employee.prototype.salaryLevel = function (min,max,level){
    
if (level =="Senior")
{
   min = 1500;
   max=2000;
   
}
 
else if (level =="Mid-Senior")
{
    min = 1000;
    max = 1500;
}
else if (level =="Junior")
{ min =500;
max= 1000;

}
let difference = max - min;
let rand = Math.random();
rand = Math.floor( rand * difference);
rand = rand + min;
this.netSalary = rand-(rand/7.5)
console.log(this.netSalary);
    return this.netSalary;
    
    }
    Employee.prototype.render = function () {
        return `The Name & The salary are : ${this.fullName} ${this.netSalary} : prototype`; //Interpolation
    }
let gazi = new Employee('1000','Ghazi Samer','Administration','Senior');
gazi.render();
let result=gazi.salaryLevel();
console.log(gazi);
console.log(result);
