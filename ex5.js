Array.prototype.smm = function () {
    return this.reduce((prev,cur)=>prev+cur,0);
};

let x =[1,2,3];
console.log(x.smm());

