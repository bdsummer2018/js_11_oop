function Human(name,age){
    this.name = name;
    this.age = age;
    this.print = function () {
        console.log(this.name,this.age);
    }
}

function Student(name,age,group){
    this.group = group;
    this.name = name;
    this.age=age;

}
Student.prototype = new Human();


let s = new Student("Vasia",30,"sdfgdf");

s.print();


