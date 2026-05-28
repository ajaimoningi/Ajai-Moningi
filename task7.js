// Real-Time JavaScript Tasks (API + Async + Array Methods)
// 1. E-Commerce Product Filter
// Using the same API:
// https://fakestoreapi.com/products/
// Task:
// Fetch all products
// Filter products whose:
// price > 100
// category = "electronics"
// Print:
// title
// price
// Expected Concept:
// fetch()
// filter()
// forEach()
fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(products => {
        let filteredProducts = products.filter(product => product.price > 100 && product.category === "electronics");
        filteredProducts.forEach(product => {
            console.log("Title:", product.title);
            console.log("Price:", product.price);
        });
    })
    .catch(error => console.error("Error fetching products:", error));
    
//  2. Online Shopping Cart Total
// Task:
// Create an array:
// let cart = [
//   {product:"Shoes", price:2000, qty:2},
//   {product:"Watch", price:1500, qty:1},
//   {product:"Bag", price:1000, qty:3}
// ]
// Calculate:
// Total bill amount
// Expected Output:
// 8500
// Use:
// reduce()
let cart = [
    { product: "Shoes", price: 2000, qty: 2 },
    { product: "Watch", price: 1500, qty: 1 },
    { product: "Bag", price: 1000, qty: 3 }
];
let totalBill = cart.reduce((total, item) => total + (item.price * item.qty), 0);
console.log(totalBill); // 8500 

// 3. Employee Salary Dashboard
// Task:
// Filter employees whose salary is greater than 40000.
// let employees = [
//   {name:"John", salary:25000},
//   {name:"Sam", salary:50000},
//   {name:"Ravi", salary:45000},
//   {name:"Kumar", salary:30000}
// ]
// Output:
// Sam
// Ravi
// Use:
// filter()
// map()
let employees = [
    { name: "John", salary: 25000 },
    { name: "Sam", salary: 50000 },
    { name: "Ravi", salary: 45000 },
    { name: "Kumar", salary: 30000 }
];
let highEarners = employees.filter(employee => employee.salary > 40000).map(employee => employee.name);
highEarners.forEach(name => console.log(name)); // Sam Ravi

// 4. Food Delivery App
// Task:
// Find first restaurant rating greater than 4.5
// let hotels = [
//   {hotel:"A2B", rating:4.1},
//   {hotel:"KFC", rating:4.7},
//   {hotel:"Dominos", rating:4.3}
// ]
// Use:
// find()
let hotels = [
    { hotel: "A2B", rating: 4.1 },
    { hotel: "KFC", rating: 4.7 },
    { hotel: "Dominos", rating: 4.3 }
];
let topRatedHotel = hotels.find(hotel => hotel.rating > 4.5);
console.log(topRatedHotel.hotel); // KFC


// 5. Student Pass/Fail System
// Task:
// Check all students passed or not.
// let marks = [45,67,89,90,34]
// Condition:
// pass mark = 35
// Use:
// every()
let marks = [45, 67, 89, 90, 34];
let allPassed = marks.every(mark => mark >= 35);
console.log(allPassed); // false


// 6. OTP Verification System
// Task:
// Check whether entered OTP exists.
// let otpList = [1234,4567,7890,9876]
// Use:
// includes()
let otpList = [1234, 4567, 7890, 9876];
let enteredOtp = 4567;
if (otpList.includes(enteredOtp)) {
    console.log("OTP Verified");
}


// 7. Movie Booking Timer
// Task:
// Create countdown from 10 to 0 using:
// setInterval()
// clearInterval()
// Expected Output:
// 10
// 9
// 8
// ...
// 0
// Booking Closed
let countdown = 10;
let timer = setInterval(() => {
    console.log(countdown);
    countdown--;
    if (countdown < 0) {
        clearInterval(timer);
        console.log("Booking Closed");
    }
}, 1000);


// 8. Instagram Like Counter
// Task:
// Every second increase likes count.
// Likes : 1
// Likes : 2
// Likes : 3
// Stop after 10 likes.
// Use:
// setInterval()
// clearInterval()
let likes = 0;
let likeTimer = setInterval(() => {
    likes++;
    console.log("Likes:", likes);
    if (likes >= 10) {
        clearInterval(likeTimer);
    }
}, 1000);


// 9. Login Authentication
// Task:
// Check:
// username
// password
// let username = "admin"
// let password = "12345"
// Condition:
// both correct → Login Success
// otherwise → Invalid Credentials
// Use:
// if else
// logical operator
let username = "admin";
let password = "12345";
if (username === "admin" && password === "12345") {
    console.log("Login Success");
} else {
    console.log("Invalid Credentials");
}


