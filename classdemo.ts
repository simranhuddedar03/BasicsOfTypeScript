class employee 
{
    eid: number ; //class variables 
    ename : string ; //class variables 
    deptno : number ; //class variables 



    // method
    display() : void 
    {
        console.log(this.eid); // use this keyword in order to acess these class variables 
        console.log(this.ename);
        console.log(this.deptno) ;
    }
}


//creating obj
let em1 = new employee();
// let em2 = new employee();
// let em3 = new employee();
em1.eid = 101 ;
em1.ename ="sim"; //just assign values
em1.deptno = 5 ;
em1.display();

