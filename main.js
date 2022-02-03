'use strict';

const game = function () {
	// let number = Math.ceil(Math.random() * 100);
	let number = 10;

	function question() {
		let num = prompt('Введите число от 1 до 10');
		if (num === number) {
			alert('Угадал');
		} else if (num < number) {
			alert('Слишком мало!');
			console.log(num);
			question();
		} else if (num > number) {
			alert('Слишком много!');
			question();
		} else if (num !== Number) {
			alert('Введите число!');
			question();
		} else if (num === null) {
			alert('Игра закончена');
		} else {
			alert('Угадал');
			console.log(num);
		}
		console.log(num);
	}
	question();
};


console.log(game());