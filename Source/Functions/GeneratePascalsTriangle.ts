export default function GeneratePascalsTriangle(rows: number) {

	if (rows === 0) return [];
	if (rows === 1) return [[1]];

	const result = [];

	for (let row = 1; row <= rows; row++) {
		const arr: number[] = [];

		for (let col = 0; col < row; col++) {

			if (col === 0 || col === row - 1) {
				arr.push(1);
			}

			else {
				arr.push((result[row - 2][col - 1] + result[row - 2][col]));
			}
		}

		result.push(arr);
	}

	return result;
};