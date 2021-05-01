import SmallestNumberWhoseSquareHasNDigits from "./Functions/SmallestNumberWhoseSquareHasNDigits";

class NumberyStuff {
	static GeometricSeries = {
		InfiniteSum(a: number, r: number) {
			if(r > 1) throw new Error("The series is diverging since ratio is greater than 1. It can't be calculated as it tends to infinity");

			if(r === 1) throw new Error("The series is tending to infinity since ratio is equal to 1, meaning the Sum with keep increasing everytime");

			const req = 1 - r;

			return (a / req);
		},
		NthTerm(a: number, r: number, n: number) {
			if(n < 1) throw new Error("n can't be less than 1!");

			return a * (Math.pow(r, (Math.round(n) - 1)));
		},
	};

	static PentagonalNumbers = {
		checkPentagonal(N: number) {
			if(N <= 0) throw new Error("Pentagonal numbers belong to Natural Numbers");

			N = Math.round(N);

			let M: number = 0, i = 1;

			do {
				M = ((3 * Math.pow(i, 2)) - i) / 2;

				i++;
			}
			while(M < N);

			return M === N;
		},
		NthTerm(n: number) {
			if(n < 1) throw new Error("The position can't be less than one!");

			n = Math.round(n);

			return ((3 * Math.pow(n, 2)) - n) / 2;
		},
		List(n: number) {
			if(n < 1) throw new Error("The number of pentagonal numbers generated can't be less than 1!");

			n = Math.round(n);
			const numbers: number[] = [];

			for(let i = 1; i <= n; i++) numbers.push(this.NthTerm(i));

			return numbers;
		},
	};

	static CountOfSameLengthStringsThatExistLexicographicallyBetween2Strings(s1: string, s2: string) {

		if(s1.length !== s2.length) throw new Error("The length of the strings has to be the same!");

		const LexicographicallyLesserStrings = (stringy: string) => {
			let count = 0;

			for(let i = 0; i < stringy.length; i++) {
				count += (stringy.charCodeAt(i) - 97) * Math.pow(26, stringy.length - i - 1);
			}

			return count;
		};

		const count1 = LexicographicallyLesserStrings(s1.toLowerCase());
		const count2 = LexicographicallyLesserStrings(s2.toLowerCase());

		return ((count2 - count1) - 1);
	};

	static SmallestNumberWhoseSquareHasNDigits = SmallestNumberWhoseSquareHasNDigits;
};

export default NumberyStuff;