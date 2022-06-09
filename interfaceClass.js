var c1 = /** @class */ (function () {
    function c1() {
    }
    c1.prototype.sum = function () {
        return (this.a + this.b);
    };
    c1.prototype.sub = function () {
        return (this.x - this.y);
    };
    return c1;
}());
//creating object 
var c = new c1();
c.a = 100,
    c.b = 200;
c.x = 300;
c.y = 400;
console.log(c.sum());
console.log(c.sub());
