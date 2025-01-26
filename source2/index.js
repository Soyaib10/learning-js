// alert("soyaib") // popup from top
// document.write("<h1>document.write</h1>") //write in html
console.log("console.log") // 

console.log(typeof("hello"))

// variable
var num = "20"
num = parseFloat(num)
console.log(typeof(num))

num = 20.111111
num = num.toFixed(2)
console.log(num)

// string concat
var a = "soyaib"
var b = "zihad"
console.log(a + b)

// string char at
var text = "bangla"
text = text.toUpperCase()
text = text.concat(a)
console.log(text)
console.log(text.slice(0, 3))

// switch
// Importing the module
const readline = require("readline-sync")
let digit = Number(readline.question())
switch (digit) {
    case 0:
        console.log("zero")
        break
    case 1:
        console.log("one")
        break
    default:
        console.log("none")
}

// for loop
for (var i = 1; i < 10; i++) {
    console.log(i)
}

// function expression
function avc (a, b) {
    return a * b
}



