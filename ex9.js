class Good {
    constructor(name,price,article){
        this._name = name;
        this._price = price;
        this._article = article;
    }
    show(){
        console.log(this.name,this.price);
    }
    showDetails(){
        console.log("Name:",this.name);
        console.log("Price:",this.price+"UAH");
        console.log("Article:",this.article);
    }


    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }

    get price() {
        return this._price+"uah";
    }



    get article() {
        return this._article;
    }

    set article(value) {
        this._article = value;
    }

}


let g = new Good("Vasia",9999,"202vas");

console.log(g.name);
console.log(g.price);