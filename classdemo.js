var employee = /** @class */ (function () {
    function employee() {
    }
    // method
    employee.prototype.display = function () {
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.deptno);
    };
    return employee;
}());
//creating obj
var em1 = new employee();
// let em2 = new employee();
// let em3 = new employee();
em1.eid = 101;
em1.ename = "sim"; //just assign values
em1.deptno = 5;
em1.display();
