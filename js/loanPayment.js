export function calculateLoanPayment(principal, rate, time) {
    const r = rate / 12 / 100;
    const n = time * 12;
    return (principal * r * Math.pow((1 + r), n)) / (Math.pow((1 + r), n) - 1);
}