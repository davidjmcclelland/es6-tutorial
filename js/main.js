"use strict";

let calculateMonthlyPayment = function (principal, years, rate) {
    // function level let needs to be initialized in the function not in the if statement
    let monthlyRate = 0;
    if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    return monthlyPayment;
};

document.getElementById('calcBtn').addEventListener('click', function () {
    // these vars were changed to let without affecting execution
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    let monthlyPayment = calculateMonthlyPayment(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
});

// a much clearer example:

var submit = function () {
    var x = "foo";
    let y;
    if (x === "foo") {
        // let y = "bar"; // undefined because let scope is inside brackets
        y = "bar";
    }
    console.log(x);
    console.log(y);
};

submit();


// in for loops:

let shoppingCart = [{id: 0, product: "DVD", price: 21.99},
    {id: 1, product: "CD", price: 11.99}];

for (let i = 0; i < shoppingCart.length; i++) {
    let item = shoppingCart[i];
    console.log("Item: " + item.product + " - Price: " + item.price);
}

// arrow expression body

let evens = [2, 4, 6, 8, 10];
let odds = evens.map(v => v + 1);
let nums = evens.map((v, i) => v + i);
console.log(odds);
console.log(nums);