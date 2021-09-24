const express = require('express');
const multer = require('multer');
// const upload = multer({ dest: 'uploads/' }); //tao ra folder uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, './uploads');
	},
	filename: function (req, file, cb) {
		// const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
		cb(null, file.originalname);
	},
});
const upload = multer({ storage: storage }).single('sendFile');
const router = express.Router();

router.post('/', function (req, res) {
	upload(req, res, function (err) {
		if(err) {
			return res.json('error!!!!!!!!');
		} else {
			console.log('test');
			return res.status(200).json('okay');
		}
	});
});

module.exports = router;
