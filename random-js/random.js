function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
  
  Person.prototype.nationality = "English";
  const obj = new Person("mr", "rrid", 34, "brown")
  console.log(obj.nationality)

  // hoiting- takes all top but let and const can not be used due to not initialized
  x = 10
  var x

//   y = 10
//   let y

//   z = 10
//   const z

// array function
const numbers = [1, 2, 3, 4, 5];
// প্রতিটি উপাদানকে দ্বিগুণ করার জন্য অ্যারে ফাংশন ব্যবহার করা হয়েছে
const doubled = numbers.map(number => number * 2);

console.log(doubled); // [2, 4, 6, 8, 10]

// forEach: প্রতিটি উপাদানের জন্য একটি ফাংশন চালায়
numbers.forEach(number => console.log(number));

// filter: একটি নতুন অ্যারে তৈরি করে যা নির্দিষ্ট শর্ত পূরণ করে
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [2, 4]

// reduce: একটি একক মানে অ্যারের উপাদানগুলোকে রিডিউস করে
const sum = numbers.reduce((total, number) => total + number, 0);
console.log(sum); // 15

// find: প্রথম উপাদানটি খুঁজে বের করে যা নির্দিষ্ট শর্ত পূরণ করে
const firstEven = numbers.find(number => number % 2 === 0);
console.log(firstEven); // 2

// some: যদি অ্যারের কোনো উপাদান নির্দিষ্ট শর্ত পূরণ করে তবে true রিটার্ন করে
const hasEven = numbers.some(number => number % 2 === 0);
console.log(hasEven); // true

// every: যদি অ্যারের সব উপাদান নির্দিষ্ট শর্ত পূরণ করে তবে true রিটার্ন করে
const allEven = numbers.every(number => number % 2 === 0);
console.log(allEven); // false

// some porblems
const sentence = "The quick brown fox jumps over the lazy dog.";

// how many times quick appears in the sentence
const word = "quick";
const count = sentence.toLowerCase().split(" ").filter(s => s === word.toLowerCase()).length;

// function closure- Closure হলো এমন একটি ফাংশন, যা তার নিজের স্কোপের বাইরে থাকা ভ্যারিয়েবলগুলোর অ্যাক্সেস রাখে, এমনকি যখন মূল ফাংশন শেষ হয়ে যায় তখনও।
function outerFunction() {
    let count = 0;  // এই ভ্যারিয়েবলটি inner function-এর জন্য "lexical scope"
    return function innerFunction() {
        count++;  // count পরিবর্তন করা সম্ভব
        console.log(count);
    };
}

const counter = outerFunction(); // outerFunction এক্সিকিউট হয়ে বন্ধ হয়ে গেছে
counter(); // 1
counter(); // 2
counter(); // 3

