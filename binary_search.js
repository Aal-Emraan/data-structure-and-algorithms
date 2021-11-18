const numbers = [3, 5, 6, 8, 12, 14, 16, 18, 24, 26, 27, 29, 47, 58, 87];

function binary_search(array, target) {
	let start = 0;
	let end = array.length - 1;

	while (start <= end) {
		const mid = Math.floor(start + end) / 2;
		if (array[mid] == target) {
			return mid;
		}
		if (array[mid] > target) {
			end = mid - 1;
		}
		if (array[mid] < target) {
			start = mid + 1;
		}
	}
	return "this item is not in this list";
}

const index = binary_search(numbers, 8);
console.log(index);
