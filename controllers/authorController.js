const Author = require('../models/author');

exports.author_list = (req, res) => {
	res.send('To be implemented: Author List');
};

exports.author_detail = (req, res) => {
	res.send('To be implemented: Author Detail of ' + req.params.id);
};

exports.author_create_get = (req, res) => {
	res.send('To be implemented: GET for the form of creating a new author entry');
};

exports.author_create_post = (req, res) => {
	res.send('To be implemented: POST for the form of creating a new author entry');
};

exports.author_delete_get = (req, res) => {
	res.send('To be implemented: GET for the form of removing an author entry');
};

exports.author_delete_post = (req, res) => {
	res.send('To be implemented: POST for the form of removing an author entry');
};

exports.author_update_get = (req, res) => {
	res.send('To be implemented: GET for the form of updating an author entry');
};

exports.author_update_post = (req, res) => {
	res.send('To be implemented: POST for the form of updating an author entry');
};