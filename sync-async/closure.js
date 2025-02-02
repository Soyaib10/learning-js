console.log("Start");

setTimeout(() => {
    console.log("Timeout");
}, 0);

fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(() => console.log("Fetch Done"));

console.log("End");
