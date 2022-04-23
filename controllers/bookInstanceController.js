const BookInstance = require('../models/bookinstance');

exports.bookinstance_list = (req, res) => {
	res.send('To be implemented: Author List');
};

exports.bookinstance_detail = (req, res) => {
	res.send('To be implemented: Author Detail of ' + req.params.id);
};

exports.bookinstance_create_get = (req, res) => {
	res.send('To be implemented: GET for the form of creating a new bookinstance entry');
};

exports.bookinstance_create_post = (req, res) => {
	res.send('To be implemented: POST for the form of creating a new bookinstance entry');
};

exports.bookinstance_delete_get = (req, res) => {
	res.send('To be implemented: GET for the form of removing a bookinstance entry');
};

exports.bookinstance_delete_post = (req, res) => {
	res.send('To be implemented: POST for the form of removing a bookinstance entry');
};

exports.bookinstance_update_get = (req, res) => {
	res.send('To be implemented: GET for the form of updating a bookinstance entry');
};

exports.bookinstance_update_post = (req, res) => {
	res.send('To be implemented: POST for the form of updating a bookinstance entry');
};