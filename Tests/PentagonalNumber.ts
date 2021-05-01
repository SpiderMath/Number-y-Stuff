import NumberyStuff from "../Source/Index";

const check1 = 1;
const check2 = 9;

console.log(`${check1}: ${NumberyStuff.PentagonalNumbers.checkPentagonal(check1)}`);
console.log(`${check2}: ${NumberyStuff.PentagonalNumbers.checkPentagonal(check2)}`);

const NthTerm = 10;

console.log(`${NthTerm}th Term: ${NumberyStuff.PentagonalNumbers.NthTerm(NthTerm)}`);
console.log(`First ${NthTerm} Pentagonal Numbers: ${NumberyStuff.PentagonalNumbers.List(NthTerm).join(", ")}`);