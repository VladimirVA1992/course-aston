// Задание 1

const counter = {};
const counter2 = Object.create({});
const counter3 = new Object();

// Задание 2

// поверхстное копирование
const copyCounter = { ...counter };
const copyCounter2 = Object.assign({}, counter);
const copyCounter3 = JSON.parse(JSON.stringify(counter));

// глубокое копирование
const copyCounter4 = structuredClone(counter);
function deepClone(originObj) {
	const cloneObj = {};

	for (const value in originObj) {
		if (originObj[value] instanceof Object) {
			cloneObj[value] = deepClone(originObj[value]);
			continue;
		}
		cloneObj[value] = originObj[value];
	}

	return cloneObj;
}

// Задание 3

function makeCounter() {}
const makeCounter = () => {};
const makeCounter2 = function func() {};
const makeCounter3 = new Function("a", "b", "return a + b");

// Задание 4

// Выдержка из дока описивающая что это за сущность

// Метод global structured Clone() создает глубокий клон заданного значения, используя алгоритм структурированного клонирования.
// Метод также позволяет переносить переносимые объекты в исходном значении,
// а не клонировать в новый объект.
// Перенесенные объекты отсоединяются от исходного объекта и присоединяются к новому объекту; они больше недоступны в исходном объекте.

// Как работает
// обявляем переменную, вызываем метод structuredClone({желаемый объект}) передаем в аргумент желаемы объект на копирование
// const object2 = structuredClone(object1, { transfer: [buffer1] });
// вариант с доп параметром когда мы хотим копировать переносимы объект (из описания эта такая сущность которая пережает полностью, а не создает ссылку на себя ps как я понял)

// Бонус
// Задание 1

const obj1 = { here: { is: "on", other: "3" }, object: "Y" };
const obj2 = { here: { is: "on", other: "2" }, object: "Y" };
const obj3 = { here: { is: "on", other: "3" }, object: "Y" };

const isDeepEqual = (object1, object2) => {
	const objKeys1 = Object.keys(object1);
	const objKeys2 = Object.keys(object2);

	if (objKeys1.length !== objKeys2.length) return false;

	for (var key of objKeys1) {
		const value1 = object1[key];
		const value2 = object2[key];

		const isObjects = isObject(value1) && isObject(value2);

		if (
			(isObjects && !isDeepEqual(value1, value2)) ||
			(!isObjects && value1 !== value2)
		) {
			return false;
		}
	}
	return true;
};

const isObject = (object) => {
	return object != null && typeof object === "object";
};

isDeepEqual(obj1, obj2); // false
isDeepEqual(obj1, obj3); // true

// Задание 2

// для фразы
function reverseStr(str) {
	return str.split().reverse().join();
}

let str = "ежи в кустах";
reverseStr(str);

// для слова
function reverseStr2(str) {
	return str.split("").reverse().join().split(",").join("");
}

str = "огурец";
reverseStr(str);
