'use strict';

const game = function () {
	// let number = Math.ceil(Math.random() * 100);
	let number = 10;

	function question() {
		let num = prompt('Введите число от 1 до 10');
		if (num == number) {
			alert('Угадал');
		} else if (num == 0) {
			alert('Не годится!');
			question();
		} else if (num < number && num != null) {
			alert('Слишком мало!');
			question();
		} else if (num > number) {
			alert('Слишком много!');
			question();
		} else if (num === null) {
			alert('Конец игры!');
		} else {
			alert('Введите число!');
			question();
		}
	}
	question();
};

console.log(game());