export default function MobileNumericSequenceToSentence(input: string) {
	const Mapping = ["", "", "ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
	const strArr = input.split("");

	let i = 0;
	let answer: string = "";

	while(i < strArr.length) {
		if(strArr[i] === ".") {
			i++;
			continue;
		}

		let count = 0;

		while((i + 1) < strArr.length && strArr[i] === strArr[i + 1]) {
			if(count === 2 && ((strArr[i] >= "2" && strArr[i] <= "6") || strArr[i] === "8")) break;

			else if(count === 3 && (strArr[i] === "7" || strArr[i] === "9")) break;

			count++;
			i++;

			if(i === strArr.length) break;
		}

		if (strArr[i] == "7" || strArr[i] == "9") answer += Mapping[Number(strArr[i])].charAt(count % 4);

		else answer += Mapping[Number(strArr[i])].charAt(count % 4);

		i++;
	}

	return answer;
};