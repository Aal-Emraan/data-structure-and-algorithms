const numbers = [3, 25, 46, 567, 65, 76, 8, 7, 8, 87, 6789, 79, 87, 989];

function sorting(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				// for descending order, the if statement should be
				// if (array[j] < array[j + 1]) {
				[array[j], array[j + 1]] = [array[j + 1], array[j]];
			}
		}
	}
	return array;
}
const sortedArray = sorting(numbers);
console.log(sortedArray);
