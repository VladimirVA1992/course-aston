// Задание 1
// Сортировка пузырьком
// Шейкерная сортировка
// Сортировка расческой
// Сортировка вставками
// Сортировка Шелла
// Сортировка деревом
// Гномья сортировка
// Сортировка выбором
// Пирамидальная сортировка
// Быстрая сортировка
// Сортировка слиянием
// Сортировка подсчетом
// Блочная сортировка
// Поразрядная сортировка
// Битонная сортировка

// Задание 2 теория

// Задание 3

Object.prototype.loginfo = function () {
	console.log("hello one");
};

// const Person  = Object.create({});
// const Person  = new Object();

const Person = {
	myName: function () {
		console.log("agonia");
	},
};

const Person2 = Object.create(Person);

Person2.logInfo();

// Задание 4

class PersonThree {
	name;

	constructor(name) {
		this.name = name;
	}

	set name(value) {
		this.name = value;
	}

	get name() {
		return this.name;
	}
}

class Personaliti extends PersonThree {
	constructor(name) {
		super(name);
	}
}

// бонус

// 1)
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const total = 13;
let result = [];

const firstSum = (arr, total) => {
	for (let i = 0; i < arr.length; i += 1) {
		for (let b = i + 1; b <= arr.length; b += 1) {
			if (total === arr[i] + arr[b]) {
				result.push(arr[i], arr[b]);
				return;
			}
		}
	}
};

firstSum(arr, total);
console.log(result);

// 2)
// O(n2) потому что двойной перебор
