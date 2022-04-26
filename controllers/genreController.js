const Genre = require('../models/genre');

exports.genre_list = function(req, res, next) {

  Genre.find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('genre_list', { title: 'Genre List', genre_list: list_genres });
    });

};

exports.genre_detail = (req, res) => {
	res.send('To be implemented: Genre Detail of ' + req.params.id);
};

exports.genre_create_get = (req, res) => {
	res.send('To be implemented: GET for the form of creating a new genre entry');
};

exports.genre_create_post = (req, res) => {
	res.send('To be implemented: POST for the form of creating a new genre entry');
};

exports.genre_delete_get = (req, res) => {
	res.send('To be implemented: GET for the form of removing a genre entry');
};

exports.genre_delete_post = (req, res) => {
	res.send('To be implemented: POST for the form of removing a genre entry');
};

exports.genre_update_get = (req, res) => {
	res.send('To be implemented: GET for the form of updating a genre entry');
};

exports.genre_update_post = (req, res) => {
	res.send('To be implemented: POST for the form of updating a genre entry');
};