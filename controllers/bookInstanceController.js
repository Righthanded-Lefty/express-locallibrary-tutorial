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

exports.book_instance_create_get = (req, res) => {
	res.send('To be implemented: GET for the form of creating a new bookinstance entry');
};

exports.book_instance_create_post = (req, res) => {
	res.send('To be implemented: POST for the form of creating a new bookinstance entry');
};

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