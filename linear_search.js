const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const array = [43, 546, 5, 7, 67, 6, 745, 767, 854, 87];

function linear_search(array, target) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];
		if (element == target) {
			return i;
		}
		return "this number is not in this list";
	}
}

const index = linear_search(array, 76);
console.log(index);
