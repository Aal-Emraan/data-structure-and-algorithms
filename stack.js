// LIFO = Last In First Out used method is called stack

class Stack {
	constructor() {
		this.stack = [];
	}
	add(element) {
		this.stack.push(element);
	}
	remove() {
		if (this.stack.length === 0) {
			console.log("nothing to remove.");
		} else {
			this.stack.pop();
		}
	}
}

const plates = new Stack();
plates.add("chinir plate");
console.log(plates);
plates.add("matir plate");
console.log(plates);
plates.add("plastic plate");
console.log(plates);
console.log(plates.stack);
plates.remove();
plates.remove();
plates.remove();
plates.remove();
plates.remove();
console.log(plates.stack);
