class Good {
    constructor(name,price,article){
        this.name = name;
        this.price = price;
        this.article =article;
    }
    show(){
        console.log(this.name,this.price);
    }
    showDetails(){
        console.log("Name:",this.name);
        console.log("Price:",this.price+"UAH");
        console.log("Article:",this.article);
    }

    getPrice(){return this.price;}
    setPrice(price){this.price=price;}


    getName(){return this.name;}
    setName(name){this.name=name;}

}

class Book extends Good{
    constructor(name,price,article,author,year){
        super(name, price, article);
        this.author=author;
        this.year=year;
    }


    showDetails() {
        console.log("----------Book-----------");
        super.showDetails();
        console.log("Author:",this.author);
        console.log("Year:",this.year);
    }

}


