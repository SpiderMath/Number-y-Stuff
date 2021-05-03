export default function isGapfulNumber(n: number) {
	const strNumberArr = String(n).split("");
	if(strNumberArr.length < 3) throw new Error("The number has to be atleast of 3 digits to be a gapful number");

	const newNumber = Number(strNumberArr[0] + strNumberArr[strNumberArr.length - 1]);

	return n % newNumber === 0;
}