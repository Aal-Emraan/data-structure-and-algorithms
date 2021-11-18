class Dictionary {
	constructor() {
		this.dictionary = {};
	}
	add(key, value) {
		this.dictionary[key] = value;
	}
	get(key) {
		return this.dictionary[key];
	}
}

const person1 = new Dictionary();
person1.add("name", "aal emraan");
person1.add("age", 23);
person1.add("designation", "Web Developer");

console.log(person1.dictionary);
console.log(person1.get("age"));
console.log(person1.get("name"));
