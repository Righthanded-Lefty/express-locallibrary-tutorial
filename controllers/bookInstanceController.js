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

exports.book_instance_detail = (req, res) => {
	res.send('To be implemented: Book Instance (Copy) Detail of ' + req.params.id);
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