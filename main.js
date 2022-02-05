'use strict';

const game = function () {
	let number = Math.ceil(Math.random() * 10);
	let tries = 10;

	const checkTries = function () {
		if (tries == 0) {
			let tryAgain = confirm('Число попыток закончилось! Попробуешь еще разок?');
			if (tryAgain == true) {
				game();
			} else {
				alert('Ты заходи, если шо!');
			}
		} else {
			question();
		}
	};

	function question() {
		let num = prompt('Введи число от 1 до 10');
		if (num == number) {
			let victory = confirm('Поздравляю! Ты угадал! Не желаешь попробовать еще раз?');
			if (victory == true) {
				game();
			} else {
				alert('Ты заходи, если шо!');
			}
		} else if (num == 0 || num > 10) {
			alert('Введи число от 1 до 10, ни больше, ни меньше!');
			question();
		} else if (num < number && num != null) {
			alert('Слишком мало! Осталось ' + (tries - 1) + ' попыток.');
			tries--;
			checkTries();
		} else if (num > number) {
			alert('Слишком много!  Осталось ' + (tries - 1) + ' попыток.');
			tries--;
			checkTries();
		} else if (num === null) {
			alert('Конец игры!');
		} else {
			alert('Введи число!');
			question();
		}
	}
	question();
	console.log(number);
};

game();