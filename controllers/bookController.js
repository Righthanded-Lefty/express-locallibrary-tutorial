/*
	const Book = require('../models/book');


		exports.index = (req, res) => {
			res.send('To be implemented: Home Page of Website');
		};


	exports.index = function(req, res, next) {
	    res.send('NOT IMPLEMENTED: Site Home Page');
	}
*/

var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');

var async = require('async');

exports.index = function(req, res) {

    async.parallel({
        book_count: function(callback) {
            Book.count({}, callback); // Pass an empty object as match condition to find all documents of this collection
        },
        book_instance_count: function(callback) {
            BookInstance.count({}, callback);
        },
        book_instance_available_count: function(callback) {
            BookInstance.count({status:'Available'}, callback);
        },
        author_count: function(callback) {
            Author.count({}, callback);
        },
        genre_count: function(callback) {
            Genre.count({}, callback);
        },
    }, function(err, results) {
        res.render('index', { title: 'Local Library Home', error: err, data: results });
        // note that field 'title' is defined here, and passed on to
        // index.pug and layout.pug . recalled with grammar 'h1= title'
        // & 'title= title'.
    });
};

/*	exports.book_list = (req, res) => {
		res.send('To be implemented: Book List');
	};
*/

// Display list of all Books.
exports.book_list = function(req, res, next) {

  Book.find({}, 'title author')
    .populate('author')
    .exec(function (err, list_books) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('book_list', { title: 'Book List', book_list: list_books });
    });

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