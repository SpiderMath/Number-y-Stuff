export default function isPandigital(n: number | bigint) {
	if(String(n).length < 10) throw new Error("The number has to be atleast to have 10 digits to be eligible for being Pandigital");

	return new Set(String(n).split("")).size !== 10;
};