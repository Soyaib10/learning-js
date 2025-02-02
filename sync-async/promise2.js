function task1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task 1")
        }, 1000);
    })
}

function task2() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 2 Done"), 2000);
    });
}

function task3() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Task 3 Done"), 1500);
    });
}

Promise.all([task1(), task2(), task3()])
    .then((results) => {
        console.log("all tasks done", results);
    })
    .catch((error) => {
        console.log("error: ", error);
    })