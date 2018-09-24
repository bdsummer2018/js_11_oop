function f() {
    console.log(this);
}

// f.call("hello");
//f.apply("hello");



function f1(x) {
    console.log(this+x);
}

f1.call(5,8);
f1.apply(5,[8]);