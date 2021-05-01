export default function SmallestNumberWhoseSquareHasNDigits(N: number) {
	// Let's Do the Logic first coz me is nub
	/**
	 * Need to find a pattern
	 * N = 1 --> 1
	 * N = 2 --> 4
	 * N = 3 --> 10
	 * N = 4 --> 32
	 * N = 5 --> 100
	 * Therefore my series is: 1, 4, 10, 32, 100
	 * Just realised after 10 pages of writing damn
	 * Every number is of form Math.ceil((10) ^ {(n - 1)/2})
	 * I guess we can work on that >:)
	 */
	if(N < 1) throw new Error("N can't be less than 1!");

	N = Math.round(N);

	return Math.ceil(
		Math.pow(
			10,
			((N - 1) / 2),
		),
	);
};