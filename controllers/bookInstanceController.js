const { body,validationResult } = require('express-validator');

var async = require('async');
var Book = require('../models/book');

var moment = require('moment');

const BookInstance = require('../models/bookinstance');

/*
	exports.book_instance_list = (req, res) => {
		res.send('To be implemented: Book Instance (Copy) List');
	};
*/

// Display list of all BookInstances.
exports.book_instance_list = function(req, res, next) {

  BookInstance.find()
    .populate('book')
    .exec(function (err, list_bookinstances) {
      if (err) { return next(err); }
      // Successful, so render
      res.render('book_instance_list', { title: 'Book Instance List', book_instance_list: list_bookinstances });
    });

};

// Display detail page for a specific BookInstance.
exports.book_instance_detail = function(req, res, next) {

  BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function (err, results) {
      if (err) { return next(err); }
      if (results==null) { // No results.
          var err = new Error('Book copy not found');
          err.status = 404;
          return next(err);
        }
      // Successful, so render.
      res.render('book_instance_detail', { title: 'Book:', book_instance: results });
    });

};

// Display BookInstance create form on GET.
exports.book_instance_create_get = function(req, res, next) {

    Book.find({},'title')
    .exec(function (err, books) {
      if (err) { return next(err); }
      // Successful, so render.
      res.render('book_instance_form', {title: 'Create BookInstance', book_list: books});
    });

};

// Handle BookInstance create on POST.
exports.book_instance_create_post = [

    // Validate and sanitize fields.
    body('book', 'Book must be specified').trim().isLength({ min: 1 }).escape(),
    body('imprint', 'Imprint must be specified').trim().isLength({ min: 1 }).escape(),
    body('status').escape(),
    body('backDue', 'Invalid date').optional({ checkFalsy: true }).isISO8601().toDate(),

    // Process request after validation and sanitization.
    (req, res, next) => {

        // Extract the validation errors from a request.
        const errors = validationResult(req);

        // Create a BookInstance object with escaped and trimmed data.
        var book_instance = new BookInstance(
          { book: req.body.book,
            imprint: req.body.imprint,
            status: req.body.status,
            backDue: req.body.backDue
           });

        if (!errors.isEmpty()) {
            // There are errors. Render form again with sanitized values and error messages.
            Book.find({},'title')
                .exec(function (err, books) {
                    if (err) { return next(err); }
                    // Successful, so render.
                    res.render('book_instance_form', { title: 'Create BookInstance', book_list: books, selected_book: book_instance.book._id, errors: errors.array(), book_instance: book_instance });
            });
            return;
        }
        else {
            // Data from form is valid.
            book_instance.save(function (err) {
                if (err) { return next(err); }
                   // Successful - redirect to new record.
                   res.redirect(book_instance.url);
                });
        }
    }
];

exports.book_instance_delete_get = (req, res) => {
	res.send('To be implemented: GET for the form of removing a bookinstance entry');
};

exports.book_instance_delete_post = (req, res) => {
	res.send('To be implemented: POST for the form of removing a bookinstance entry');
};

exports.book_instance_update_get = (req, res) => {
	res.send('To be implemented: GET for the form of updating a bookinstance entry');
};

exports.book_instance_update_post = (req, res) => {
	res.send('To be implemented: POST for the form of updating a bookinstance entry');
};