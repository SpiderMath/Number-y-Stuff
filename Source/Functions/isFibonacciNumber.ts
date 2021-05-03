/**
 * Challenge by School Friend :P
 * Will have to check if a number is fibonacci
 * Time to get started on ways of checking fibonacci
 * Found one thing: https://en.wikipedia.org/wiki/Fibonacci_number#Identification
 * This says for number x
 * Either one of the following has to be a perfect square:
 * 5*(x)^2 + 4
 * 5*(x)^2 - 4
 * Let's see if it works as a program
 * It is true for 3
 * 5 * 9 + 4 = 49 = 7^2
*/

export default function isFibonacciNumber(n: number) {
	const isPerfectSquare = (input: number) => input === Math.pow(parseInt(String(Math.sqrt(input))), 2);

	return isPerfectSquare(
		(5 * Math.pow(n, 2)) + 4,
	) || isPerfectSquare(
		(5 * Math.pow(n, 2)) - 4,
	);
};