//  use Capitalized words (= upper camel case) in Model names:
//  e.g. model 'Author', 'Book', 'BookInstance', 'Genre'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const genreSchema = new Schema ({
	name: {type: String, required: true, min:3, max: 100},
});

//  virtual property 'url'
genreSchema
	.virtual('url')
	.get(function () {
		return '/catalog/genre/' + this._id;
	});

//  last thing: export model
module.exports = mongoose.model('Genre', genreSchema);