var obj = {
    ololo() {
        return "ololo"
    }
};

function createCate() {
    return obj;
}

function Cat(name) {
    this.name = name;

    return obj;
}

Cat.prototype.sayName = function () {
    return this.name;
};

var someCat1 = new Cat("cat1");
var someCat2 = new Cat("cat2");


console.log(someCat1 === obj); // true [!]
console.log(someCat2 === obj); // true [!]
console.log(someCat1 === someCat2); // true


console.log(createCate() === new Cat("cat3")); // true

console.log(someCat1.ololo()); // => "ololo"
console.log(someCat2.ololo()); // => "ololo"

/// singleton

function Cat(name) {
    this.name = name;

    if (! Cat.inst) {
        Cat.inst = this;
    }

    return Cat.inst;
}

Cat.prototype.sayName = function () {
    return this.name;
};


var cat1 = new Cat("1");
var cat2 = new Cat("2");
var cat3 = new Cat("3");

console.log(cat1 === cat2); // true
console.log(cat2 === cat3); // true
console.log(cat3 === cat1); // true


console.log(cat1.sayName()); // 1
console.log(cat2.sayName()); // 1
console.log(cat3.sayName()); // 1


/// inheritance


function Animal(type) {
    this.getType = function () {
        return type;
    }
}


function Cat(name) {
    this.sayName = function () {
        return name;
    }
}

var cat = new Cat("cat1");

///////////////////////

console.log(cat instanceof Cat); // true
console.log(cat instanceof Animal); // true | false

cat.sayName(); // cat1;
cat.getType(); // "cat" | Runtime Error

// TODO IMPLEMENTS