//Getter and Setter methods for properties
var rectangle2 = {
    len: 0,
    bre:0,
    set length(x) {this.len = x},
    set breadth(x) {this.bre = x},
    area() { return this.len * this.bre}
};
rectangle2.length = 2;
rectangle2.breadth = 3;
console.log(rectangle2.area());

//These properties could be directly written as below
var rectangle = {
    length : 0,
    breadth: 0,
    area() { return this.length * this.breadth}
};
rectangle.length = 2;
rectangle.breadth = 3;
console.log(rectangle.area());

