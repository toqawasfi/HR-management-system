'use strict';
let employeeArr = [];
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
    //crearing random function
    let difference = max - min;
    let rand = Math.random();
    rand = Math.floor(rand * difference);
    rand = rand + min;
    this.netSalary = rand - (rand * 0.075);
    return this.netSalary;


}
//My second prototype
Employee.prototype.render = function () {

    const container = document.getElementById('cards');
    const divEl = document.createElement('div');
    container.appendChild(divEl);


        const nameEl = document.createElement('h3');
        divEl.appendChild(nameEl);
        nameEl.textContent = this.fullName;

        const departmentEl = document.createElement('p');
        divEl.appendChild(departmentEl);
        departmentEl.textContent = this.level;


        const imgEl = document.createElement('img');
        divEl.appendChild(imgEl);
        imgEl.setAttribute('src', this.img);
        imgEl.width = "150";
        imgEl.height = "150";

        const salaryEl = document.createElement('p');
        divEl.appendChild(salaryEl);
        salaryEl.textContent = this.netSalary;

        const idEl = document.createElement('p');
        divEl.appendChild(idEl);
        idEl.textContent = this.employeeId;

    }


    let id = 1000;
    Employee.prototype.uniqueId = function () {
        this.employeeId = id++;
        return this.employeeId;
    }


    let employeeForm = document.getElementById("employeeForm");
    employeeForm.addEventListener('submit', addNewemployeeHandler);
    function addNewemployeeHandler(event) {
        event.preventDefault();
        let fullname = event.target.fullname.value;
        let depselect = event.target.depselect.value;
        let levelselect = event.target.levelselect.value;
        let imgPath = event.target.imgUrl.value;
        getEmployees();
        if (employeeArr == null) //localstorage is empty
        {
            employeeArr = [];
        }
       
        let newEmployee = new Employee(fullname, depselect, levelselect, imgPath);
        newEmployee.salaryLevel();
        newEmployee.uniqueId();
        let jsonArr = JSON.stringify(employeeArr);
        localStorage.setItem("allEmployees", jsonArr);
    
        newEmployee.render();
    }
    // const containeremp = document.getElementById('cards');
    // containeremp.innerHTML = '';
    // getEmployees();
    // if (employeeArr == null) //localstorage is empty
    // {
    //     employeeArr = [];
    // }
   
   
function getEmployees() {
    let jsonArr = localStorage.getItem("allEmployees");
    employeeArr = JSON.parse(jsonArr);
}
getEmployees();
