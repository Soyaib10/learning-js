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

// iteration
const letters = ["a", "b", "c", "d"]
var ans = ""
for (const i of letters) {
    ans += i + " "
}
console.log(ans)

// set 
const set = new Set(["c", "k"])
set.add("2")
console.log(set)

set.delete("l")
console.log(set)

// map
const map = new Map()
map.set("hello", 1)
map.set("hello", 2)
map.set("rello", 3)
console.log(map.get("rello"))
console.log(map)

for (const [key, value] of map) {
    console.log(key, value)
}