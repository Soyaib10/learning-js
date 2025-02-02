// callback function- the one who take another function as argument the fucntion is in the argument is callback function. The one who called is higherOrder function. একটি callback function হলো এমন একটি ফাংশন যেটি অন্য একটি ফাংশনের আর্গুমেন্ট হিসেবে পাস করা হয় এবং নির্দিষ্ট কোনো সময় পরে execute হয়। এটি asynchronous programming-এ ব্যাপকভাবে ব্যবহৃত হয়, যেমন handling API calls, event listeners, timers, এবং I/O operations।


// higher order function
function fetchData(callback) {
    console.log("fetching data")
    setTimeout(() => {
        let data = {
            id: 1,
            name: "zihad"
        }
    }, 2000);
}

// callback function
function displayData(product) {
    console.log("product: ", product);
}

// sending displayData as callback function
fetchData(displayData)

// better example
function calculate(a, b, callback1, callback2) {
    const result = callback1(a, b)
    callback2(result)
}

function callback1(a, b) {
    return a + b
}

function callback2(result) {
    console.log("result: ", result);
}
calculate(4, 5, callback1, callback2)