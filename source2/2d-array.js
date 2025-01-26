// i am not interested in 2d array
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log("Element at (1, 2):", arr[1][2]);  

arr.forEach(row => {
    row.forEach(item => {
        console.log(item);  
    });
});

arr[0][1] = 20;
console.log("After modification:", arr);

