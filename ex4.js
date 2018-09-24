function Human(name,surname) {
    this.name = name;
    this.surname = surname;
}
Human.prototype.print = function () {
  console.log(this.name,this.surname);
};

// let h = new Human("Vasia","Pupkin");
// h.print();

function Student(name,surname,group) {
    Human.call(this,name,surname);
    this.group = group;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.print = function(){
    Human.prototype.print.call(this);
    console.log(this.group);
};


let s = new Student("Vasiliy","Pupkin",35);
s.print();


