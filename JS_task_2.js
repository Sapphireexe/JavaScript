names = ['Александр', 'Варя']
stuff = [['Цветы для Вари', 'Шаурма'], ['Помада', 'Духи', 'Пончики']]
cena = [[700, 300], [150, 5000, 200]]
money = [2000, 10000]

for (let counter1 = 0; counter1 < names.length; counter1++) {
	let ppl_stuff = stuff[counter1];
	let stuff_cena = cena[counter1];
	
	for (counter2 = 0; counter2 < ppl_stuff.length; counter2++) {
		money[counter1] = money[counter1] - stuff_cena[counter2];

		if (names[counter1] === 'Александр') {
			console.log(names[counter1] + ' купил ' + ppl_stuff[counter2] + ' за ' + stuff_cena[counter2] + ' рублей.');

			if (ppl_stuff[counter2] === 'Шаурма')
				console.log('Александр отравился шаурмой и вместо свидания с Варей потратит оставшиеся ' + money[counter1] + ' рублей на Мезим.');
			else
				console.log('У Александра теперь есть ' + ppl_stuff[counter2] + ' и осталось ' + money[counter1] + ' рублей.');

		} else {
			console.log(names[counter1] + ' купила ' + ppl_stuff[counter2] + ' за ' + stuff_cena[counter2] + ' рублей.');

			if (ppl_stuff[counter2] === 'Пончики')
				console.log('Варя спустила ' + stuff_cena[counter2] + ' рублей на пончики и теперь вместо свидания с Александром пойдёт в фитнес-центр на оставшиеся ' + money[counter1] + ' рублей.');
			else
				console.log('У Вари теперь есть ' + ppl_stuff[counter2] + ' и осталось ' + money[counter1] + ' рублей.');
		
		}

	}

}