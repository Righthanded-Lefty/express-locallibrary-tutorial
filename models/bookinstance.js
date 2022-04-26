//  use Capitalized words (= upper camel case) in Model names:
//  e.g. model 'Author', 'Book', 'BookInstance', 'Genre'
var moment = require('moment');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookInstanceSchema = new Schema ({
	//  refer to related Book entry
	book: {
		type: Schema.Types.ObjectId,
		ref: 'Book',
		required: true,
	},

	// publisher info
	imprint: {type: String, required: true},

	status: {
		type: String,
		required: true,
		enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'],
		default: 'Maintenance'
	},
	backDue: {type: Date, default: Date.now}, //note the grammar of Date function
});

//  virtual property 'url'
bookInstanceSchema
	.virtual('url')
	.get(function () {
		return '/catalog/book_instance/' + this._id;
	});

//  virtual property 'backDue formatted'
bookInstanceSchema
	.virtual('backDue_formatted')
	.get(function () {
	  return moment(this.backDue).format('MMMM Do, YYYY');
	});

//  export model
module.exports = mongoose.model('BookInstance', bookInstanceSchema);