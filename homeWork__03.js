// Задача 1

// Так как JS у нас C подобный язык расмотрим на его примере почему массивы в JS не правильные.

// В C массивы строго типизированы и имеют фиксированную длину.

// В JavaScript массивы имеют переменную длину. Тип их содержимого не контролируется — точно так же, как и тип обычных переменных.
// Язык берёт на себя управление памятью, в результате длина массива способна увеличиваться или уменьшаться, а разработчик может об этом не задумываться.

// JavaScript-массивы совмещают в себе несколько структур данных таких как: связаный список, очередь, стек

// Задача 2

function logger() {
	console.log(`I output only external context: ${this.item}`);
}

const obj = { item: "some value" };

logger.call(obj);
logger.apply(obj);
const newContext = logger.bind(obj);
newContext();

// Задача 3.1 - Создайте массив чисел и найдите его сумму.

const newArr = [1, 2, 3, 4, 5, 6];

const sumArr = newArr.reduce((acc, current) => acc + current, 0);

console.log(sumArr);

// Задача 3.1 - Создайте массив строк и объедините их в одну строку.
// не очень понял какой нужне результат, массив где все итемы стали одной строкой или создание слитную строки из масива, поэтому оба варианта :)

const strArr = ["a", "w", "e", "s", "o", "n"];

const newStr = strArr.join("");

const newStrArr = strArr.join("").split();

console.log(newStr);
console.log(newStrArr);

// Задача 3.1 - Найдите максимальный и минимальный элементы в массиве чисел.

const newArrForSortMaximum = [3, 1, 2, 4, 5, 6];
const newArrForSortMinimum = [6, 1, 2, 7, 4, 6];

const arrMaximum = newArrForSortMaximum.sort((a, b) => a - b);
const arrMinimum = newArrForSortMinimum.sort((a, b) => b - a);

console.log(arrMaximum);
console.log(arrMinimum);

// Задача 3.2 Стек

// как понял задание необходие продемострировать описательный вариант его работы, лучше всего для этого подойдет массив в js

const stak = [1, 2, 3, 4, 5, 6]; // нашь стек
const copyStak = [1, 2, 3, 4, 5, 6]; // копия стака если нам нужно будет отменить последнюю операци

stak.push("7"); // операция добавления в стек
stak.push("8"); // операция добавления в стек

copyStak.push("7"); // операция добавления в стек
copyStak.push("8"); // операция добавления в стек

const seeLastStakItem = stak.at(-1); // получение верхнего елемента без его удаленя из стека

const stakItem = stak.pop(); // операция доставания из стека для дальнейших операций

const undoStakItem = copyStak.at(-1); // операция отмены последнего действия

stak.push(undoStakItem);

// Задача 3.3 Очередь

// как понял задание необходие продемострировать его работы, если конечно нужно было написать свои функции и добавить туда эти методы имитируя работы приложения,
// то для этого нам просто достаточно было написать именные функции ипоместить туда то что уже написано

const queueHumans = [1, 2, 3, 4, 5, 6]; // наша очередь

queueHumans.push("7"); // операция добавления в очередь

const currentHumanForNextIteration = queueHumans[0]; // получение первого элемента без его удаления

const nextHuman = stak.shift(); // обработка очереди в соответсвии с порядком
