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

	static CheckJunctionNumber(N: number) {
		if(N < 1) throw new Error("Only natural numbers can be Junction Numbers!");

		N = Math.round(N);

		const getSumOfNumber = (n: number) => {
			let sum = 0;

			String(n)
				.split("")
				.forEach(strVal => sum = sum + Number(strVal));

			return sum;
		};

		let count = 0;
		const results: number[] = [];

		for(let i = 0; i < N; i++) {
			if(i + getSumOfNumber(i) === N) {
				count++;
				results.push(i);
			}
		}

		return {
			isJunction: count >= 2,
			values: results,
		};
	}

	static checkColombianNumber(n: number) {
		if(n < 1) throw new Error("Only natural numbers can be self numbers");

		n = Math.round(n);

		const DN = String(n).length;

		const R = (N: number)=> 1 + ((N - 1) % 9);
		const RN = R(n);

		const H = (N: number) => {
			if(N % 2 === 0) return RN / 2;
			else return (RN + 9) / 2;
		};

		const HN = H(n);

		let self: boolean = true;
		const results: number[] = [];

		for(let k = 0; k <= DN; k++) {
			const abs = Math.abs(
				n - HN - (9 * k),
			);

			const LHS = abs
				.toString()
				.split("")
				.map(Number)
				.reduce((a, b) => a + b, 0);

			const RHS = HN + (9 * k);

			if(LHS === RHS) {
				self = false;
				results.push(abs);
			}
		}

		return {
			selfNumber: self,
			results,
		};
	}

	static checkTcefrepNumber(n: number) {
		if(n < 1) throw new Error("Only natural numbers can be self numbers");

		n = Math.round(n);

		const reverseNumber = Number(String(n).split("").reverse().join(""));

		let result = 0;

		// find all divisors which divides 'num'
		for (let i = 2; i <= Math.sqrt(n); i++) {
			// if 'i' is divisor of 'num'
			if (n % i == 0) {
				if (i == (n / i)) result += i;
				else result += (i + n / i);
			}
		}

		return reverseNumber === result + 1;
	}
};

export default NumberyStuff;