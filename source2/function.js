// function expression
function avc (a, b) {
    return a * b
}

console.log(avc(3, 4))

// arrow function
const sub = (a, b) => a - b
console.log(sub(29, 3))

// parameter passing

// pass by value- if any value is passed then it is passed by value
function add(x) {
    x++;
    console.log(x)
}

let x = 5
add(x)
console.log(x)

// pass by reference- any obj or array autometically passed by reference
function passByRef(val, arr) {
    arr.push(4)
    arr.push(val)
}

let numbers = [1, 3, 4]
let val = 5
passByRef(val, numbers)
console.log(numbers)

// rest parameters
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log(sum(1, 2, 3));  // Output: 6
console.log(sum(5, 10));    // Output: 15


// change variable value through function- just return it
function addee(changed) {
    changed++;
    return changed;
}

let changed = 10
changed = addee(changed)
console.log(changed)