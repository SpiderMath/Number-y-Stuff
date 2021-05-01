import NumberyStuff from "../Source/Index";

const number = 818;
const res = NumberyStuff.checkColombianNumber(number);

console.log(`Is ${number} a Colombian number?: ${res.selfNumber}\n Results: ${res.results.join(", ")}`);