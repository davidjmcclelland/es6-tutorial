import * as mortgage from './mortgage';

document.getElementById('calcBtn').addEventListener('click', function () {
    // these vars were changed to let without affecting execution
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    //let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
    //4 - arrow functions adds the amortization
    let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);
    document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    // for now pipe amortization to console
    // this is known as an expression body
    amortization.forEach(month => console.log(month));
});