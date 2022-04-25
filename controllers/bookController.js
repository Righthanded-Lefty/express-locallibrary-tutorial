const Book = require('../models/book');

exports.index = (req, res) => {
	res.send('To be implemented: Home Page of Website');
};

exports.book_list = (req, res) => {
	res.send('To be implemented: Book List');
};

exports.book_detail = (req, res) => {
	res.send('To be implemented: Book Detail of ' + req.params.id);
};

exports.book_create_get = (req, res) => {
	res.send('To be implemented: GET for the form of creating a new book entry');
};

exports.book_create_post = (req, res) => {
	res.send('To be implemented: POST for the form of creating a new book entry');
};

exports.book_delete_get = (req, res) => {
	res.send('To be implemented: GET for the form of removing a book entry');
};

exports.book_delete_post = (req, res) => {
	res.send('To be implemented: POST for the form of removing a book entry');
};

exports.book_update_get = (req, res) => {
	res.send('To be implemented: GET for the form of updating a book entry');
};

exports.book_update_post = (req, res) => {
	res.send('To be implemented: POST for the form of updating a book entry');
};