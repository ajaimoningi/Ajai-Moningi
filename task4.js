 // Task 1 — Smart Attendance Checker


function checkExamEligibility(attendance, feesPaid) {
    if (attendance >= 75 && feesPaid === true) {
        return "Allowed for Exam";
    } else {
        return "Not Allowed";
    }
}

console.log(checkExamEligibility(80, true));



//Task 2 — Mobile Password Strength Checker

function checkPassword(password) {
    let hasUppercase = false;
    let hasNumber = false;

    for (let char of password) {
        if (char >= 'A' && char <= 'Z') {
            hasUppercase = true;
        }

        if (char >= '0' && char <= '9') {
            hasNumber = true;
        }
    }

    if (password.length >= 8 && hasUppercase && hasNumber) {
        return "Strong Password";
    } else {
        return "Weak Password";
    }
}

console.log(checkPassword("Abc12345"));


//Task 3 — Find Second Largest Number


let arr = [10, 50, 80, 20, 90, 70];

let largest = 0;
let secondLargest = 0;

for (let num of arr) {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
}

console.log(secondLargest);


//Task 4 — Bus Seat Booking System

let seats = Array(10).fill(false);

function bookSeat(seatNumber) {
    if (seats[seatNumber - 1]) {
        console.log("Seat Already Booked");
    } else {
        seats[seatNumber - 1] = true;
        console.log("Seat Booked Successfully");
    }
}

bookSeat(3);
bookSeat(3);


//Task 5 — ATM Cash Withdraw Logic


function withdraw(balance, amount) {
    if (amount > balance) {
        return "Insufficient Balance";
    } else if ((balance - amount) < 500) {
        return "Minimum balance should be 500";
    } else {
        return "Withdraw Successful";
    }
}

console.log(withdraw(10000, 9500));

//Task 6 — Product Search Engine

let products = ["realme", "samsung", "iphone", "vivo", "oneplus", "nokia"];
let search = "iphone";

let found = false;

for (let product of products) {
    if (product.toLowerCase() === search.toLowerCase()) {
        found = true;
        break;
    }
}

if (found) {
    console.log("Product Found");
} else {
    console.log("Product Not Found");
}


//Task 7 — Voting Eligibility System

function checkVoting(age, hasVoterId, citizenship) {
    if (age >= 18) {
        if (hasVoterId && citizenship === "Indian") {
            return "Eligible to Vote";
        } else {
            return "Not Eligible to Vote";
        }
    } else {
        return "Not Eligible to Vote";
    }
}

console.log(checkVoting(25, true, "Indian"));


//Task 8 — Online Food Order Bill


function calculateBill(foodPrice, gst, deliveryCharge, discount) {
    let gstAmount = (foodPrice * gst) / 100;

    let total = foodPrice + gstAmount + deliveryCharge - discount;

    return Total Bill : ₹${total};
}

console.log(calculateBill(400, 5, 30, 0));

//Task 9 — Reverse Word Without reverse()

let word = "virat";
let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

console.log(reversed);

//Task 10 — Mini Instagram Like System


let isLiked = false;
let totalLikes = 0;

function toggleLike() {
    isLiked = !isLiked;

    if (isLiked) {
        totalLikes++;
    } else {
        totalLikes--;
    }

    console.log(isLiked ? "Liked ❤️" : "Like 🤍");
    console.log("Total Likes:", totalLikes);
}

toggleLike();
toggleLike();
//                               //