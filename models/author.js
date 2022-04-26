//  use Capitalized words (= upper camel case) in Model names:
//  e.g. model 'Author', 'Book', 'BookInstance', 'Genre'

var moment = require('moment');

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
	firstName: {type: String, required: true, max: 100},
	lastName: {type: String, required: true, max: 100},
	dateOfBirth: {type: Date},
	dateOfDeath: {type: Date},
});

//  virtual property 'name_MLA': use MLA format in denoting full name of the first author
authorSchema
	.virtual('name_MLA')
	.get(function () {
		return this.lastName + ', ' + this.firstName + '. ';
	});

//  virtual property 'lifespan': denote the author's lifespan
authorSchema
	.virtual('lifespan')
	.get(function () {
		return (
			this.dateOfDeath.getYear() - this.dateOfBirth.getYear()
			).toString();
	});

//  for sake of formatting birthdate and deathdate, add
authorSchema
	.virtual('dateOfBirth_formatted')
	.get(function () {
		return this.dateOfBirth ? moment(this.dateOfBirth).format('YYYY-MM-DD') : '?';
	});

authorSchema
	.virtual('dateOfDeath_formatted')
	.get(function () {
		return this.dateOfDeath ? moment(this.dateOfDeath).format('YYYY-MM-DD') : '?';
	});

//  virtual property 'url'
authorSchema
	.virtual('url')
	.get(function () {
		return '/catalog/author/' + this._id;
	});

//  export model
module.exports = mongoose.model('Author', authorSchema);