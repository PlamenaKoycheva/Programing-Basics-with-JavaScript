function depositCalculator(depositSum, depositPeriod, annualInterestPorcent) {
let annualInterestDecimal = annualInterestPorcent / 100;

let sum = depositSum + depositPeriod * ((depositSum * annualInterestDecimal) / 12);
console.log(sum);
}
depositCalculator(200, 3, 5.7)