export default function isSelfDividingNumber(n: number) {
	const digits: number[] = String(n)
		.split("")
		.map((val: string) => Number(val));

	for(let i = 0; i < digits.length; i++) {
		if(n % digits[i] !== 0) return false;
	}

	return true;
};