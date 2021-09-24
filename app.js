const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const apiPath = '/api/';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// website
app.use(express.static('client'));

// routers
app.use(apiPath + 'users', require('./routes/users.route'));
app.use(apiPath + 'upload', require('./routes/upload.route'));

app.listen(port, function () {
	const host = 'localhost';
	console.log('Example app listening at http://%s:%s', host, port);
});
