var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Song = new Schema({
	title: String,
	artist: String,
	lyrics: String
});

module.exports = mongoose.model('Song', Song);