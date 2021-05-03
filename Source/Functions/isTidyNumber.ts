export default function isTidyNumber(n: number) {
	const numbers: number[] = String(n)
		.split("")
		.map((val: string) => Number(val))
		.reverse();

	let prev = 10;

	for(let i = 0; i < numbers.length; i++) {
		if(prev < numbers[i]) return false;

		prev = numbers[i];
	}

	return true;
};