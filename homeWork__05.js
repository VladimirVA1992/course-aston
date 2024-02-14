// Задание 1
let promiseTwo = new Promise((resolve, reject) => {
	resolve("a");
});

promiseTwo
	.then((res) => {
		return res + "b";
	})
	.then((res) => {
		return res + "с";
	})
	.finally((res) => {
		return res + "!!!!!!!";
	})
	.catch((res) => {
		return res + "d";
	})
	.then((res) => {
		console.log(res);
	});

// abс

// Задание 2
function doSmth() {
	return Promise.resolve("123");
}

doSmth()
	.then(function (a) {
		console.log("1", a); //
		return a;
	})
	.then(function (b) {
		console.log("2", b);
		return Promise.reject("321");
	})
	.catch(function (err) {
		console.log("3", err);
	})
	.then(function (c) {
		console.log("4", c);
		return c;
	});

// 1 123
// 2 123
// 3 321
// 4 undefined

// Задание 3
const arr = [10, 12, 15, 21];
let delay = 3000;

arr.forEach((item, index) => {
	if (index === 0) {
		setTimeout(() => console.log(index), 0);
		return;
	}
	if (index === 1) {
		setTimeout(() => console.log(index), delay);
		return;
	}
	setTimeout(() => console.log(index), delay * index);
});

// Задание 4
// Можно при попощи хаков и обходных маневров по типу этого:

// export default (async () => {
//     await delay(1000);
//     squareOutput = square(13);
//     diagonalOutput = diagonal(12, 5);
//     return { squareOutput, diagonalOutput };
// })();

// с этим нао быть акуратным, и подобное должно быть опрадано необходимо

// Задание 5

let trying = 0;

fetch(`https://api.github.com/repos/gudh/ihove/forks`)
	.then((res) => (res.ok ? res : Promise.reject(res)))
	.then((data) => console.log("+", data))
	.catch(() => console.log("some error"));
