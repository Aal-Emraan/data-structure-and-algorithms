// FIFO = First In First Out is used called queue

class Queue {
	constructor() {
		this.queue = [];
	}
	enqueue(car) {
		this.queue.push(car);
	}
	dequeue() {
		this.queue.shift();
	}
}

const cars = new Queue();
cars.enqueue("toyota");
cars.enqueue("ferrari");
cars.enqueue("marcidez benz");
cars.enqueue("jaguar");
console.log(cars.queue);
cars.dequeue();

console.log(cars.queue);
