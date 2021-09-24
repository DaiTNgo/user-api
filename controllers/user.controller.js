const User = require('../models/user.model');
const people = require('../assets/people.json');
const fs = require('fs');
class UserController {
	get(req, res) {
		// return res.status(200).json('Chào bạn, đã nhận được yêu cầu của bạn !');
		const filter = req.query.filter;
		// console.log('filter', filter);
		const filterPeople = people.filter((person) =>
			person.first_name.includes(filter)
		);

		// fs.writeFile('mynewfile4.txt', `Hello content! hello `, function (err) {
		// 	if (err) throw err;
		// 	console.log('Saved!');
		// });

		try {
			const data = fs.readFileSync('chao.txt', 'utf-8');
			return res.status(200).json({ data: data });
		} catch (err) {
			console.log('error is ', err);
			return res.json({ error: 'Khong the doc file' });
		}

		// return res
		// 	.status(200)
		// 	.json({ data: filterPeople, length: filterPeople.length });
	}

	post(req, res) {
		const filter = req.body.filter;
		fs.appendFile('chao.txt', `Chào bạn ${filter} `, function (e) {
			if (e) {
				console.log('error ', err);
			} else {
                return res.status(200).json({ result: `Chào bạn ${filter}` });
				console.log('saved');
			}
		});
		
	}
}

module.exports = new UserController();
