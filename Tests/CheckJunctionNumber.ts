import NumberyStuff from "../Source/Index";

const N = 111;
const val = NumberyStuff.CheckJunctionNumber(N);

console.log(`Is ${N} A Junction Number?: ${val.isJunction} & ${val.values}`);