//  use Capitalized words (= upper camel case) in Model names:
//  e.g. model 'Author', 'Book', 'BookInstance', 'Genre'

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
	title: {type: String, required: true},
	author: {
		type: Schema.Types.ObjectId,
		ref: 'Author',
		required: true,
	},
	summary: {type: String, required: true, max: 500},
	isbn: {type: String, required: true},
	/*  according to new changes in 2007,
	 	ISBN index has a standard length of '13'.
	 	go to official website for more info.
	*/

	genre: [{
		type:Schema.Types.ObjectId,
		ref: 'Genre',
	}],
});

//  virtual property 'url'
bookSchema
	.virtual('url')
	.get(function () {
		return '/catalog/book/' + this._id;
	});

//  export model
module.exports = mongoose.model('Book', bookSchema);