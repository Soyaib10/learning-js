const fetchData = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("data fetched")
        }, 2000);
    })
}

fetchData()
    // executes resolve
    .then((firstThen) => {
        console.log(firstThen);
        return "This is for 2nd then"
    })
    .then((secondThen) => {
        console.log(secondThen);
    })
    // executes reject
    .catch((error) => {
        console.log(error);
    })