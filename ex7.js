class Human {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    print(){
        console.log(this.name,this.surname);
    }
}

class Student extends Human{
    constructor(name,surname,group){
        super(name,surname);
        this.group=group;
    }
    print(){
        super.print();
        console.log(this.group);
    }
}

let st = new Student("Vasiliy","Pupkin","x");
st.print();