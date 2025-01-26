// variables
var a = 1
console.log(a)

a++;
console.log(a)

var a = 3;
console.log(a)

// let
let b = 4
b = 5

{
    let b = 20
    console.log(b)
}

console.log(b)

//object
const person = {
    firstName: "rrid", 
    lastName: "rishan",
    add: "dhaka", 
    quantity: 11,
    name : function() {
        return this.firstName + " " + this.lastName
    }
}
console.log(person)
console.log(person.name())

let text = ""
for (let x in person) {
  text += person[x] + " ";
}
console.log(text)

const arr = Object.values(person)
console.log(arr)

// stringify
const arr2 = JSON.stringify(person)
console.log(arr2)

// constructor function
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

let ZZ =
`The quick
brown fox
jumps over
the lazy dog`; // template string
console.log(ZZ);