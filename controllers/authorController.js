const Author = require('../models/author');

// Display list of all Authors.
exports.author_list = function(req, res, next) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('author_list', { title: 'Author List', author_list: list_authors });
    });

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