// 10. Weather App Simulation
// Task:
// Create Promise manually.
// Condition:
// If internet = true → resolve("Weather Data")
// else reject("No Internet")
// Use:
// Promise
// resolve
// reject
// then
// catch
function fetchWeatherData(internet) {
    return new Promise((resolve, reject) => {
        if (internet) {
            resolve("Weather Data");
        } else {
            reject("No Internet");
        }
    });
}
fetchWeatherData(true)
    .then(data => console.log(data)) // Weather Data
    .catch(error => console.error(error));
fetchWeatherData(false)
    .then(data => console.log(data))
    .catch(error => console.error(error)); // No Internet

// Mini Project Level Tasks
// 11. Amazon Product Search
// Task:
// Search products containing word "shirt"
// Use:
// filter()
// includes()
let products = [
    { name: "T-shirt", price: 500 },
    { name: "Shirt", price: 1000 },
    { name: "Jeans", price: 1500 },
    { name: "Shirt Dress", price: 2000 }
];
let shirtProducts = products.filter(product => product.name.toLowerCase().includes("shirt"));
shirtProducts.forEach(product => console.log(product.name)); // Shirt Shirt Dress


// 12. YouTube Video Duration
// Task:
// Calculate total watch time.
// let videos = [10,20,30,40]
// Use:
// reduce()
let videos = [10, 20, 30, 40];
let totalWatchTime = videos.reduce((total, duration) => total + duration, 0);
console.log("Total Watch Time:", totalWatchTime); // Total Watch Time: 100


// 13. Swiggy Order Status
// Task:
// Use switch statement.
// Placed
// Preparing
// Out for Delivery
// Delivered
// Print suitable message.
let orderStatus = "Preparing";
switch (orderStatus) {
    case "Placed":
        console.log("Your order has been placed.");
        break;
    case "Preparing":
        console.log("Your order is being prepared.");
        break;
    case "Out for Delivery":
        console.log("Your order is out for delivery.");
        break;
    case "Delivered":
        console.log("Your order has been delivered.");
        break;
    default:
        console.log("Unknown order status.");
}

// 14. WhatsApp Chat Analyzer
// Task:
// Count total messages.
// let chats = ["hi","hello","where","ok","bye"]
// Use:
// length
// loop
let chats = ["hi", "hello", "where", "ok", "bye"];
console.log("Total Messages:", chats.length);


// 15. Netflix Age Restriction
// Task:
// If age >= 18:
// show movie
// Else:
// access denied
// Use:
// ternary operator
// age >= 18 ? "watch movie" : "access denied"
// Advanced Real-Time Tasks
let age = 20;
let accessMessage = age >= 18 ? "Watch Movie" : "Access Denied";
console.log(accessMessage); // Watch Movie


// 16. Flipkart Product Sorting
// Task:
// Sort products by price low to high.
// let prices = [1200,450,9999,2500,700]
// Use:
// sort((a,b)=>a-b)
let prices = [1200, 450, 9999, 2500, 700];
prices.sort((a, b) => a - b);
console.log(prices); // [450, 700, 1200, 2500, 9999]


// 17. Employee Attendance
// Task:
// Convert:
// ["present","absent","present"]
// Into object count:
// {
//  present:2,
//  absent:1
// }
// Use:
// reduce()
let attendance = ["present", "absent", "present"];
let attendanceCount = attendance.reduce((count, status) => {
    count[status] = (count[status] || 0) + 1;
    return count;
}, {});
console.log(attendanceCount); // { present: 2, absent: 1 }


// 18. Banking System
// Task:
// Create:
// deposit()
// withdraw()
// checkBalance()
// Using functions.
let balance = 0;
function deposit(amount) {
    balance += amount;
    console.log("Deposited:", amount);
}
function withdraw(amount) {
    if (amount <= balance) {
        balance -= amount;
        console.log("Withdrawn:", amount);
    } else {
        console.log("Insufficient funds");
    }
}
function checkBalance() {
    console.log("Current Balance:", balance);
}
deposit(1000); // Deposited: 1000
withdraw(500); // Withdrawn: 500
checkBalance(); // Current Balance: 500


// 19. Zomato Rating Checker
// Task:
// Check any hotel rating below 3.
// Use:
// some()
let hotelRatings = [4.5, 3.8, 2.9, 4.0];
let hasLowRating = hotelRatings.some(rating => rating < 3);
console.log("Any hotel with rating below 3:", hasLowRating); // Any hotel with rating below 3: true

// 20. Real API Product Table
// Task:
// Fetch API and print:
// title
// price
// image
// Inside HTML cards dynamically.
// Concepts:
// fetch()
// DOM
// map()
// template literal
fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(products => {
        // Process and display products
    });


// Challenge Task 🔥
// 21. Build Small E-Commerce Logic
// Features:
// Fetch products
// Filter by category
// Sort by price
// Search product
// Add to cart
// Total calculation
// Concepts Covered:
// fetch
// async
// array methods
// DOM
// events
// functions
// objects
// loops
// higher order functions
fetch("https://fakestoreapi.com/products/")
    .then(response => response.json())
    .then(data => {
        products = data;
        // Process and display products
    });