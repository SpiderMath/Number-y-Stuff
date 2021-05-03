export default function isDisariumNumber(n: number) {
	const digits = String(n).split("").map((value: string) => Number(value));

	let sum = 0;

	for(let i = 0; i < digits.length; i++) {
		sum += Math.pow(
			digits[i],
			i + 1,
		);
	}

	return sum === n;
};