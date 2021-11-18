const numbers = [3, 25, 46, 567, 65, 76, 8, 7, 8, 87, 6789, 79, 87, 989];

function selectionSort(array) {
	for (let i = 0; i < array.length; i++) {
		let min = i;
		for (let j = i; j < array.length; j++) {
			if (array[min] > array[j]) {
				min = j;
			}
		}
		[array[min], array[i]] = [array[i], array[min]];
	}
	return array;
}

const sortedArray = selectionSort(numbers);
console.log(sortedArray);
