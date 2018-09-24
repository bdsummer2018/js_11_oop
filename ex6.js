class Human {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    print(){
        console.log(this.name,this.surname);
    }
}

let h = new Human("Vasiliy","Pupkin");
h.print();