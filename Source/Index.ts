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
};

export default NumberyStuff;