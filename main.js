'use strict';

'use strict';

const game = function () {
	// let number = Math.ceil(Math.random() * 100);
	let number = 5;
	let tries = 2;
	const checkTries = function () {
		if (tries < 1) {
			if (confirm('Число попыток закончилось! Попробуешь еще разок?;)')) {
				alert('Эээхххх, люблю азартных!');
				game();
			} else {
				alert('Ты заходи, если шо!');
			}
		}
	};

	function question() {
		let num = prompt('Введите число от 1 до 10');
		if (num == number) {
			if (confirm('Поздравляю! Точно в дырочку, всмысле в яблочко! Не желаешь попробовать еще раз?')) {
				alert('Эээхххх, люблю азартных!');
				game();
			} else {
				alert('Ты заходи, если шо!');
			}
		} else if (num == 0 || num > 10) {
			alert('Сказал же, число от 1 до 10, ни больше, ни меньше!');
			question();
		} else if (num < number && num != null) {
			alert('Слишком мало! Осталось ' + (tries - 1) + ' попыток.');
			tries--;
			checkTries();
			question();
		} else if (num > number) {
			alert('Слишком много!  Осталось ' + (tries - 1) + ' попыток.');
			tries--;
			checkTries();
			question();
		} else if (num === null) {
			alert('Ага, здаешься?!');
		} else {
			alert('Чииисло введи!');
			question();
		}
	}
	question();
	console.log(tries);
};

let result = game();
console.log(result);