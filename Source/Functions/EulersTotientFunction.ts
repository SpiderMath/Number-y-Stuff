export default function EulersTotientFunction(N: number) {
	const HCF = (a: number, b: number): number => {
		if(a === 0) return b;

		return HCF(b % a, a);
	};

	let result: number = 1;
	const results: number[] = [];

	for(let i = 2; i < N; i++) {
		if(HCF(i, N) === 1) {
			result++;
			results.push(i);
		}
	}

	return {
		value: result,
		results,
	};
};