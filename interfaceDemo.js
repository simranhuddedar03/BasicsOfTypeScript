var emp = {
    empName: "simsim",
    empId: 50,
    empSal: 50000,
    //implement arow fun here
    disData: function () {
        console.log(this.empName + " " + this.empId + " " + this.empSal);
    }
};
console.log(emp.empName);
console.log(emp.empId);
console.log(emp.empSal);
//how to invoke arrow function which is inside 'emp' variable dabba
emp.disData();
