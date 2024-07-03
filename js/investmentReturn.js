export function calculateInvestmentReturn(principal, rate, time, compoundingPeriods) {
    return principal * Math.pow((1 + rate / compoundingPeriods), (compoundingPeriods * time));
}