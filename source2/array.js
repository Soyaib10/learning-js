// 1. Array Initialization
let arr = [1, 2, 3, 4, 5];

// 2. push() - Add a new element to the end of the array
arr.push(6); // [1, 2, 3, 4, 5, 6]
console.log("After push: ", arr);

// 3. pop() - Remove the last element from the array
arr.pop(); // [1, 2, 3, 4, 5]
console.log("After pop: ", arr);

// 4. shift() - Remove the first element from the array
arr.shift(); // [2, 3, 4, 5]
console.log("After shift: ", arr);

// 5. unshift() - Add a new element to the beginning of the array
arr.unshift(1); // [1, 2, 3, 4, 5]
console.log("After unshift: ", arr);

// 6. splice() - Add or remove elements at a specific index
arr.splice(2, 1, 10); // [1, 2, 10, 4, 5]
console.log("After splice: ", arr);

// 7. slice() - Copy a portion of the array (for repetition)
let newArr = arr.slice(1, 4); // [2, 10, 4]
console.log("After slice: ", newArr);

// 8. forEach() - Execute a function for each element
arr.forEach((item, index) => {
    console.log(`Item at index ${index}: ${item}`);
});

// 9. map() - Transform each element
let doubledArr = arr.map(item => item * 2); // [2, 4, 20, 8, 10]
console.log("After map: ", doubledArr);

// 10. filter() - Filter elements based on a condition
let evenArr = arr.filter(item => item % 2 === 0); // [2, 10, 4]
console.log("After filter: ", evenArr);

// 11. reduce() - Combine all elements to create a single value
let sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 22
console.log("After reduce: ", sum);

// 12. find() - Find the first element that satisfies the condition
let found = arr.find(item => item === 10); // 10
console.log("After find: ", found);

// 13. includes() - Check if a specific element exists in the array
let hasThree = arr.includes(3); // true
console.log("After includes: ", hasThree);

// 14. indexOf() - Find the index of the first occurrence of an element
let index = arr.indexOf(4); // 3
console.log("After indexOf: ", index);

// 15. sort() - Sort the array
arr.sort((a, b) => a - b); // [1, 2, 4, 5, 10]
console.log("After sort: ", arr);

// 16. reverse() - Reverse the array
arr.reverse(); // [10, 5, 4, 2, 1]
console.log("After reverse: ", arr);

// 17. concat() - Combine two arrays
let arr2 = [7, 8, 9];
let combinedArr = arr.concat(arr2); // [10, 5, 4, 2, 1, 7, 8, 9]
console.log("After concat: ", combinedArr);

// 18. join() - Convert all elements to a string
let joined = arr.join(", "); // "10, 5, 4, 2, 1"
console.log("After join: ", joined);

// 19. every() - Check if all elements satisfy the condition
let allEven = arr.every(item => item % 2 === 0); // false
console.log("After every: ", allEven);

// 20. some() - Check if at least one element satisfies the condition
let someEven = arr.some(item => item % 2 === 0); // true
console.log("After some: ", someEven);

// 21. fill() - Fill the array with a specific value
arr.fill(0); // [0, 0, 0, 0, 0]
console.log("After fill: ", arr);

// 22. flat() - Flatten a multi-dimensional array
let multiDimArr = [1, [2, 3], [4, [5, 6]]];
let flatArr = multiDimArr.flat(2); // [1, 2, 3, 4, 5, 6]
console.log("After flat: ", flatArr);

// 23. from() - Create an array from another object
let str = "hello";
let arrFromStr = Array.from(str); // ['h', 'e', 'l', 'l', 'o']
console.log("After from: ", arrFromStr);

// 24. findIndex() - Find the index of the first element that satisfies the condition
let indexFound = arr.findIndex(item => item === 4); // 2
console.log("After findIndex: ", indexFound);

// 25. copyWithin() - Copy a portion of the array to another place within the same array
arr.copyWithin(2, 0, 2); // [0, 0, 0, 0, 0]
console.log("After copyWithin: ", arr);
