// call && apply && bind && scopes (global or window)

function someFunction(a, b) {
    console.log(a, b, this.sayName());

    return 'someFunction is called'
}

someFunction.length; // 2

// ===

const someFunction2 = new Function('a', 'b', `
    console.log(a, b, this.sayName());

    return 'someFunction is called'
`);

// how to call function in js

// 1) use direct call

someFunction(); // undefined, undefined, (window | global)


// 2) apply

someFunction.apply(window, []); // undefined, undefined, (window | global)

function sum(a, b, ...tail) {

    console.log(tail);

    return a + b;
}

var result = sum.apply(undefined, [1]); // NaN
var result2 = sum.apply(undefined, [1, 2, 3, 2]); // 3

function sumMany(...xs) {
    return xs.reduce((acc, x) => acc + x, 0);
}

const myArray = [
    1, 2, 3, 4, 5
];

sumMany.apply(undefined, myArray);

/// ===

sumMany(...myArray);


/// ... spread !!!
Math.min(...myArray);

/// Function::call it's like apply but accept args as list of args rather than array

// passing context

const dog = {
    sayName: () => 'dog',
};

someFunction.apply(dog, []); // undefined, undefined, (window | global)

const myArray = [
    1, 2, 3, 4, 5
];

Math.min.apply(Math, myArray);

/// ===

Math.min(...myArray);


//// bind

// bind return new function !!!!

const boundSomeFunction = someFunction.bind(dog, 1);


function sum(a, b) {
    console.log(this);

    return a + b + this.value;
}


var sum2 = sum.bind(undefined, 1); // this = window | global

sum2(3); // 1 + 3;

sum(2); // nan => a = 2; b = undefined; 2 + undefined = NaN

boundSomeFunction(1, 2);

/// arguments pseudo array

function sumMany() {

    const realArray = [...arguments];

    var b = 0;

    for (let i = 0; i < realArray.length; i++) {
        b += realArray[i];
    }

    return b;
}


sumMany(1, 2, 3, 4, 5, 5);

function sum(a, b) {
    console.log(arguments.length); // 8

    return a + b;
}



var sum3 = sum.bind(undefined, 1, 2, 3, 1, 2); // this = window | global

console.log(sum3(1, 2, 3)); // 3


///


function sum(a, b, ...other) {
    console.log(arguments.length); // 8
    console.log(other.length); // 6

    return a + b;
}



var sum3 = sum.bind(undefined, 1, 2, 3, 1, 2); // this = window | global

console.log(sum3(1, 2, 3)); //


//// how it's work ?!
function sum(...other) {
    return other.reduce((acc, v) => acc + v, 0);
}

var sum3 = sum.bind(undefined, 1, 2, 3, 1, 2); // this = window | global

console.log(sum3(1, 2, 3)); //
////


/// call