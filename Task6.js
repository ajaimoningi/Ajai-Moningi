//JAVASCRIPT Task-6


// 1. Employee Bonus Filter
// Concept:
// filter(), map()
let employees = [
    { name: "john", salary: 200000 },
    { name: "rahul", salary: 500000 },
    { name: "siva", salary: 700000 },
];
let emp = employees.filter((e) => {
    return e.salary > 300000
});
let bonesEmp = emp.map((e) => {
    console.log("Congrats", e.name);
});


// 2. Shopping Cart Total
// Concept:
// reduce()
let cart = [1200, 3400, 500, 999]
let total = cart.reduce((acc, c, i, t) => {
    return acc + c
}, 0)
console.log(total);


// 3. Login Username Formatter
// Concept:
// slice(), toUpperCase(), toLowerCase()
let user = "ajai"
let first = user.slice(0, 1).toUpperCase();
let remain = user.slice(1).toLowerCase();
let fullName = first + remain;
console.log(fullName);


// 4. OTP Checker
// Concept:
// includes()
let otp = "900052"
if (otp.includes("0")) {
    console.log("Valid OTP");
} else {
    console.log("Invalid OTP");
}


// 5. Food Delivery App
// Concept:
// push(), pop()
let orders = ["burger", "pizza"]
orders.push("shawarma") //adds last
console.log(orders);
orders.pop()    //removes last
console.log(orders);


// 6. Attendance Checker
// Concept:
// every()
let marks = [50, 45, 69, 75, 98, 85];
let attendence = marks.every((m) => m >= 35);
console.log(attendence);


// 7. Find VIP Customer
// Concept:
// find()
let customer = [
    { name: "arun", purchase: 5000 },
    { name: "ajai", purchase: 15000 },
    { name: "surya", purchase: 25000 }
]
let VIP_cust = customer.find(c => c.purchase > 10000);
console.log(VIP_cust.name);


// 8. Reverse Chat Message
// Concept:
// split(), reverse(), join()
let msg = "hello";
let reversed = msg.split("").reverse().join("");
console.log(reversed);


// 9. Concept:
// indecof()
// Find position of "mobile".
let products = ["tv", "laptop", "mobile", "watch"]
console.log("Index :", products.indexOf("mobile"));


// 10. Student Rank Sort
// Concept:
// sort()
let s_marks = [99, 45, 12, 67, 89, 1, 25, 78];
let sorted = s_marks.sort((a, b) => a - b);
console.log(sorted);


// 11. Movie Search
// Concept:
// some()
let movies = ["RRR", "KFG", "junior"]
let result = movies.some(m => m === "KGF");
console.log(result);


// 12. Hide Mobile Number
// Concept:
// slice()
let num = "7893584038"
let last_digit = num.slice(-8);
console.log(last_digit);


// 13. Online Exam Result
// Concept:
// ternary operator
let s_mark = 50
let grade = s_mark >= 35 ? "Pass" : "Fail";
console.log(grade);


// 14. Cab Booking Price
// Concept:
// function, return
function cab(baseFare, extraKm) {
    let totalFare = baseFare + extraKm;
    return totalFare;
}
let total1 = cab(100, 50)
console.log(total1);


// 15. Instagram Hashtag Generator
// Concept:
// replaceAll()
let tag = "web developer"
let new_tag = tag.replaceAll(" ", "_")
console.log(new_tag);


// 16. Netflix Kids Content
// Concept:
// filter()
let movies_n = [
    { name: "A", age: 13 },
    { name: "B", age: 18 },
    { name: "C", age: 10 }
]
let kids = movies_n.filter(m => m.age < 18);
kids.forEach(m => console.log(m.name));


// 17. E-commerce Product Search
// Concept:
// startsWith()
let product = "iphone"
console.log(product.startsWith("i"));


// 18. WhatsApp Group Names
// Concept:
// forEach()
let groups = ["office", "friends", "family"];
groups.forEach((c, i) => {
    console.log(`${i + 1} ${c}`)
});


// 19. Salary Highest Finder
// Concept:
// reduce()
let salary = [20000,50000,80000,10000];
let highest = salary.reduce((low, high) => {
    return low > high ? low : high
});
console.log("Highest Salary:", highest);


// 20. Password Security Checker
// Concept:
// length, includes()
let pswd = "ajai@123"
if(pswd.length >= 8 && pswd.includes("@")){
    console.log("Strong Password");
} else {
    console.log("Weak Password");
}
