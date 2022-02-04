'use strict';

'use strict';

const game = function () {
	// let number = Math.ceil(Math.random() * 100);
	let number = 5;
	let tries = 2;

	const checkTries = function () {
		if (tries < 1) {
			confirm('Число попыток закончилось! Попробуешь еще разок?');
			switch (true) {
				case 1:
					alert('Эээхххх, люблю азартных!');
					game();
					break;
				case 0:
					alert('Ты заходи, если шо!');
					break;
			}
			// if (true) {
			// 	alert('Эээхххх, люблю азартных!');
			// 	game();
			// } else {
			// 	alert('Ты заходи, если шо!');
			// }
		}
	};

	function question() {
		let num = prompt('Введи число от 1 до 10');
		if (num == number) {
			if (confirm('Поздравляю! Ты угадао! Не желаешь попробовать еще раз?')) {
				alert('Эээхххх, люблю азартных!');
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
			question();
		} else if (num > number) {
			alert('Слишком много!  Осталось ' + (tries - 1) + ' попыток.');
			tries--;
			checkTries();
			question();
		} else if (num === null) {
			alert('Конец игры!');
		} else {
			alert('Введи число!');
			question();
		}
	}
	question();
	console.log(tries);
};

game();