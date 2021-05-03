export default function isDoubletonNumber(n: number) {
	const uniqueDigits = new Set(String(n).split(""));

	return uniqueDigits.size === 2;
};