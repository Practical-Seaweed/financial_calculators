"use strict"
console.log("testing console?... yaaWOOOOOOO it works!! :D")


function calculateMortgage() {
    let loanAmount = document.getElementById("loanAmount").value;
    let interestRate = document.getElementById("interestRate").value / 100;
    let loanTerm = document.getElementById("loanTerm").value;

    let monthlyInterestRate = interestRate / 12;
    let numberOfPayments = loanTerm * 12;

    let monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
    let totalPayment = monthlyPayment * numberOfPayments;

    document.getElementById("result").innerHTML = "Monthly Payment: $" + monthlyPayment.toFixed(2) + "<br>Total Payment: $" + totalPayment.toFixed(2);
}

