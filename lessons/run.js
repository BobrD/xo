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
