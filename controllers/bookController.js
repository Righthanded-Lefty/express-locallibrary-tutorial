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

// Display detail page for a specific book.
exports.book_detail = function(req, res, next) {

    async.parallel({
        book: function(callback) {

            Book.findById(req.params.id)
              .populate('author')
              .populate('genre')
              .exec(callback);
        },
        book_instance: function(callback) {

          BookInstance.find({ 'book': req.params.id })
          .exec(callback);
        },
    }, function(err, results) {
        if (err) { return next(err); }
        if (results.book==null) { // No results.
            var err = new Error('Book not found');
            err.status = 404;
            return next(err);
        }
        // Successful, so render.
        res.render('book_detail', { title: 'Title', book:  results.book, book_instances: results.book_instance } );
    });

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