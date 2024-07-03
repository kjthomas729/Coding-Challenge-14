import { calculateInterest } from './interestRate.js';
import { calculateLoanPayment } from './loanPayment.js';
import { calculateInvestmentReturn } from './investmentReturn.js';

document.getElementById('calculate-interest').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('interest-principal').value);
    const rate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const time = parseFloat(document.getElementById('interest-time').value);
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('interest-result').innerText = 'Please enter valid numbers.';
        return;
    }
    const interest = calculateInterest(principal, rate, time);
    document.getElementById('interest-result').innerText = `Interest: $${interest.toFixed(2)}`;
});

document.getElementById('calculate-loan').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('loan-principal').value);
    const rate = parseFloat(document.getElementById('loan-rate').value);
    const time = parseFloat(document.getElementById('loan-time').value);
    if (isNaN(principal) || isNaN(rate) || isNaN(time)) {
        document.getElementById('loan-result').innerText = 'Please enter valid numbers.';
        return;
    }
    const loanPayment = calculateLoanPayment(principal, rate, time);
    document.getElementById('loan-result').innerText = `Monthly Payment: $${loanPayment.toFixed(2)}`;
});

document.getElementById('calculate-investment').addEventListener('click', () => {
    const principal = parseFloat(document.getElementById('investment-principal').value);
    const rate = parseFloat(document.getElementById('investment-rate').value) / 100;
    const time = parseFloat(document.getElementById('investment-time').value);
    const compoundingPeriods = parseFloat(document.getElementById('investment-compounding').value);
    if (isNaN(principal) || isNaN(rate) || isNaN(time) || isNaN(compoundingPeriods)) {
        document.getElementById('investment-result').innerText = 'Please enter valid numbers.';
        return;
    }
    const investmentReturn = calculateInvestmentReturn(principal, rate, time, compoundingPeriods);
    document.getElementById('investment-result').innerText = `Future Value: $${investmentReturn.toFixed(2)}`;
});